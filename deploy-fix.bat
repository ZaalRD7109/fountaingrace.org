@echo off
cd /d "C:\Users\User\Projects\fgi-website"
if exist ".git\index.lock" del ".git\index.lock"
git config user.email "zaalricardo@gmail.com"
git config user.name "Ricardo"
git add -A
git commit -m "Deploy pending changes" --allow-empty
git push origin clean-main:main
echo.
echo Done. Check Cloudflare for the build result.
pause
