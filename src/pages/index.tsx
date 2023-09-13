import { FC, useState } from "react";
import "../styles/index.scss";
import ServiceCard from "@/components/atoms/serviceCard";
import ListCardService from "@/components/organisms/listCardService";
import Groupcheckbox from "@/components/molecules/groupcheckbox";
import ScrollSpy from "react-ui-scrollspy";
import Carousel from "@/components/organisms/Carousel";
import PageTemplate from "@/components/templates/page-template";

const Home: FC = () => {
  return (
    <PageTemplate background="/bg1.jpeg">
      <Groupcheckbox idList={["1", "2"]}></Groupcheckbox>
      <ScrollSpy scrollThrottle={50} offsetTop={50} offsetBottom={50}>
        <Carousel page={1} id="1">
          Dự án bảo tồn biển
        </Carousel>
        {/* <div className="block" id="page2"></div>
          <div className="block" id="page3"></div> */}
        <div id="2">
          <ListCardService />
        </div>
      </ScrollSpy>
    </PageTemplate>
  );
};

export default Home;
