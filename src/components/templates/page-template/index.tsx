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
    <motion.div
      key={router.pathname}
      initial={numberAnimation ? { x: `-${numberAnimation}%` } : { x: "-100%" }}
      animate={{ x: 0 }}
      exit={numberAnimation ? { x: `${numberAnimation}%` } : { x: "100%" }}
      transition={{
        duration: 0.6,
        ease: "easeInOut",
      }}
    >
      <div
        className="page"
        style={{
          backgroundImage: `url('${background}')`,
        }}
      >
        <Header />
        {children}
        <Footer />
      </div>
    </motion.div>
  );
};

export default PageTemplate;
