# Ese Monday's Portfolio & Blog

A modern, responsive portfolio website showcasing my work as a Software Engineer, Developer Relations professional, Technical Writer, and Content Creator. Built with Next.js 14, TypeScript, and Tailwind CSS.

## 🚀 Features

- **Personal Brand Showcase**: Professional presentation of my work and expertise
- **Responsive Design**: Optimized for all device sizes
- **Dark Mode Support**: Automatic theme switching based on system preferences
- **Performance Optimized**: Built with Next.js 14 for optimal loading and rendering
- **SEO Ready**: Implements Next.js Metadata API for better search engine visibility
- **Accessibility**: WCAG compliant with semantic HTML and ARIA attributes

## 🛠️ Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Fonts**: Geist Sans & Geist Mono
- **Deployment**: Vercel

## 📦 Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/portfolio.git
```

2. Install dependencies:
```bash
npm install
# or
yarn install
# or
pnpm install
```

3. Run the development server:
```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

4. Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## 📂 Project Structure

```
├── app/
│   ├── layout.tsx        # Root layout with metadata
│   ├── page.tsx          # Home page
│   └── globals.css       # Global styles
├── components/           # Reusable components
├── public/              # Static assets
└── styles/             # Additional styling
```

## 🌐 Environment Variables

Create a `.env.local` file in the root directory with these variables:

```
NEXT_PUBLIC_SITE_URL=your-production-url
```

## 🔍 SEO

The site implements Next.js 14's Metadata API for optimal SEO. Key features include:
- Open Graph tags
- Twitter Card metadata
- Canonical URLs
- Structured metadata for better search engine visibility

## 🚀 Deployment

The site is configured for deployment on Vercel. Simply push to the main branch to trigger a deployment.

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/ESE-MONDAY/portolio-2.0)

## 📝 Content Management

Content can be updated by modifying the following files:
- `app/page.tsx` - Main landing page content
- `app/layout.tsx` - Site metadata and global layout



## 📞 Contact

- Website: [esemonday.xyz](https://www.esemonday.xyz)
- Twitter: [@EseMonday1](https://twitter.com/EseMonday1)
- LinkedIn: [ese-monday](https://www.linkedin.com/in/ese-monday/)
