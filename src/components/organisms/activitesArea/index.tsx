import React, { FC, useState } from "react";
import "./index.scss";
import ActivitiesItem from "@/components/molecules/activitiesItem";
import ActivitiesDetail from "@/components/molecules/activitiesDetail";
import Buttonactive from "@/components/molecules/Button_active";
interface ActivitiesAreaProps {}

const ActivitiesArea: FC<ActivitiesAreaProps> = ({}) => {
  const activitiesInformation = [
    {
      imageSrc: "/activities1.svg",
      title: `Rạn san hô là gì?`,
      content: `Được ví như “rừng mưa nhiệt đới dưới đáy biển”,
      các rạn san hô là nơi sinh sống của khoảng 25% các
      loài sinh vật biển. Rạn san hô cung cấp nơi trú ẩn
      và thức ăn cho hơn 4000 loài cá. Phần lớn rạn san
      hô phân bố ở các vùng biển nhiệt đới và ôn đới.`,
    },
    {
      imageSrc: "/activities2.svg",
      title: `San hô cứng là gì?`,
      content: `Có bộ xương chứa đá vôi (canxi cacbonat),
      là thành phần chính cấu thành nên rạn san
      hô. Khi chúng chết đi để lại bộ xương đá vôi và rồi san hô mới lại tiếp tục phát triển
      trên nền đá vôi đó.`,
    },
    {
      imageSrc: "/activities3.svg",
      title: `San hô mềm là gì?`,
      content: `Không có xương, rất mềm dẻo.
      Khi chúng chết đi sẽ không để lại gì cả.
      `,
    },
    {
      imageSrc: "/activities4.svg",
      title: `San hô mềm là gì?`,
      content: `San hô là loài động vật không xương sống thuộc
      ngành ruột khoang, được cấu tạo từ các polyp nhỏ.`,
    },
  ];
  const activitiesDetail1 = {
    imageSrc: `/activities5.svg`,
    title: `1-Chương trình trồng san hô`,
    content: [
      `Wonder World chúng tôi hiện đang là đơn vị tiên phong trong lĩnh vực thực hiện dự án khoa hoc về viẹc phục hồi, tái tạo và bảo vệ đa dạng sinh học thông qua chương trình trồng san hô.`,
      `Trồng san hô - là cách để bảo vê, gìn dữ, tái tạo, và phục hồi .Dự án được thực hiện dứoi sự hướng dẫn và cố vấn của cộng đồng chuyên gia của Việt Nam tại viện hải dương học, Trung tâm nhiệt đới Việt Nga, và cộng đồng các nhà khoa học quốc tế từ ÚC -AIMS, Mỹ - NOOA.`,
    ],
  };
  const activitiesDetail2 = {
    imageSrc: `/activities6.svg`,
    title: `2- chương trình nghiên cứu khoa học biển, san hô`,
    content: [
      `Wonder world với định hướng trở thành tâm điểm phát triển chương trình Công dân toàn cầu và mạng lưới các nhà khoa học trẻ toàn cầu  tại Việt Nam dứoi sự hỗ trợ và dân dắt của chương trình mạng lưới công dân toàn cầu ( Citizen Global )  của liên hiệp quốc về môi trường  (UNEP) và UNESSCO-CEP, chúng tôi mang đén các chương trình học cho các cấp độ, các chương trình nghiên cứu thực tiễn tại hiện trường và trong phòng Lab, kết hợp với công nghệ tương tác, thực tế ảo tăng cường, nhẳm rút ngắn khoảng cách trở thành mọt nhà khoa học, nhà nghiên cứu độc lập trong tương lai của mỗi cá nhân trong xã hội hiện tại.`,
      `Với mục tiêu: mỗi công dân trẻ Việt Nam - đều có thể trở thành 1 nhà khoa học trong tương lai và đó là cách để " Cho một Việt Nam thêm Thịnh Vượng " - đơn giản vì " tôi yêu Việt Nam"`,
    ],
  };
  const [currentPage, setCurrentPage] = useState(1);
  if (currentPage === 1)
    return (
      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
        <Buttonactive
          OnClickpage1={() => setCurrentPage(2)}
          OnClickpage2={() => setCurrentPage(3)}
        >
          Các hoạt động
        </Buttonactive>
        <div className="activities-area">
          {activitiesInformation.map(({ imageSrc, title, content }, index) => {
            return (
              <div className="activities-area-item" key={index}>
                <ActivitiesItem
                  imageSrc={imageSrc}
                  title={title}
                  content={content}
                />
              </div>
            );
          })}
        </div>
      </div>
    );
  if (currentPage === 2)
    return (
      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
        {" "}
        <Buttonactive
          OnClickpage1={() => setCurrentPage(2)}
          OnClickpage2={() => setCurrentPage(3)}
        >
          Các hoạt động
        </Buttonactive>
        <ActivitiesDetail
          imageSrc={activitiesDetail1.imageSrc}
          title={activitiesDetail1.title}
          content={activitiesDetail1.content}
          buttonPosition="insite"
        />
      </div>
    );
  if (currentPage === 3)
    return (
      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
        {" "}
        <Buttonactive
          OnClickpage1={() => setCurrentPage(2)}
          OnClickpage2={() => setCurrentPage(3)}
        >
          Các hoạt động
        </Buttonactive>
        <ActivitiesDetail
          imageSrc={activitiesDetail2.imageSrc}
          title={activitiesDetail2.title}
          content={activitiesDetail2.content}
          buttonPosition="insite"
        />
      </div>
    );
};

export default ActivitiesArea;
