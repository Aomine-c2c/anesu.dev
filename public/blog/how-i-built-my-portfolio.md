---
title: "How I Built My Portfolio with Next.js 14"
date: "January 13, 2026"
excerpt: "A deep dive into building a modern, production-ready portfolio using Next.js 14, TypeScript, and Tailwind CSS - from design to deployment."
author: "Anesu Romeo Mutimbire"
category: "Web Development"
tags: ["Next.js", "TypeScript", "Tailwind CSS", "Portfolio", "Web Development"]
readTime: "8 min read"
---

# How I Built My Portfolio with Next.js 14

After spending months building complex applications like hospital management systems and school platforms, I decided it was time to build something for myself - a portfolio that truly represents my skills and journey as a developer.

## The Challenge

I had 17 HTML designs for my portfolio sitting in a folder, looking beautiful but static. The challenge? Convert them into a fully functional, modern web application while maintaining exact design fidelity. No shortcuts, no "close enough" - pixel-perfect recreation.

## Why Next.js 14?

I chose Next.js for several compelling reasons:

### 1. **Performance Out of the Box**

Next.js provides automatic code splitting, image optimization, and Server-Side Rendering (SSR) without any configuration. This means my portfolio loads blazing fast - critical when potential employers are reviewing it.

### 2. **App Router**

The new App Router in Next.js 14 makes it incredibly easy to create nested layouts and handle complex routing patterns. Each page in my portfolio (Blog, Projects, Resume, etc.) has its own route with proper SEO metadata.

### 3. **TypeScript Integration**

Type safety isn't optional for me anymore. Next.js + TypeScript give me confidence that I won't ship broken code. Every component, every prop, every state change is type-checked.

### 4. **Developer Experience**

Hot module replacement, automatic routing, and built-in Tailwind CSS support made development incredibly smooth. I could focus on building features, not configuring build tools.

## The Tech Stack

Here's what powers my portfolio:

- **Framework**: Next.js 14.1.1 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS v4
- **Fonts**: Inter & Space Grotesk via `next/font/google`
- **Theme**: `next-themes` for dark/light mode
- **Icons**: Material Symbols Outlined
- **Deployment**: Vercel (obviously!)

## The Build Process

### Phase 1: Project Setup ⚙️

First, I initialized a clean Next.js project with all the right flags:

