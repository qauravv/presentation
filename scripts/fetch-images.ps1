# Fetch placeholder images from Wikimedia Commons (public domain / CC)
# Run from repo root: .\scripts\fetch-images.ps1
$ErrorActionPreference = "Stop"
$base = "https://commons.wikimedia.org/wiki/Special:FilePath"
$outDir = Join-Path $PSScriptRoot "..\public\images"
if (-not (Test-Path $outDir)) { New-Item -ItemType Directory -Path $outDir -Force | Out-Null }

function Get-File {
    param([string]$Name, [string]$OutName)
    $uri = "$base/$Name"
    $path = Join-Path $outDir $OutName
    Write-Host "Fetching $Name -> $OutName"
    try {
        Invoke-WebRequest -Uri $uri -OutFile $path -MaximumRedirection 5 -UseBasicParsing
    } catch {
        Write-Warning "Failed: $Name - $_"
    }
}

# Slide 18 - Grand Canyon strata (geologic column)
Get-File "Grand_Canyon_geologic_column.jpg" "slide18-time.jpg"

# Slide 22 - Tiktaalik fossil
Get-File "Tiktaalik_fossil.JPG" "slide22-fossils.jpg"

# Slide 23 - Homologous structures (SVG; export as PNG or use as-is in img tag)
Get-File "Homology_vertebrates-en.svg" "slide23-anatomy.svg"

# Slide 31 - Monastery garden
Get-File "Monastery_garden.jpg" "slide31-monastery.jpg"

# Slide 32 - Mendel pea cross
Get-File "2924_Mendelian_Pea_Plant_Cross.jpg" "slide32-mendel.jpg"

# Slide 35 - DNA double helix
Get-File "DNA_Double_Helix_by_NHGRI.jpg" "slide35-dna.jpg"

# Slide 36 - Mutation types (try Point_mutations if Deletion_Insertion hits rate limit)
Get-File "Point_mutations.svg" "slide36-mutation.svg"

# Slide 37a - Antennapedia mutant fly
Get-File "Antennapedia.jpg" "slide37a-regulatory.jpg"

# Slide 38 - Eye evolution stages (SVG)
Get-File "Diagram_of_eye_evolution.svg" "slide38-eye-stages.svg"

# Slide 40 - Darwin's finches
Get-File "Darwin%27s_finches.png" "slide40-callback.png"

# Slide 42 - Genetic code wheel
Get-File "The_genetic_code_wheel.jpg" "slide42-codon-wheel.jpg"

# Appendix A1 - Scope (tree of life as "evolution explains diversity")
Get-File "Phylogenetic_Tree_of_Life.png" "appendix-a1.png"

Write-Host "Done. Check public/images for downloaded files."
