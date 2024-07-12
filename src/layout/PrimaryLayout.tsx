import { ReactNode } from "react";
import Header from "./header/Header";
import Footer from "./footer/Footer";
type LayoutProps = { children: ReactNode };

export default function PrimaryLayout({ children }: LayoutProps) {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
}