\`\`\`bash
npx create-next-app@latest portfolio \\
--typescript \\
--tailwind \\
--app \\
--no-src-dir \\
--import-alias "@/\*"
\`\`\`

Then configured the brand colors and design tokens in `tailwind.config.ts`:

\`\`\`typescript
colors: {
primary: '#137fec',
'background-dark': '#0a0a0a',
'surface-dark': '#111111',
'border-dark': 'rgb(38 38 38)',
}
\`\`\`

### Phase 2: Design System 🎨

Instead of writing CSS for every component, I created a robust design system in `globals.css`:

**Custom Properties**:

- Colors (light & dark mode)
- Typography scales
- Border radius tokens
- Shadow definitions

**Reusable Effects**:

- Glassmorphism navigation
- Grid fade patterns
- Terminal cursor animations
- Smooth dark mode transitions

This meant I could style components consistently with just utility classes:

\`\`\`tsx

<div className="glass-nav" /> // Instant glassmorphism
<div className="grid-fade" /> // Grid background with fade
\`\`\`

### Phase 3: Core Components 🧱

I built three essential components that appear on every page:

#### 1. Navigation Component

\`\`\`tsx
export function Navigation() {
return (
<header className="glass-nav fixed top-0 z-50">
<nav className="flex items-center justify-between">
<Link href="/">Logo</Link>
<div className="flex gap-6">
<Link href="/#projects">Projects</Link>
<Link href="/blog">Blog</Link>
{/_ More dropdown for additional pages _/}
</div>
<ThemeToggle />
</nav>
</header>
);
}
\`\`\`

Key features:

- Glassmorphism effect
- Dropdown menu for extra pages
- Sticky positioning
- Mobile-responsive hamburger menu
- Integrated theme toggle

#### 2. Theme Toggle

\`\`\`tsx
import { useTheme } from 'next-themes';

export function ThemeToggle() {
const { theme, setTheme } = useTheme();

return (
<button onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}>
{theme === 'dark' ? '☀️' : '🌙'}
</button>
);
}
\`\`\`

Using `next-themes` gave me:

- Persistent theme selection
- No flash of unstyled content
- System preference detection
- Smooth transitions

#### 3. Footer Component

\`\`\`tsx
export function Footer() {
return (
<footer className="border-t border-slate-200 dark:border-white/10">
<div className="grid grid-cols-3 gap-8">
<div>Brand & Description</div>
<div>Quick Links</div>
<div>Social Media</div>
</div>
</footer>
);
}
\`\`\`

### Phase 4: Building 12 Pages 📄

This was the most time-consuming part. Each page needed to:

1. Match the original HTML design exactly
2. Be fully responsive
3. Have proper TypeScript types
4. Include SEO metadata
5. Support both themes

**Key Pages Built**:

1. **Home** - Hero, Skills, Projects, About, Contact
2. **Blog** - List page with search/filters + article template
3. **Projects** - Detailed case study template
4. **Contact** - Form with validation + success state
5. **Resume** - PDF preview and download
6. **Tech Stack** - Skills showcase with categories
7. **Now** - Current activities and learning
8. **Academic** - Coursework and competencies
9. **Snippets** - Code library with syntax highlighting
10. **404** - Custom terminal-themed error page

Example blog article page structure:

\`\`\`tsx
export default function BlogArticle({ params }: { params: { slug: string } }) {
return (
<>
<ReadingProgress />
<article className="prose dark:prose-invert max-w-3xl">
<header>
<h1>{article.title}</h1>
<div className="flex items-center gap-4">
<time>{article.date}</time>
<span>{article.readTime}</span>
</div>
</header>

        <TableOfContents />

        <div dangerouslySetInnerHTML={{ __html: article.content }} />

        <ShareButtons />
      </article>
    </>

);
}
\`\`\`

### Phase 5: Dark Mode Implementation 🌓

Dark mode was non-negotiable. Here's how I implemented it:

1. **Installed `next-themes`**:
   \`\`\`bash
   npm install next-themes
   \`\`\`

2. **Created Theme Provider**:
   \`\`\`tsx
   'use client';
   import { ThemeProvider as NextThemesProvider } from 'next-themes';

export function ThemeProvider({ children }: { children: React.ReactNode }) {
return (
<NextThemesProvider attribute="class" defaultTheme="system">
{children}
</NextThemesProvider>
);
}
\`\`\`

3. **Wrapped app in provider** (`app/layout.tsx`):
   \`\`\`tsx
   export default function RootLayout({ children }) {
   return (
   <html lang="en" suppressHydrationWarning>
   <body>
   <ThemeProvider>
   {children}
   </ThemeProvider>
   </body>
   </html>
   );
   }
   \`\`\`

4. **Used Tailwind's dark mode classes**:
\`\`\`tsx
<div className="bg-white dark:bg-slate-900 text-slate-900 dark:text-white">
  Content
</div>
\`\`\`

### Phase 6: Performance Optimization ⚡

I didn't want just a pretty portfolio - it needed to be FAST.

**Image Optimization**:
\`\`\`tsx
import Image from 'next/image';

<Image
  src="/project-screenshot.png"
  alt="Project screenshot"
  width={800}
  height={600}
  quality={85}
  loading="lazy"
/>
\`\`\`

**Font Optimization**:
\`\`\`tsx
import { Inter, Space_Grotesk } from 'next/font/google';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });
const spaceGrotesk = Space_Grotesk({ subsets: ['latin'], variable: '--font-space-grotesk' });
\`\`\`

**Code Splitting** (automatic with App Router):

- Each page is a separate chunk
- Components are lazy-loaded
- Shared code is extracted

## Challenges & Solutions

### Challenge 1: Complex Navigation

**Problem**: How to fit 12 pages in a clean navigation without clutter?

**Solution**: Created a "More" dropdown menu for secondary pages like Academic, Snippets, and Now. Primary pages (Projects, Blog, Contact) stay in main nav.

### Challenge 2: Design Fidelity

**Problem**: Converting pixel values and exact spacing from HTML to Tailwind.

**Solution**:

- Extracted design tokens upfront
- Created custom Tailwind utilities
- Used exact color values from original designs
- Added comments with original CSS values

### Challenge 3: State Management

**Problem**: Where to manage theme state, form state, etc?

**Solution**:

- Theme: `next-themes` (persistent, SSR-safe)
- Forms: React's `useState` (simple, no overkill)
- No Redux/Zustand needed for a portfolio

## What I Learned

1. **Design Systems Save Time**: Setting up tokens and utilities upfront made building pages 3x faster.

2. **TypeScript is Worth It**: Caught so many bugs before they reached the browser. Type safety for wins.

3. **Tailwind CSS Scales**: What started as "just utility classes" became a full design system with variants and custom utilities.

4. **App Router is the Future**: The mental model of layouts, pages, and loading states is so much cleaner than the Pages router.

5. **Dark Mode Isn't Optional**: Users expect it. `next-themes` makes it trivial to implement.

## Results

**Final Stats**:

- 📄 12 pages
- 🧩 3 core components (Navigation, Footer, ThemeToggle)
- 🎨 100% design fidelity
- ⚡ 95+ Lighthouse scores
- 🌗 Perfect dark mode
- 📱 Fully responsive
- ♿ Accessible (semantic HTML, ARIA labels)
- 🚀 Deployed on Vercel

**Build Times**:

- Initial setup: 2 hours
- Component library: 4 hours
- 12 pages: ~20 hours
- Polish & refinement: 6 hours
- **Total: ~32 hours over 3 days**

## Deployment

Deploying to Vercel was literally:

\`\`\`bash
git push origin main
\`\`\`

That's it. Vercel automatically:

- Detected Next.js
- Installed dependencies
- Built the project
- Deployed to CDN
- Generated preview URLs
- Set up SSL

Live URL: `https://anesu-dev.vercel.app`

## What's Next?

Now that the foundation is solid, I'm planning to:

1. **Add Real Content**: Blog posts, project case studies, resume updates
2. **Contact Form Backend**: EmailJS or Resend for form submissions
3. **Analytics**: Vercel Analytics to track visitors
4. **Animations**: Framer Motion for micro-interactions
5. **Custom Domain**: `anesu.dev` (coming soon!)

## Conclusion

Building this portfolio taught me that good architecture pays dividends. By investing time in:

- A solid design system
- Reusable components
- Type safety
- Performance optimization

I now have a codebase that's easy to maintain, extend, and showcase to potential employers.

**The best part?** This isn't just a portfolio - it's proof of my ability to ship production-ready applications.

---

## Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS](https://tailwindcss.com/)
- [next-themes](https://github.com/pacocoursey/next-themes)
- [Vercel Deployment](https://vercel.com/docs)
- [GitHub Repo](https://github.com/Aomine-c2c/anesu.dev)

**Want to build something similar?** Drop me a message at [armutimbire@gmail.com](mailto:armutimbire@gmail.com) - I'd love to help!
