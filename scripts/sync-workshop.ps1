# Fetch Steam Workshop details and regenerate src/data/workshop.ts
$ErrorActionPreference = "Stop"
$Root = Split-Path -Parent $PSScriptRoot
$catalog = node -e "import('./scripts/workshop-catalog.mjs').then(m => console.log(m.WORKSHOP_CATALOG.map(x=>x.id).join(',')))"
$ids = $catalog -split ","

$params = @("itemcount=$($ids.Count)")
for ($i = 0; $i -lt $ids.Count; $i++) {
  $params += "publishedfileids[$i]=$($ids[$i])"
}
$body = $params -join "&"

Write-Host "Fetching $($ids.Count) maps from Steam API..."
$response = Invoke-RestMethod `
  -Uri "https://api.steampowered.com/ISteamRemoteStorage/GetPublishedFileDetails/v1/" `
  -Method Post `
  -Body $body `
  -ContentType "application/x-www-form-urlencoded" `
  -TimeoutSec 90

$out = Join-Path $Root "workshop-api-response.json"
$json = $response.response.publishedfiledetails | ConvertTo-Json -Depth 6
[System.IO.File]::WriteAllText($out, $json, [System.Text.UTF8Encoding]::new($false))
Write-Host "Wrote $out"

node (Join-Path $Root "scripts/generate-workshop.mjs")
