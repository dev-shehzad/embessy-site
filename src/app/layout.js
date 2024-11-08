// layout.js
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./Components/Home/Navbar/Navbar";
import Footer from "./Components/Home/Footer/Footer";
import Head from "next/head"; // Import Head from next/head
import Script from "next/script";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title:
    "Embedsy - Customizable Power BI Embedded Analytics Portal for Everyone",
  description:
    "Unlock the full potential of Power BI Embedded with Embedsy. A fully customizable portal for secure and cost-effective analytics distribution to unlimited users. Access powerful reports without the need for Power BI PRO licenses. Try our demo or book a free trial today!",
  keywords:
    "Power BI Embedded, Customizable Analytics Portal, Embedded Analytics, Power BI for Business, Power BI without licenses, Microsoft Fabric Analytics, Power BI White-Label Solution, Row-Level Security, Power BI PRO alternatives, Power BI Embedded for unlimited users, Data visualization platform, Secure Analytics Portal, Embedded Analytics Platform, Power BI Custom Design, Power BI Reports for clients, Power BI SaaS Solution, Power BI Embedded demo, Embedded Analytics for everyone",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        <meta name="keywords" content={metadata.keywords} />{" "}
        <link rel="icon" href="/favicon.ico" />
        <link rel="icon" type="image/png" sizes="32x32" href="/fav.png" />
      </Head>
      {/* Google Analytics Script */}
      <Script
        async
        src="https://www.googletagmanager.com/gtag/js?id=G-8KSD2824WR"
      ></Script>
      <Script id="google-analytics">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-8KSD2824WR');
        `}
      </Script>

      <body className={inter.className}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
