# Deployment Guide for GitHub Pages

Follow these steps to deploy your portfolio to GitHub Pages:

## Step 1: Create your GitHub repository

1. Go to GitHub.com and create a new repository named exactly: `SriviharReddy.github.io`
   - This specific naming is required for user pages on GitHub
   - Make sure to initialize with a README if you want (we already have one)

## Step 2: Update git remote

After creating the repository, update your local git origin:

```bash
git remote set-url origin https://github.com/SriviharReddy/SriviharReddy.github.io.git
```

If this is the first time setting up your repository, you can also do:

```bash
git init
git add .
git commit -m "Initial commit: DevPortfolio template with custom configuration"
git branch -M main
git remote add origin https://github.com/SriviharReddy/SriviharReddy.github.io.git
git push -u origin main
```

## Step 3: GitHub Actions will automatically deploy

Once you push to the main branch, GitHub Actions will:
1. Run the workflow defined in `.github/workflows/deploy.yml`
2. Build your Astro site
3. Deploy it to GitHub Pages

## Step 4: Enable GitHub Pages (if needed)

1. Go to your repository on GitHub
2. Navigate to Settings > Pages
3. Under "Source", make sure it's set to GitHub Actions
4. The site should automatically deploy after your first push

## Step 5: View your deployed site

Your site will be available at: https://SriviharReddy.github.io

## Important Notes

- For GitHub user pages, your repository needs to be named `username.github.io`
- The build will happen automatically after each push to the main branch
- The deployment may take a few minutes to complete
- You can check the Actions tab in your repository for build status
- If you want a custom domain, you can add it in the GitHub repository Settings under Pages section