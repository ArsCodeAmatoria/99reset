import type { Metadata } from "next";
import { Inter, IBM_Plex_Serif, Bagel_Fat_One } from "next/font/google";
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

const bagelFatOne = Bagel_Fat_One({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-bagel-fat",
  display: "swap",
});

export const metadata: Metadata = defaultMetadata;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${ibmPlexSerif.variable} ${bagelFatOne.variable}`} suppressHydrationWarning>
      <head>
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
