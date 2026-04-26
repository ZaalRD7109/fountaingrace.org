@echo off
cd /d "C:\Users\User\Projects\fgi-website"
git config user.email "zaalricardo@gmail.com"
git config user.name "Ricardo"
if exist ".git\index.lock" del ".git\index.lock"
git add -A
git commit -m "A11y: fix all contrast failures — footer white, WhatsApp button dark, body text darkened"
git push origin clean-main:main
echo.
echo Done. Check Cloudflare for the build result.
pause
