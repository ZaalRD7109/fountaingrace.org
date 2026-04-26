@echo off
cd /d "C:\Users\User\Projects\fgi-website"
git config user.email "zaalricardo@gmail.com"
git config user.name "Ricardo"
if exist ".git\index.lock" del ".git\index.lock"
git add -A
git commit -m "Fix missing principles array in sermons page; fix null bytes in pastors, sunday-services, what-to-expect"
git push origin clean-main:main
echo.
echo Done. Check Cloudflare for the build result.
pause
