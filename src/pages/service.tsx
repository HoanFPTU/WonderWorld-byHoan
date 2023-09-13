import React, { FC } from "react";
import "../styles/service.scss";
import Groupcheckbox from "@/components/molecules/groupcheckbox";
import ScrollSpy from "react-ui-scrollspy";
import Carousel from "@/components/organisms/Carousel";
import ServiceLeft from "@/components/organisms/Service-left";
import ServiceRight from "@/components/organisms/Service-right";
import ListCardService from "@/components/organisms/listCardService";
import PageTemplate from "@/components/templates/page-template";
import { useTranslation } from "@/components/hooks/useTranslation";
interface serviceProps {}

const service: FC<serviceProps> = ({}) => {
  const t = useTranslation();
  return (
    <>
      <PageTemplate background="/dVuLan.png">
        <ScrollSpy scrollThrottle={50} offsetTop={50} offsetBottom={50}>
          <Carousel>{t!["carouselStaffService"]}</Carousel>
          <div id="page2">
            <ListCardService />
          </div>
        </ScrollSpy>
      </PageTemplate>
    </>
  );
};

export default service;
