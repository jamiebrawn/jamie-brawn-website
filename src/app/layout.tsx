import type { Metadata } from "next";
import { headers } from "next/headers";
import { Providers } from "./Providers";
import Footer from "../components/Footer";
import "./globals.css";

export const metadata: Metadata = {
  title: "Jamie Brawn",
  description: "Software Developer and GIS Analyst",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const headersList = headers();
  const theme = headersList.get("x-theme") || "system";

  return (
    <html lang="en" className={theme}>
      <body>
        <Providers>
          <div className="layout">
            <main>{children}</main>
            <Footer />
          </div>
        </Providers>
      </body>
    </html>
  );
}
