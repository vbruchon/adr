import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import clsx from "clsx";
import { ThemeProvider } from "@/src/components/theme-provider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Auto dépannage romanais",
  description: "Auto depannage romanais website",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="h-full" suppressHydrationWarning>
      <body
        className={clsx(
          "h-full bg-background font-sans antialiased",
          geistSans.variable,
          geistMono.variable
        )}
        cz-shortcut-listen="true"
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          {/* <Header /> */}
          <main className="min-h-full mx-auto max-w-4xl px-4 mt-4 lg:mt-6 flex flex-col gap-4">
            {children}
          </main>
          {/* <Footer /> */}
        </ThemeProvider>
      </body>
    </html>
  );
}
