import React, { FC } from "react";
import "../styles/service.scss";

import ScrollSpy from "react-ui-scrollspy";
import Carousel from "@/components/organisms/Carousel";
import { motion } from "framer-motion";
import ListCardService from "@/components/organisms/listCardService";
import PageTemplate from "@/components/templates/page-template";
import { useTranslation } from "@/components/hooks/useTranslation";
import { PageContext } from "@/components/useContext/setPage";
import { useRouter } from "next/router";
interface serviceProps {}

const service: FC<serviceProps> = ({}) => {
  const { numberPage, setNumberPage } = React.useContext(PageContext);
  const router = useRouter();
  React.useEffect(() => {
    setNumberPage(4);
  }, []);
  const t = useTranslation();
  return (
    <>
      <motion.div
        key={router.pathname}
        initial={{ x: "100%" }}
        animate={{ x: 0 }}
        exit={{ x: "-100%" }}
        transition={{
          duration: 0.6,
          ease: "easeInOut",
        }}
      >
        {" "}
        <PageTemplate background="/dVuLan.png">
          {/* background="/dVuLan.png" */}
          <ScrollSpy scrollThrottle={50} offsetTop={50} offsetBottom={50}>
            <Carousel>{t!["carouselStaffService"]}</Carousel>
            <div>
              <ListCardService />
            </div>
          </ScrollSpy>
        </PageTemplate>
      </motion.div>
    </>
  );
};

export default service;
