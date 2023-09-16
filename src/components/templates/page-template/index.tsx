"use client";
import React, { FC, useEffect } from "react";
import "./index.scss";
import Header from "@/components/organisms/header";
import Footer from "@/components/organisms/footer";
import { useRouter } from "next/router";

import { motion } from "framer-motion";
import { PageContext } from "@/components/useContext/setPage";
interface PageTemplateProps {
  children: React.ReactNode;
  background: string;
}

const PageTemplate: FC<PageTemplateProps> = ({ children, background }) => {
  const router = useRouter();
  const { numberAnimation, setNumberAnimation } = React.useContext(PageContext);
  return (
    <div
      className="page"
      style={{
        backgroundImage: `url('${background}')`,
      }}
      data-aos="zoom-out"
      data-aos-duration="1000"
      data-aos-easing="ease-in-sine"
    >
      <Header />
      {children}
      <Footer />
    </div>
  );
};

export default PageTemplate;
