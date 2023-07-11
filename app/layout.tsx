import "./styles/global.css";
import { Header } from "./components/header";
import Footer from "./components/footer";
import { Poppins } from "next/font/google";
import "@fortawesome/fontawesome-free/css/all.min.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: "400",
});

export const metadata = {
  title: "WhatsApp Commerce",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={poppins.className}>
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
