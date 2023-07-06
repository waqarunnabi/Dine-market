import "./globals.css";
import { Sora } from "next/font/google";
import localFont from "@next/font/local";
import { ToastContainer, toast } from "react-toastify";
import Header from "./components/header";
import Footer from "./components/footer";
const NUSAR = localFont({
  src: [
    {
      path: "../assets/fonts/NUSAR.woff",
      weight: "400",
    },
  ],
  variable: "--font-nusar",
});

const sora = Sora({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
  display: "swap",
  variable: "--font-sora",
});

export const metadata = {
  title: "Dine Market",
  description: "Generated by Nexu Solutions",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={
          `${sora.variable} font-sora` + " " + `${NUSAR.variable} font-sans`
        }
      >
        <Header />
        <ToastContainer />
        {children}

        <Footer />
      </body>
    </html>
  );
}
