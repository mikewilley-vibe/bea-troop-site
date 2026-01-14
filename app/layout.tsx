import "./globals.css";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";
import ReadingProgress from "@/components/ReadingProgress";
import { SITE_CONFIG, SCHEMA_ORG } from "@/lib/seo";

export const metadata = {
  title: SITE_CONFIG.title,
  description: SITE_CONFIG.description,
  keywords: ['Girl Scout', 'Troop 21', 'Brownies', 'Cookies', 'Leadership', 'Community Service'],
  authors: [{ name: SITE_CONFIG.author }],
  openGraph: {
    title: SITE_CONFIG.title,
    description: SITE_CONFIG.description,
    url: SITE_CONFIG.url,
    type: SITE_CONFIG.type,
    images: [
      {
        url: SITE_CONFIG.image,
        width: 1200,
        height: 630,
        alt: 'Girl Scout Troop 21',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: SITE_CONFIG.title,
    description: SITE_CONFIG.description,
    images: [SITE_CONFIG.image],
  },
  robots: {
    index: true,
    follow: true,
    'max-image-preview': 'large',
    'max-snippet': -1,
    'max-video-preview': -1,
  },
  alternates: {
    canonical: SITE_CONFIG.url,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(SCHEMA_ORG.organization),
          }}
        />
      </head>
      <body className="text-slate-800" style={{ backgroundColor: '#F5FAF5' }}>
        <ReadingProgress />
        <Nav />
        <main className="mx-auto max-w-5xl px-4 py-8">{children}</main>
        <Footer />
        <ScrollToTop />
      </body>
    </html>
  );
}