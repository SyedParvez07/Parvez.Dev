# Parvez.Dev - Full Stack Developer Portfolio

A modern, animated portfolio website built with Next.js 14, featuring smooth page transitions, interactive 3D elements, and a responsive design optimized for performance and accessibility.

![Portfolio Preview](https://via.placeholder.com/800x400/6366f1/ffffff?text=Parvez.Dev+Portfolio)

## ✨ Features

- **Responsive Design**: Optimized for all devices and screen sizes
- **Smooth Animations**: Powered by Framer Motion for fluid transitions
- **Interactive 3D Elements**: Custom brain component with scroll-based animations
- **Contact Form**: Integrated EmailJS for seamless communication
- **SEO Optimized**: Complete meta tags, Open Graph, and Twitter Cards
- **Performance Focused**: Optimized images, lazy loading, and code splitting
- **Accessibility**: WCAG compliant with proper ARIA labels and keyboard navigation
- **Security**: Security headers and input validation
- **Error Handling**: Custom error boundaries and 404 pages

## 🚀 Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Email Service**: EmailJS
- **Font**: Google Fonts (Inter)
- **Icons**: Custom SVG animations
- **Deployment**: Vercel/Netlify ready

## 📋 Prerequisites

- Node.js 18.x or later
- npm or yarn package manager
- EmailJS account (for contact form)

## 🛠️ Installation & Setup

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/parvez-dev-portfolio.git
   cd parvez-dev-portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Set up environment variables**

   Copy the example environment file:
   ```bash
   cp .env.local.example .env.local
   ```

   Update `.env.local` with your EmailJS credentials:
   ```env
   NEXT_PUBLIC_SERVICE_ID=your_emailjs_service_id
   NEXT_PUBLIC_TEMPLATE_ID=your_emailjs_template_id
   NEXT_PUBLIC_PUBLIC_KEY=your_emailjs_public_key
   ```

4. **Get EmailJS Credentials**

   - Go to [EmailJS Dashboard](https://dashboard.emailjs.com/)
   - Create an account and set up an email service (Gmail, Outlook, etc.)
   - Create an email template
   - Copy the Service ID, Template ID, and Public Key to your `.env.local`

5. **Run the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   ```

   Open [http://localhost:3000](http://localhost:3000) in your browser.

## 📜 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint
- `npm run type-check` - Run TypeScript checks (if migrated)

## 📁 Project Structure

```
parvez-dev-portfolio/
├── public/                 # Static assets
│   ├── sitemap.xml        # SEO sitemap
│   ├── robots.txt         # Search engine crawling rules
│   └── images/            # Portfolio images
├── src/
│   ├── app/               # Next.js App Router
│   │   ├── layout.js      # Root layout with metadata
│   │   ├── page.jsx       # Homepage
│   │   ├── loading.js     # Loading component
│   │   ├── not-found.js   # 404 page
│   │   ├── about/         # About page
│   │   ├── portfolio/     # Portfolio page
│   │   └── contact/       # Contact page
│   ├── components/        # Reusable components
│   │   ├── ErrorBoundary.jsx    # Error handling
│   │   ├── navbar.jsx     # Navigation component
│   │   ├── brain.jsx      # 3D brain animation
│   │   └── transitionProvider.jsx
│   └── styles/            # Global styles
├── .env.local.example     # Environment variables template
├── next.config.mjs        # Next.js configuration
├── tailwind.config.js     # Tailwind CSS config
└── package.json           # Dependencies and scripts
```

## 🎨 Customization

### Colors and Styling
- Update `tailwind.config.js` for custom color schemes
- Modify `src/app/globals.css` for global styles
- Component-specific styles are inline with Tailwind classes

### Content Updates
- **Homepage**: Edit `src/app/page.jsx`
- **About**: Update `src/app/about/page.jsx`
- **Portfolio**: Modify `src/app/portfolio/page.jsx`
- **Contact**: Adjust `src/app/contact/page.jsx`

### Adding New Sections
1. Create new page in `src/app/[section]/page.jsx`
2. Add navigation link in `src/components/navbar.jsx`
3. Update sitemap and metadata

## 🚀 Deployment

### Vercel (Recommended)
1. Push your code to GitHub
2. Connect your repository to [Vercel](https://vercel.com)
3. Add environment variables in Vercel dashboard
4. Deploy automatically

### Netlify
1. Build command: `npm run build`
2. Publish directory: `out` (for static export) or `.next` (for SSR)
3. Add environment variables in Netlify dashboard

### Manual Deployment
```bash
npm run build
npm run start
```

## 🔒 Security Features

- **Security Headers**: X-Frame-Options, X-Content-Type-Options, Referrer-Policy
- **Input Validation**: Client and server-side validation for contact form
- **Environment Variables**: Sensitive data properly secured
- **Error Boundaries**: Graceful error handling without exposing sensitive information

## 📊 Performance Optimizations

- **Image Optimization**: Next.js Image component with lazy loading
- **Code Splitting**: Dynamic imports for heavy components
- **Bundle Analysis**: Optimized chunk sizes
- **Caching**: Proper cache headers and service worker ready
- **SEO**: Pre-rendered pages with proper meta tags

## 🧪 Testing

```bash
# Run linting
npm run lint

# Build for production (includes type checking)
npm run build

# Test contact form functionality
# Fill out the form and verify email delivery
```

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/amazing-feature`
3. Commit your changes: `git commit -m 'Add amazing feature'`
4. Push to the branch: `git push origin feature/amazing-feature`
5. Open a Pull Request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 📞 Support

- **Issues**: [GitHub Issues](https://github.com/yourusername/parvez-dev-portfolio/issues)
- **Discussions**: [GitHub Discussions](https://github.com/yourusername/parvez-dev-portfolio/discussions)
- **Email**: Contact form on the website

## 🙏 Acknowledgments

- [Next.js](https://nextjs.org/) - The React framework
- [Framer Motion](https://www.framer.com/motion/) - Animation library
- [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS framework
- [EmailJS](https://www.emailjs.com/) - Email service
- [Vercel](https://vercel.com/) - Deployment platform

---

**Built with ❤️ by Parvez** 
