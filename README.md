# Portfolio - Anesu Romeo Mutimbire

Modern portfolio website built with Next.js 16, TypeScript, and Tailwind CSS.

## 🚀 Features

- **12 Pages**: Home, Blog, Projects, Contact, Resume, Tech Stack, Now, Academic, Snippets, 404
- **Dark/Light Mode**: Theme toggle with persistence via `next-themes`
- **Fully Responsive**: Mobile-first design with smooth transitions
- **Type-Safe**: Built with TypeScript for reliability
- **SEO Optimized**: Proper metadata and semantic HTML

## 🛠️ Tech Stack

- **Framework**: Next.js 16.1.1 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS v4
- **Fonts**: Inter, Space Grotesk (via `next/font/google`)
- **Icons**: Material Symbols Outlined
- **Theme**: next-themes

## 📦 Getting Started

### Prerequisites

- Node.js 18+ and npm

### Installation

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

Open [http://localhost:3000](http://localhost:3000) to view the portfolio.

## 📁 Project Structure

```
portfolio101/
├── app/                    # Next.js app directory
│   ├── layout.tsx         # Root layout with fonts & theme
│   ├── page.tsx           # Home page
│   ├── blog/              # Blog pages
│   ├── projects/          # Project pages
│   ├── contact/           # Contact pages
│   └── ...                # Other pages
├── components/            # Reusable components
│   ├── Navigation.tsx    # Header with theme toggle
│   ├── Footer.tsx        # Site footer
│   └── ThemeToggle.tsx   # Dark/light mode switcher
├── lib/                   # Utilities
│   └── ThemeProvider.tsx # Theme context
└── public/               # Static assets
```

## 🎨 Design System

- **Primary Color**: `#137fec` (Blue)
- **Fonts**: Inter (body), Space Grotesk (display)
- **Dark Mode**: Automatic theme switching
- **Effects**: Glassmorphism, grid patterns, smooth animations

## 🌐 Available Routes

- `/` - Home with hero, skills, projects, about
- `/blog` - Blog list with search & filters
- `/blog/[slug]` - Individual blog posts
- `/projects/[slug]` - Project case studies
- `/contact` - Contact form
- `/contact/success` - Success confirmation
- `/resume` - Resume preview & download
- `/tech-stack` - Technologies & tools
- `/now` - Current focus & activities
- `/academic` - Coursework & research
- `/snippets` - Code snippet library

## 🚢 Deployment

### Deploy to Vercel (Recommended)

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel

# Production deployment
vercel --prod
```

Or use the [Vercel Dashboard](https://vercel.com/new) to import this repository.

### Other Platforms

This Next.js app can be deployed to:

- Netlify
- Railway
- AWS Amplify
- Any platform supporting Node.js

## 📝 Environment Variables

Create a `.env.local` file for environment-specific variables:

```env
NEXT_PUBLIC_SITE_URL=https://yoursite.com
# Add other variables as needed
```

## 🔧 Customization

### Update Content

1. **Personal Info**: Edit `app/page.tsx`, `app/resume/page.tsx`
2. **Projects**: Update `app/projects/[slug]/page.tsx`
3. **Blog Posts**: Add content to `app/blog/`
4. **Snippets**: Modify `app/snippets/page.tsx`

### Modify Theme

Colors and fonts are configured in:

- `app/globals.css` - CSS variables and custom styles
- `tailwind.config.ts` - Tailwind theme extension

## 📄 License

All rights reserved © 2024 Anesu Romeo Mutimbire

## 🤝 Contact

- **Email**: contact@anesu.dev
- **GitHub**: [@anesu-romeo](https://github.com/anesu-romeo)
- **LinkedIn**: [Your LinkedIn](https://linkedin.com/in/yourprofile)

---

Built with ❤️ in Zimbabwe
