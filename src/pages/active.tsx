import { AppProps } from "next/app";
import React, { FC, useEffect } from "react";
import "../styles/globals.scss";

import Carousel from "@/components/organisms/Carousel";

import PageTemplate from "@/components/templates/page-template";
import ActivitiesArea from "@/components/organisms/activitesArea";
import { useTranslation } from "@/components/hooks/useTranslation";
import { PageContext } from "@/components/useContext/setPage";
const ActivePage: FC = ({}) => {
  const t = useTranslation();
  const { numberPage, setNumberPage } = React.useContext(PageContext);
  useEffect(() => {
    setNumberPage(3);
  }, []);

  return (
    <>
      <PageTemplate background="/backgroundTemplate/active.svg">
        {/* background="/bg1.svg" */}
        <Carousel> {t!["carouselCardActivities"]}</Carousel>
        <div>
          <ActivitiesArea></ActivitiesArea>
        </div>
      </PageTemplate>
    </>
  );
};
export default ActivePage;
