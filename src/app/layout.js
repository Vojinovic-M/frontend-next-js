import localFont from "next/font/local";
import "bootstrap/dist/css/bootstrap.min.css"
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
      <div className="container py-3">
        <Header/>
        <main>{children}</main>
        <Footer/>
      </div>

      </body>
    </html>
  );
}
