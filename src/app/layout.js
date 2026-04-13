import { Inter } from "next/font/google";
import "./globals.css";
import TransitionProvider from "@/components/transitionProvider";
import ErrorBoundary from "@/components/ErrorBoundary";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Parvez .Dev - Full Stack Developer Portfolio",
  description: "Crafting Digital Experiences, Designing Tomorrow. Explore my portfolio of innovative web development projects built with modern technologies.",
  keywords: ["Full Stack Developer", "React", "Next.js", "JavaScript", "Portfolio", "Web Development"],
  authors: [{ name: "Parvez" }],
  creator: "Parvez",
  publisher: "Parvez .Dev",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://parvez.dev'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: "Parvez .Dev - Full Stack Developer Portfolio",
    description: "Crafting Digital Experiences, Designing Tomorrow. Explore my portfolio of innovative web development projects.",
    url: "https://parvez.dev",
    siteName: "Parvez .Dev",
    images: [
      {
        url: "/parvez3DDD.png",
        width: 1200,
        height: 630,
        alt: "Parvez - Full Stack Developer Portfolio",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Parvez .Dev - Full Stack Developer Portfolio",
    description: "Crafting Digital Experiences, Designing Tomorrow",
    images: ["/parvez3DDD.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ErrorBoundary>
          <TransitionProvider>{children}</TransitionProvider>
        </ErrorBoundary>
      </body>
    </html>
  );
}
