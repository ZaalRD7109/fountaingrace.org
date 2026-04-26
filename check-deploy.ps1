# Run after every deploy to confirm the site is healthy.
# Usage: .\check-deploy.ps1

$URL = "https://www.fountaingrace.org"
$pass = 0
$fail = 0

Write-Host ""
Write-Host "Checking $URL ..." -ForegroundColor Cyan
Write-Host ""

$headers = try { (Invoke-WebRequest -Uri $URL -Method Head -UseBasicParsing).Headers } catch { @{} }

function Check-Header($label, $key) {
    if ($headers.ContainsKey($key)) {
        Write-Host "  PASS  $label" -ForegroundColor Green
        $script:pass++
    } else {
        Write-Host "  FAIL  $label" -ForegroundColor Red
        $script:fail++
    }
}

function Check-Status($label, $url, $expected = 200) {
    try {
        $code = (Invoke-WebRequest -Uri $url -UseBasicParsing -ErrorAction Stop).StatusCode
    } catch {
        $code = 0
    }
    if ($code -eq $expected) {
        Write-Host "  PASS  $label" -ForegroundColor Green
        $script:pass++
    } else {
        Write-Host "  FAIL  $label (got $code, expected $expected)" -ForegroundColor Red
        $script:fail++
    }
}

Write-Host "--- Security headers ---"
Check-Header "Strict-Transport-Security" "strict-transport-security"
Check-Header "Content-Security-Policy"   "content-security-policy"
Check-Header "X-Frame-Options"           "x-frame-options"
Check-Header "X-Content-Type-Options"    "x-content-type-options"
Check-Header "Referrer-Policy"           "referrer-policy"
Check-Header "Permissions-Policy"        "permissions-policy"

Write-Host ""
Write-Host "--- Site reachability ---"
Check-Status "Homepage returns 200"     "$URL"
Check-Status "/sitemap.xml returns 200" "$URL/sitemap.xml"
Check-Status "/robots.txt returns 200"  "$URL/robots.txt"

Write-Host ""
if ($fail -gt 0) {
    Write-Host "--- Result: $pass passed, $fail failed ---" -ForegroundColor Red
} else {
    Write-Host "--- Result: $pass passed, $fail failed ---" -ForegroundColor Green
}
Write-Host ""
