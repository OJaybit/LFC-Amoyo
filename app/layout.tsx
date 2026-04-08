import "./globals.css";
import Navbar from "./components/Navbar";

import ScrollToTop from "./components/ScrollToTop";
import Footer from "./components/Footer";
import GoogleTranslate from "./components/GoogleTranslate";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="min-h-screen overflow-x-hidden flex flex-col">
        <Navbar />

        {/* Language dropdown UI */}
        <div className="fixed top-4 right-6 z-[9999]">
          <GoogleTranslate />
        </div>

        <ScrollToTop />

        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
