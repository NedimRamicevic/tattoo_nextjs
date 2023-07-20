import "./globals.css";
import { Inter } from "next/font/google";
import Navbar from "./components/navbar/Navbar";
import Provider from "./components/provider/provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Tattoo",
  description: "Tattoo Site With Next.js",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Provider>
          <Navbar />
          {children}
        </Provider>
      </body>
    </html>
  );
}
