export const siteConfig = {
  name: "Sai Srivihar Reddy K",
  title: "Generative & Agentic AI Developer",
  description: "Portfolio website of Sai Srivihar",
  accentColor: "#1d4ed8",
  social: {
    email: "kssreddy1999@gmail.com",
    linkedin: "https://www.linkedin.com/in/srivihar-reddy/",
    github: "https://github.com/SriviharReddy",
  },
  aboutMe:
    "Generative & Agentic AI Engineer with experience designing LLM-driven applications, orchestrated workflows, RAG pipelines, and multimodal document understanding systems.\nExperienced across both hosted model APIs (OpenAI, Anthropic, Gemini, Grok) and local inference stacks (DeepSeek, Qwen, GLM with Ollama/llama.cpp). Build agentic tools with LangGraph, LangChain, and MCP.\nComplements AI engineering expertise with strong backend development, Drupal/PHP experience, and DevOps collaboration for reliable deployments in enterprise environments.",
  skills: ["Python", "Langchain", "Langgraph", "LangSmith", "FastAPI", "RAG pipeline", "MCP", "Streamlit", "Docker", "Git" ],
  projects: [
    {
      name: "RAG Ultra",
      description:
        "State-of-the-Art (SOTA) agentic Retrieval-as-a-Service (RaaS) microservice built with LangGraph and LangChain. Implements layout-aware DeepSeek-OCR-2, Anthropic's Contextual Retrieval, Single-Database Parent Payloads, and self-correcting evaluation loops.",
      link: "https://github.com/SriviharReddy/RAG-Ultra",
      skills: ["RAG", "LangGraph", "LangChain", "DeepSeek", "Python", "ChromaDB"],
    },
    {
      name: "SAP Warehouse Agent",
      description:
        "Conversational AI agent for querying SAP Warehouse Management systems. Built with LangGraph, DeepSeek V4, and Streamlit.",
      link: "https://github.com/SriviharReddy/SAP-Warehouse-Agent",
      skills: ["LangGraph", "DeepSeek", "Streamlit", "SAP", "Python"],
    },
    {
      name: "Project Assistant",
      description:
        "A hybrid private-cloud RAG Project Assistant utilizing LangGraph v1.2+, ChromaDB, Ollama embeddings, and DeepSeek V4 Flash with automated evaluation.",
      link: "https://github.com/SriviharReddy/Project-Assistant",
      skills: ["LangGraph", "ChromaDB", "Ollama", "DeepSeek", "Python"],
    },
    {
      name: "PodQueue",
      description:
        "PodQueue is a self-hosted service that converts YouTube channels into podcast feeds.",
      link: "https://github.com/SriviharReddy/podqueue",
      skills: ["Python", "Streamlit", "YouTube API"],
    },
    {
      name: "Loomscribe",
      description:
        "🌌 A premium collaborative fiction writing chat interface powered by DeepSeek. Features system prompt profiles, infinite message versioning, Magic Rewrite, and a serverless standalone Android APK port.",
      link: "https://github.com/SriviharReddy/loomscribe",
      skills: ["HTML/CSS", "Vanilla JS", "Node.js", "Capacitor", "DeepSeek"],
    },
    {
      name: "Insight Fusion Agent",
      description:
        "A multi-step LangGraph workflow that retrieves, validates, and synthesizes information from user documents and web sources using tool-based search, cross-source verification, and mixed LLMs for optimized reasoning.",
      link: "https://github.com/SriviharReddy/Insight-Fusion-Agent",
      skills: ["Python", "LangChain", "LangGraph", "LLM orchestration", "RAG"],
    },
    {
      name: "Support Resolution Agent",
      description:
        "A support-issue diagnosis agent using tool-based reasoning with LangGraph structured flows to classify urgency, fill missing info, select resolution steps, and escalate to humans when required.",
      link: "https://github.com/SriviharReddy/Support-Resolution-Agent",
      skills: ["LangChain", "LangGraph", "Python", "Generative AI", "Tool use"],
    },
  ],
  experience: [
    {
      company: "Tata Consultancy Services",
      title: "Systems Engineer",
      dateRange: "Dec 2021 - Present",
      bullets: [
        "Built Insight Fusion Agent for research across documents + web using iterative retrieval, verification, and hybrid LLM stack",
        "Worked on SAP Conversational Assistant enabling natural-language queries to SAP backend for order/invoice lookups and data summaries through tool-based integration.",
        "For Tata Steel Europe, developed custom Drupal modules, PHP REST APIs, refactored legacy systems via SonarQube, and contributed to Azure DevOps CI/CD pipelines.",
        "For Tata Steel India Aashiyana, delivered PHP backend features for e-commerce, supporting content workflows and integrations with AEM and Magento.",
      ],
    },
  ],
  education: [
    {
      school: "Anil Neerukonda Institute of Technology and Sciences",
      degree: "Bachelor of Technology in Electronics and Communications Engineering",
      dateRange: "2016 - 2020",
      achievements: [
      ],
    },
    {
      school: "Amity University Online",
      degree: "Post Graduate Diploma in Big Data and Machine Learning",
      dateRange: "2021",
      achievements: [
        "Completed 200+ hours of coursework",
        "Earned a Data Analysis certificate from eCornell",
      ],
    },
  ],
};
