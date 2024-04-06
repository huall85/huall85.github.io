import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "李铧犁",
  description: "前端开发工程师",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="bg-white leading-relaxed antialiased">{children}</body>
    </html>
  );
}
