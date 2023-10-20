import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Icon Photography",
  description: "Photograph and Video Services",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="relative">
      <img
        src="/assets/images/leaves_links.png"
        width={300}
        height={300}
        className="absolute left-0 top-0 xsm:hidden"
      />
      <img
        src="/assets/images/leaves_rechts.png"
        width={300}
        height={300}
        className="absolute right-0 top-0 xsm:hidden"
      />
      <body className={inter.className}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
