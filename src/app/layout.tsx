import "@/app/globals.css";
import Header from "@/components/Header";
import { Metadata } from "next";
import Providers from "./Providers";
import Tabs from "@/components/Tabs";

export const metadata: Metadata = {
  title: "MovieApp",
  description: "Welcome to Next.js",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Providers>
          <Header/>
          <Tabs/>
          {children}
        </Providers>
      </body>
    </html>
  );
}
