import {
  Josefin_Sans,
  Open_Sans,
  Poppins,
  Gloria_Hallelujah,
  Syncopate,
} from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "../providers/ThemeProvider";
import { generateSEO, generateViewport } from "@/config/seo/seo";
import { Toaster } from "@/components/ui/sonner";
import Footer from "../components/Footer";
import ScrollToTop from "../components/reusables/ScrollToTop";
import ProgressBar from "@/components/reusables/ProgressBar";
import ScrollLoader from "@/components/reusables/ScrollLoader";
import FloatingNavbar from "../components/header/Header";
import FloatingDockButtons from "@/components/FloatingDock";
import { TooltipProvider } from "@/components/ui/tooltip";
import Particles from "@/components/ui/particles";
import { disableAnimationsOnMobile } from "@/utils/disableFramermotion";

export const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "700", "900"],
  variable: "--font-poppins",
});
export const josefin = Josefin_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-josefin",
});
export const opensans = Open_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-opensans",
});
export const glory = Gloria_Hallelujah({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-glory",
});
const syncopate = Syncopate({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-syncopate",
});

export const viewport = generateViewport({});
export const metadata = generateSEO({});

export default function RootLayout({ children }: { children: React.ReactNode }) {
  disableAnimationsOnMobile
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${poppins.variable} ${poppins.className} ${josefin.variable} ${glory.variable} ${syncopate.variable} ${opensans.variable} ${opensans.className} relative bg-background min-h-screen flex justify-around flex-col gap-4`}
      >
        <TooltipProvider delayDuration={200}>
          <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            enableSystem
            disableTransitionOnChange
          >
            <FloatingNavbar />
            <FloatingDockButtons />

            <main className="flex-grow">{children} </main>

            <footer>
              <Footer />
            </footer>
            <Particles
              className="absolute inset-0"
              ease={80}
            />
            <Toaster toastOptions={{ duration: 3000 }} theme="light" />
            <ScrollToTop />
            <ScrollLoader />
            <ProgressBar />
          </ThemeProvider>
        </TooltipProvider>
      </body>
    </html>
  );
}
