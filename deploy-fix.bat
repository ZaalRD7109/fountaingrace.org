@echo off
cd /d "C:\Users\User\Projects\fgi-website"
git config user.email "zaalricardo@gmail.com"
git config user.name "Ricardo"
if exist ".git\index.lock" del ".git\index.lock"
git add -A
git commit -m "A11y: fix contrast — teal text on teal bg replaced with black/white across all pages"
git push origin clean-main:main
echo.
echo Done. Check Cloudflare for the build result.
pause
