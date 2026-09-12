(function () {
  "use strict";

  var reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  var isDesktop = window.matchMedia("(min-width: 768px)").matches;

  /* ============================================================
     MOBILE MENU
     ============================================================ */
  var menuBtn = document.getElementById("menuBtn");
  var mobileMenu = document.getElementById("mobileMenu");

  if (menuBtn && mobileMenu) {
    menuBtn.addEventListener("click", function () {
      var isOpen = mobileMenu.classList.toggle("is-open");
      menuBtn.setAttribute("aria-expanded", isOpen ? "true" : "false");
    });

    mobileMenu.querySelectorAll("a").forEach(function (link) {
      link.addEventListener("click", function () {
        mobileMenu.classList.remove("is-open");
        menuBtn.setAttribute("aria-expanded", "false");
      });
    });
  }

  /* ============================================================
     HERO AGENT GRAPH — canvas visualization of an agent's
     hub-and-spoke topology (agent / retrieve / tools / judge /
     memory / ship). Motivated: this is literally the shape of
     the systems in the Work section below.
     ============================================================ */
  var canvas = document.getElementById("agentGraph");
  if (canvas) {
    var ctx = canvas.getContext("2d");
    var dpr = Math.min(window.devicePixelRatio || 1, 2);
    var W, H, nodes, edges, particles, rafId;

    var labels = ["Agent", "Retrieve", "Tools", "Judge", "Memory", "Ship"];

    function layout() {
      var rect = canvas.getBoundingClientRect();
      W = rect.width;
      H = rect.height;
      canvas.width = W * dpr;
      canvas.height = H * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

      var cx = W / 2;
      var cy = H / 2;
      var r = Math.min(W, H) * 0.34;

      nodes = [{ x: cx, y: cy, label: labels[0], hub: true }];
      var count = labels.length - 1;
      for (var i = 0; i < count; i++) {
        var angle = (Math.PI * 2 * i) / count - Math.PI / 2;
        nodes.push({
          x: cx + Math.cos(angle) * r,
          y: cy + Math.sin(angle) * r,
          label: labels[i + 1],
          hub: false,
          baseX: cx + Math.cos(angle) * r,
          baseY: cy + Math.sin(angle) * r,
          phase: Math.random() * Math.PI * 2,
        });
      }

      edges = [];
      for (var j = 1; j < nodes.length; j++) {
        edges.push({ a: 0, b: j });
      }

      particles = edges.map(function (e, idx) {
        return { edge: e, t: idx / edges.length, speed: 0.0035 + Math.random() * 0.002 };
      });
    }

    function draw(time) {
      ctx.clearRect(0, 0, W, H);

      if (!reduceMotion) {
        nodes.forEach(function (n) {
          if (n.hub) return;
          var t = time * 0.0006 + n.phase;
          n.x = n.baseX + Math.cos(t) * 4;
          n.y = n.baseY + Math.sin(t) * 4;
        });
      }

      // edges
      ctx.lineWidth = 1;
      edges.forEach(function (e) {
        var a = nodes[e.a];
        var b = nodes[e.b];
        ctx.strokeStyle = "rgba(255,255,255,0.10)";
        ctx.beginPath();
        ctx.moveTo(a.x, a.y);
        ctx.lineTo(b.x, b.y);
        ctx.stroke();
      });

      // traveling particles (represents live data flow through the graph)
      if (!reduceMotion) {
        particles.forEach(function (p) {
          p.t += p.speed;
          if (p.t > 1) p.t -= 1;
          var a = nodes[p.edge.a];
          var b = nodes[p.edge.b];
          var x = a.x + (b.x - a.x) * p.t;
          var y = a.y + (b.y - a.y) * p.t;
          ctx.beginPath();
          ctx.arc(x, y, 2, 0, Math.PI * 2);
          ctx.fillStyle = "rgba(255,91,46,0.9)";
          ctx.fill();
        });
      }

      // nodes
      nodes.forEach(function (n) {
        var radius = n.hub ? 6 : 4.5;
        ctx.beginPath();
        ctx.arc(n.x, n.y, radius, 0, Math.PI * 2);
        ctx.fillStyle = n.hub ? "#ff5b2e" : "#f3f1ea";
        ctx.fill();

        ctx.font = "500 12px Geist, sans-serif";
        ctx.fillStyle = n.hub ? "#ff7a4d" : "rgba(243,241,234,0.6)";
        ctx.textAlign = "center";
        ctx.fillText(n.label, n.x, n.y + radius + 18);
      });

      if (!reduceMotion) {
        rafId = requestAnimationFrame(draw);
      }
    }

    layout();
    draw(0);

    if (!reduceMotion) {
      rafId = requestAnimationFrame(draw);
    }

    window.addEventListener("resize", function () {
      cancelAnimationFrame(rafId);
      layout();
      draw(0);
      if (!reduceMotion) rafId = requestAnimationFrame(draw);
    });
  }

  /* ============================================================
     SCROLL-JACKING: only wired up on desktop viewports with
     motion allowed. Mobile / reduced-motion visitors get the
     same content as a plain vertical flow (see CSS fallbacks).
     ============================================================ */
  if (window.gsap && window.ScrollTrigger && isDesktop && !reduceMotion) {
    gsap.registerPlugin(ScrollTrigger);

    var NAV_H = 68; // keep in sync with --nav-h in css/style.css

    /* ---- Horizontal pan: the five-step process rail ---- */
    var wrap = document.getElementById("processWrap");
    var track = document.getElementById("processTrack");

    if (wrap && track) {
      var distance = track.scrollWidth - wrap.clientWidth;

      if (distance > 0) {
        wrap.classList.add("js-pinned");
        wrap.closest(".process").classList.add("is-pinned");
        gsap.to(track, {
          x: -distance,
          ease: "none",
          scrollTrigger: {
            trigger: wrap,
            start: "top " + NAV_H,
            end: "+=" + distance,
            pin: true,
            scrub: 1,
            invalidateOnRefresh: true,
          },
        });
      }
    }

    /* ---- Sticky stack: featured work cards ---- */
    var cards = gsap.utils.toArray(".work-card");

    cards.forEach(function (card, i) {
      if (i === cards.length - 1) return;

      ScrollTrigger.create({
        trigger: card,
        start: "top " + NAV_H,
        endTrigger: cards[cards.length - 1],
        end: "top " + NAV_H,
        pin: true,
        pinSpacing: false,
      });

      gsap.to(card, {
        scale: 0.94,
        opacity: 0.45,
        ease: "none",
        scrollTrigger: {
          trigger: cards[i + 1],
          start: "top bottom",
          end: "top top",
          scrub: true,
        },
      });
    });
  }

  /* ============================================================
     SCROLL REVEAL — lightweight fade-up for skill cards
     (works everywhere, degrades to instant-visible if reduced
     motion is requested).
     ============================================================ */
  var revealTargets = document.querySelectorAll(".skill-card, .exp-row");
  if (revealTargets.length) {
    if (reduceMotion || !("IntersectionObserver" in window)) {
      revealTargets.forEach(function (el) { el.style.opacity = 1; });
    } else {
      revealTargets.forEach(function (el) {
        el.style.opacity = 0;
        el.style.transform = "translateY(16px)";
        el.style.transition = "opacity 0.6s cubic-bezier(0.16,1,0.3,1), transform 0.6s cubic-bezier(0.16,1,0.3,1)";
      });

      var io = new IntersectionObserver(
        function (entries) {
          entries.forEach(function (entry, i) {
            if (entry.isIntersecting) {
              var el = entry.target;
              setTimeout(function () {
                el.style.opacity = 1;
                el.style.transform = "translateY(0)";
              }, i * 40);
              io.unobserve(el);
            }
          });
        },
        { threshold: 0.2 }
      );

      revealTargets.forEach(function (el) { io.observe(el); });
    }
  }
})();
