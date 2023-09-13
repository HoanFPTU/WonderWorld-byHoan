import "../styles/staff.scss";
import Inforstaff from "@/components/organisms/InforStaff";
import Button from "@/components/atoms/button";
import Groupcheckbox from "@/components/molecules/groupcheckbox";
import Carousel from "@/components/organisms/Carousel";
import ScrollSpy from "react-ui-scrollspy";
const test2 = () => {
  return (
    <div className="home">
      <div className="bg"></div>

      <ScrollSpy scrollThrottle={50} offsetTop={50} offsetBottom={50}>
        <Carousel>NHÂN VIÊN TRINGUDA</Carousel>
        <div className="block">
          <Button href="./" style="staff">
            Thành viên
          </Button>
          <Inforstaff></Inforstaff>
        </div>
      </ScrollSpy>
    </div>
  );
};
export default test2;
