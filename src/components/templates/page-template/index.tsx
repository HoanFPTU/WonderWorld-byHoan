import React, { FC } from "react";
import "./index.scss";
import Header from "@/components/organisms/header";
import Footer from "@/components/organisms/footer";
interface PageTemplateProps {
  children: React.ReactNode;
  background: string;
}

const PageTemplate: FC<PageTemplateProps> = ({ children, background }) => {
  return (
    <div className="page" style={{ backgroundImage: `url('${background}')` }}>
      <Header />
      {children}
      <Footer />
    </div>
  );
};

export default PageTemplate;
