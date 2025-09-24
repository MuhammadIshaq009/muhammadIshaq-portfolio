import { Inter } from "next/font/google";
import Footer from "./components/footer";
import Providers from "./providers";
import Navbar from "./components/navbar";
import "./css/card.scss";
import "./css/globals.scss";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Portfolio of Muhammad Ishaq - MERN Stack Developer",
  description:
    "This is the portfolio of Muhammad Ishaq, a MERN Stack Developer based in Dubai, UAE.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>
          <main className="min-h-screen relative mx-auto px-6 sm:px-12 lg:max-w-[70rem] xl:max-w-[76rem] 2xl:max-w-[92rem] text-white">
            <Navbar />
            {children}
          </main>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
