$ErrorActionPreference = 'Stop'
$dir = Join-Path (Join-Path (Join-Path $PSScriptRoot '..') 'public') 'icons'
New-Item -ItemType Directory -Force -Path $dir | Out-Null
Add-Type -AssemblyName System.Drawing
foreach ($size in @(192, 512)) {
  $bmp = New-Object Drawing.Bitmap $size, $size
  $graphics = [Drawing.Graphics]::FromImage($bmp)
  $graphics.Clear([Drawing.Color]::FromArgb(255, 0, 23, 54))
  $graphics.Dispose()
  $path = Join-Path $dir "icon-$size.png"
  $bmp.Save($path, [Drawing.Imaging.ImageFormat]::Png)
  $bmp.Dispose()
}
Write-Host "Icons written to $dir"
