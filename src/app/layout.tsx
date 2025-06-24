import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "User Creation",
  description: "Using login and user creation",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="bg-gradient-to-bl from-blue-500 to bg-blue-950">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Merriweather:ital,opsz,wght@0,18..144,300..900;1,18..144,300..900&family=PT+Sans:ital,wght@0,400;0,700;1,400;1,700&display=swap"
          rel="stylesheet"
        ></link>
      </head>
      <body className="antialiased min-h-screen w-full flex items-center justify-center">
        {children}
      </body>
    </html>
  );
}
