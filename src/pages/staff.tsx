import "../styles/staff.scss";
import "../styles/globals.scss";
import Inforstaff from "@/components/organisms/InforStaff";
import Button from "@/components/atoms/button";
import Groupcheckbox from "@/components/molecules/groupcheckbox";
import Carousel from "@/components/organisms/Carousel";
import ScrollSpy from "react-ui-scrollspy";
import PageTemplate from "@/components/templates/page-template";
import { useTranslation } from "@/components/hooks/useTranslation";
const staff = () => {
  const t = useTranslation();
  return (
    <PageTemplate background="/bg2-2.svg">
      <ScrollSpy scrollThrottle={50} offsetTop={50} offsetBottom={50}>
        <Carousel>{t!["carouselStaffPage"]}</Carousel>
        <div id="page2" className="block">
          <Button href="./" style="staff">
            {t!["staffPageTitle"]}
          </Button>
          <Inforstaff></Inforstaff>
        </div>
      </ScrollSpy>
    </PageTemplate>
  );
};
export default staff;
