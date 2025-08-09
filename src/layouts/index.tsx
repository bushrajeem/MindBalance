import type { ReactNode } from "react";
import Footer from "./Footer";
import Header from "./Header";

interface LayoutProps {
  children: ReactNode;
}

function Layouts({children} : LayoutProps) {
  return (
    <div>
      <Header />
      {children}
      <Footer />
    </div>
  )
}

export default Layouts
