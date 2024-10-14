import {Josefin_Sans,Open_Sans,Poppins } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "../providers/ThemeProvider";
import { generateSEO, generateViewport } from "@/config/seo/seo";
import { Toaster } from "@/components/ui/sonner";

import Footer from "../components/Footer";
import ScrollToTop from "../components/reusables/ScrollToTop";
import ProgressBar from "@/components/reusables/ProgressBar";
import ScrollLoader from "@/components/reusables/ScrollLoader";
import FloatingNavbar from "../components/header/Header";
// In app directory
// import { ArticleJsonLd, DefaultSeo } from "next-seo";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "700", "900"],
  variable: "--font-poppins",
});

const josefin = Josefin_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-josefin"
});
const opensans = Open_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-opensans"
})
// setup SEO
export const viewport = generateViewport({});
// setup SEO
export const metadata = generateSEO({});
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${poppins.className, josefin.className, opensans.className} ${poppins.variable, josefin.variable, opensans.variable} bg-background  min-h-screen flex justify-around flex-col gap-4 `}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
            {/* <QueryProvider> */}
            <FloatingNavbar />

            <main className="flex-grow">{children}</main>
            <footer>
              <Footer />
            </footer>

          {/* </QueryProvider> */}
          <Toaster toastOptions={{ duration: 3000 }} theme="light" />
          <ScrollToTop />

          {/* when user will scrolling in the page it will show the loader */}
          <ScrollLoader />
          <ProgressBar />
        </ThemeProvider>
      </body>
    </html>
  );
}
