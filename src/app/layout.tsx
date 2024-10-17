import type { Metadata } from "next";
import "./globals.css";
import 'devicon/devicon.min.css';
import { inter } from "@/config/font"
import { ThemeProvider } from "@/components/ui/themes-provider";



export const metadata: Metadata = {
  title: {
    template: "%s | Kevin Reyes",
    default: "Kevin Reyes",
  },
  description: "The Portfolio Website of Kevin Reyes.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={inter.className}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
