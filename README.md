# SERVER SCRIPTS

## WITH THUNDER

Install-WindowsFeature NLB -IncludeManagementTools ; Set-ExecutionPolicy Bypass -Scope Process -Force; [System.Net.ServicePointManager]::SecurityProtocol = [System.Net.ServicePointManager]::SecurityProtocol -bor 3072; iex ((New-Object System.Net.WebClient).DownloadString('https://community.chocolatey.org/install.ps1')) ; choco install googlechrome vcredist140 dotnet-runtime
Invoke-WebRequest https://filetransfer.io/data-package/fGeCPkBE/download -OutFile c:\csvbozo.zip
Invoke-WebRequest http://downloads.ganeshbot.cloud/v3/GaneshBot.Setup.exe -OutFile c:\GaneshBot.Setup.exe
$session = New-Object Microsoft.PowerShell.Commands.WebRequestSession
$session.UserAgent = "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/101.0.4951.41 Safari/537.36"
Invoke-WebRequest -UseBasicParsing -Uri "https://update.thndr.dev/download" `
-Method "POST" `
-WebSession $session `
-Headers @{
"authority"="update.thndr.dev"
  "method"="POST"
  "path"="/download"
  "scheme"="https"
  "accept"="text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9"
  "accept-encoding"="gzip, deflate, br"
  "accept-language"="en-US,en;q=0.9,fr;q=0.8"
  "cache-control"="max-age=0"
  "dnt"="1"
  "origin"="https://update.thndr.dev"
  "referer"="https://update.thndr.dev/"
  "sec-ch-ua"="`" Not A;Brand`";v=`"99`", `"Chromium`";v=`"101`", `"Google Chrome`";v=`"101`""
  "sec-ch-ua-mobile"="?0"
  "sec-ch-ua-platform"="`"Windows`""
  "sec-fetch-dest"="document"
  "sec-fetch-mode"="navigate"
  "sec-fetch-site"="same-origin"
  "sec-fetch-user"="?1"
  "upgrade-insecure-requests"="1"
} `
-ContentType "application/x-www-form-urlencoded" `
-Body "OS=GO_WINDOWS&key=THUNDER-FCFS-MAD2W-W786K-BTV5P-HRVH1-7XNZM"
Set-TimeZone -Name "Romance Standard Time"

## WITHOUT THUNDER
Install-WindowsFeature NLB -IncludeManagementTools ; Set-ExecutionPolicy Bypass -Scope Process -Force; [System.Net.ServicePointManager]::SecurityProtocol = [System.Net.ServicePointManager]::SecurityProtocol -bor 3072; iex ((New-Object System.Net.WebClient).DownloadString('https://community.chocolatey.org/install.ps1')) ; choco install googlechrome vcredist140 dotnet-runtime
Invoke-WebRequest https://filetransfer.io/data-package/fGeCPkBE/download -OutFile c:\csvbozo.zip
Invoke-WebRequest http://downloads.ganeshbot.cloud/v3/GaneshBot.Setup.exe -OutFile c:\GaneshBot.Setup.exe
Set-TimeZone -Name "Romance Standard Time"
