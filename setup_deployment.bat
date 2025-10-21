@echo off
echo.
echo ================================================
echo    GitHub Pages Deployment Setup Script
echo ================================================
echo.
echo This script will help you set up your GitHub Pages deployment.
echo.

:check_repo
set /p repo_name="Enter your GitHub username (e.g., SriviharReddy): "
if "%repo_name%"=="" goto check_repo

set github_repo_url=https://github.com/%repo_name%/%repo_name%.github.io.git
echo.
echo GitHub repository URL will be: %github_repo_url%
echo.

:confirm
set /p confirm="Is this correct? (y/n): "
if /i "%confirm%"=="y" goto setup
if /i "%confirm%"=="yes" goto setup
goto check_repo

:setup
echo.
echo Setting up git remote...
git remote set-url origin %github_repo_url%

echo.
echo Current git remotes:
git remote -v

echo.
echo ================================================
echo Steps to complete deployment:
echo 1. Go to https://github.com/new and create a new repository named: %repo_name%.github.io
echo 2. Commit and push your changes:
echo    git add .
echo    git commit -m "Initial commit: DevPortfolio with custom configuration"
echo    git push -u origin main
echo 3. GitHub Actions will automatically build and deploy your site
echo 4. Your site will be available at: https://%repo_name%.github.io
echo.
echo For more details, see DEPLOYMENT_GUIDE.md
echo ================================================
echo.