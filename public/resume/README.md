# Resume Files

This directory contains LaTeX source files for Anesu Romeo Mutimbire's resume.

## Files

- `Anesu_Mutimbire_Resume.tex` - LaTeX source file
- `Anesu_Mutimbire_Resume.pdf` - Compiled PDF (to be generated)

## Compiling the Resume

### Option 1: Online (Easiest)

1. Go to [Overleaf](https://www.overleaf.com/)
2. Create a new project
3. Upload `Anesu_Mutimbire_Resume.tex`
4. Click "Recompile" to generate PDF
5. Download the PDF

### Option 2: Local Compilation (requires LaTeX installation)

**On Windows:**

```bash
# Install MiKTeX from https://miktex.org/download
# Then run:
pdflatex Anesu_Mutimbire_Resume.tex
```

**On Mac:**

```bash
# Install MacTeX from https://www.tug.org/mactex/
# Then run:
pdflatex Anesu_Mutimbire_Resume.tex
```

**On Linux:**

```bash
# Install TeX Live
sudo apt-get install texlive-full

# Compile
pdflatex Anesu_Mutimbire_Resume.tex
```

## Updating the Resume

1. Edit `Anesu_Mutimbire_Resume.tex`
2. Recompile to generate new PDF
3. Place the PDF in this directory
4. Update the website's Download PDF button to link to the actual file

## Current Content

The resume includes:

- Contact information (LinkedIn, GitHub, Email)
- Education (BS Computer Science, GZU)
- 4 work experiences:
  - SwiftQueue Hospital Management (Full Stack, 2023-2024)
  - Regisbridge School Management (Full Stack, 2023)
  - GZU Online Marketplace (Backend, 2023)
  - Freelance Developer (2022-Present)
- Technical Skills (Python, TypeScript, Django, React, etc.)
- Personal Portfolio project

## Next Steps

1. Compile the .tex file to PDF using one of the methods above
2. Save the PDF as `Anesu_Mutimbire_Resume.pdf` in this directory
3. Update the resume page to download the actual PDF file
