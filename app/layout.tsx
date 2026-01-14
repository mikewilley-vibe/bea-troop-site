import "./globals.css";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";
import ReadingProgress from "@/components/ReadingProgress";

export const metadata = {
  title: "Girl Scout Troop 21",
  description: "Girl Scout Brownie Troop website",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
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