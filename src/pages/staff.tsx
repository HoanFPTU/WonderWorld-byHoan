import React from "react";
import "../styles/staff.scss";
import "../styles/globals.scss";
import Inforstaff from "@/components/organisms/InforStaff";
import Button from "@/components/atoms/button";
import Groupcheckbox from "@/components/molecules/groupcheckbox";
import Carousel from "@/components/organisms/Carousel";
import ScrollSpy from "react-ui-scrollspy";
import PageTemplate from "@/components/templates/page-template";
import { useTranslation } from "@/components/hooks/useTranslation";
import { PageContext } from "@/components/useContext/setPage";
const staff = () => {
  const t = useTranslation();
  const { numberPage, setNumberPage } = React.useContext(PageContext);
  React.useEffect(() => {
    setNumberPage(2);
  }, []);
  return (
    <PageTemplate background="/bg2-2.svg">
      <Carousel>{t!["carouselStaffPage"]}</Carousel>
      <div id="page2" className="block">
        <Button href="./" style="staff">
          {t!["staffPageTitle"]}
        </Button>
        <Inforstaff></Inforstaff>
      </div>
    </PageTemplate>
  );
};
export default staff;
