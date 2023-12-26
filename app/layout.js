import { Inter } from "next/font/google";
import "./globals.css";
import NavBar from "@/components/NavBar";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Binance Dashboard",
  description: "Data analysis of Binance trading data.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="grid md:grid-cols-3">
          <NavBar />
          {children}
        </div>
      </body>
    </html>
  );
}
