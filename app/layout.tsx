import type { Metadata } from "next";
import { Inter, IBM_Plex_Serif } from "next/font/google";
import "../styles/globals.css";
import "../styles/prose.css";
import "../styles/theme.css";
import { defaultMetadata, createOrganizationSchema } from "@/lib/seo";
import { Analytics } from "@/lib/analytics";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { ScrollProgress } from "@/components/scroll-progress";
import { BackgroundPattern } from "@/components/background-pattern";
import { StructuredData } from "@/components/structured-data";
import { ThemeProvider } from "@/components/theme-provider";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const ibmPlexSerif = IBM_Plex_Serif({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-ibm-plex-serif",
  display: "swap",
});

export const metadata: Metadata = defaultMetadata;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${ibmPlexSerif.variable}`} suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Bagel+Fat+One&family=Dela+Gothic+One&family=M+PLUS+Rounded+1c:wght@700;800;900&display=swap" rel="stylesheet" />
        <StructuredData data={createOrganizationSchema()} />
      </head>
      <body className="min-h-screen overflow-x-hidden">
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false}>
          <ScrollProgress />
          <BackgroundPattern />
          <a href="#main-content" className="skip-link">
            Skip to content
          </a>
          <Header />
          <main id="main-content" className="overflow-x-hidden">
            {children}
          </main>
          <Footer />
          <Analytics />
        </ThemeProvider>
      </body>
    </html>
  );
}
