$ErrorActionPreference = "Stop"

Write-Host ""
Write-Host "========================================"
Write-Host " Grupo BHNC - Pacote de Deploy"
Write-Host "========================================"
Write-Host ""

$Root = Split-Path -Parent $PSScriptRoot
Set-Location $Root

$OutDir = Join-Path $Root "out"
$ZipFile = Join-Path $Root "grupo-bhnc-static.zip"

Write-Host "[1/5] A remover build anterior..."

if (Test-Path $OutDir) {
    Remove-Item $OutDir -Recurse -Force
}

if (Test-Path $ZipFile) {
    Remove-Item $ZipFile -Force
}

Write-Host "[2/5] A executar lint..."
pnpm lint

if ($LASTEXITCODE -ne 0) {
    throw "Lint falhou. Deploy cancelado."
}

Write-Host "[3/5] A gerar build de producao..."
pnpm build

if ($LASTEXITCODE -ne 0) {
    throw "Build falhou. Deploy cancelado."
}

if (-not (Test-Path $OutDir)) {
    throw "A pasta out nao foi criada."
}

if (-not (Test-Path (Join-Path $OutDir "index.html"))) {
    throw "index.html nao encontrado em out."
}

Write-Host "[4/5] A criar ZIP..."

Compress-Archive `
    -Path "$OutDir\*" `
    -DestinationPath $ZipFile `
    -Force

if (-not (Test-Path $ZipFile)) {
    throw "Nao foi possivel criar o ZIP."
}

$Zip = Get-Item $ZipFile
$SizeMB = [math]::Round($Zip.Length / 1MB, 2)

Write-Host "[5/5] Pacote criado com sucesso."
Write-Host ""
Write-Host "Arquivo:"
Write-Host $ZipFile
Write-Host ""
Write-Host "Tamanho: $SizeMB MB"
Write-Host ""
Write-Host "Pronto para upload no cPanel."