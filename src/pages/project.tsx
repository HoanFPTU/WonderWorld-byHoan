import { AppProps } from "next/app";
import React, { Component, FC } from "react";
import "../styles/globals.scss";
import "../styles/index.scss";
import "../styles/project.scss";
import Groupcheckbox from "@/components/molecules/groupcheckbox";
import Carousel from "@/components/organisms/Carousel";
import ScrollSpy from "react-ui-scrollspy";
import ServiceLeft from "@/components/organisms/Service-left";
import ServiceRight from "@/components/organisms/Service-right";
import PageTemplate from "@/components/templates/page-template";
import { useTranslation } from "@/components/hooks/useTranslation";
const Project: FC = () => {
  const t = useTranslation();
  return (
    <>
      <PageTemplate background="/bg1.jpeg">
        <Carousel>Dự Án Bảo Tồn Bãi Biển</Carousel>
        <div className="cover-project">
          <ServiceLeft />
          <ServiceRight />
        </div>
      </PageTemplate>
    </>
  );
};

export default Project;
