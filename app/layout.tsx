import type { Metadata } from "next";
import { PT_Sans } from "next/font/google";
import "./globals.css";
import "@splidejs/react-splide/css";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v15-appRouter";
import LayoutClient from "./layout.client";
import { ThemeProvider } from "@/theme";

const PTSans = PT_Sans({
  weight: ["400", "700"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: " Non Coders | Human Tech Solutions That Truly Care More Now",
  description: "Building simple, emotional technology that helps businesses grow, connect with people, and move forward with confidence, care, and clarity every single day.",
  robots: {
    index: false,   // noindex
    follow: false,  // nofollow
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${PTSans.className} antialiased`}>
        <AppRouterCacheProvider>
          <ThemeProvider>
            <LayoutClient>{children}</LayoutClient>
          </ThemeProvider>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}
