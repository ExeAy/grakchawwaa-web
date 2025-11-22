import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Grakchawwaa",
  description: "Grakchawwaa is a tool for SWGOH player and guild helper",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className=""
      >
        {children}
      </body>
    </html>
  );
}
