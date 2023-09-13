import "../styles/staff.scss";
import "../styles/globals.scss";
import Inforstaff from "@/components/organisms/InforStaff";
import Button from "@/components/atoms/button";
import Groupcheckbox from "@/components/molecules/groupcheckbox";
import Carousel from "@/components/organisms/Carousel";
import ScrollSpy from "react-ui-scrollspy";
import PageTemplate from "@/components/templates/page-template";
const staff = () => {
  return (
    <>
      <PageTemplate background="bg1.svg">
        <Groupcheckbox idList={["carousel", "staff_page"]}></Groupcheckbox>

        <ScrollSpy scrollThrottle={50} offsetTop={50} offsetBottom={50}>
          <Carousel id="carousel">Dự án bảo tồn biển</Carousel>
          <div id="staff_page">
            <Button style="staff">Thành viên</Button>
            <Inforstaff />
          </div>
        </ScrollSpy>
      </PageTemplate>
    </>
  );
};
export default staff;
