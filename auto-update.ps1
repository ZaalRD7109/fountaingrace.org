# Auto GitHub updater for FGI Website
cd "C:\Users\User\FGI_Website\fountaingrace.org"
git add .
git commit -m "Auto-update site $(Get-Date -Format 'yyyy-MM-dd HH:mm')"
git pull origin main --rebase --strategy-option=ours
git push origin main
Write-Output "✅ Site updated and synced with GitHub"
