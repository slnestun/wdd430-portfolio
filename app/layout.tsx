import "./globals.css";
import { Suspense } from "react";
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function RootLayout({
      children,
    }: {
      children: React.ReactNode;
    }) {
      return (
        <html lang="en">
          <body>
            <Header />
            {children}
            <Suspense fallback={null}>
              <Footer />
            </Suspense>
          </body>
        </html>
      );
}
