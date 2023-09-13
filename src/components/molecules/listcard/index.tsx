// import React, { FC } from "react";
// import "./index.scss";
// import Card from "@/components/atoms/card";
// import Slider from "react-slick";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
// import { useTranslation } from "@/components/hooks/useTranslation";
// interface ListcardProps {
//   page?: number;
// }
// const Listcard: FC<ListcardProps> = ({ page }) => {
//   const t = useTranslation();
//   if (page === 2)
//     return (
//       <div className="listcard">
//         <Card src="/bg3.svg" style="normal">
//           {t!["carouselCardActivities"]}
//         </Card>
//         <Card src="/bg4.svg" style="normal">
//           {t!["carouselCardProject"]}
//         </Card>
//         <Card src="/bg1.svg" style="normal">
//           {t!["carouselCardService"]}
//         </Card>
//         <Card src="/bg2.svg" style="normal">
//           {t!["carouselCardStaff"]}
//         </Card>
//         <Card src="/bg5.svg" style="normal">
//           {t!["carouselCardWorker"]}
//         </Card>
//         <Card src="/bg6.svg" style="normal">
//           {t!["carouselCardMedia"]}
//         </Card>
//       </div>
//     );
//   if (page == 1)
//     return (
//       <div className="listcard">
//         <Card src="/bg2.svg" style="normal">
//           NHÂN SỰ TRINGUDA
//         </Card>
//         <Card src="/bg3.svg" style="normal">
//           các hoạt động tringuda
//         </Card>
//         <Card src="/bg4.svg" style="normal">
//           DỰ ÁN BẢO TỒN BIỂN
//         </Card>
//         <Card src="/bg1.svg" style="normal">
//           TRẠM LẶN BIỂN TRINGUDA
//         </Card>
//         <Card src="/bg5.svg" style="normal">
//           NHÂN VIÊN TRINGUDA
//         </Card>
//         <Card src="/bg6.svg" style="normal">
//           TRUYỀN THÔNG VỀ TRINGUDA
//         </Card>
//       </div>
//     );
//   if (page == 3)
//     return (
//       <div className="listcard">
//         <Card src="/bg1.svg" style="normal">
//           TRẠM LẶN SCUBA
//         </Card>
//         <Card src="/bg5.svg" style="normal">
//           NHÂN VIÊN TRINGUDA
//         </Card>
//         <Card src="/bg6.svg" style="normal">
//           TRUYỀN THÔNG VỀ TRINGUDA
//         </Card>
//         <Card src="/bg2.svg" style="normal">
//           NHÂN SỰ TRINGUDA
//         </Card>
//         <Card src="/bg3.svg" style="normal">
//           các hoạt động tringuda
//         </Card>
//         <Card src="/bg4.svg" style="normal">
//           DỰ ÁN BẢO TỒN BIỂN
//         </Card>
//       </div>
//     );
//   if (page == 4)
//     return (
//       <div className="listcard">
//         <Card src="/bg1.svg" style="normal">
//           TRẠM LẶN BIỂN TRINGUDA
//         </Card>
//         <Card src="/bg2.svg" style="normal">
//           NHÂN SỰ TRINGUDA
//         </Card>
//         <Card src="/bg3.svg" style="normal">
//           các hoạt động tringuda
//         </Card>
//         <Card src="/bg4.svg" style="normal">
//           DỰ ÁN BẢO TỒN BIỂN
//         </Card>

//         <Card src="/bg5.svg" style="normal">
//           NHÂN VIÊN TRINGUDA
//         </Card>
//         <Card src="/bg6.svg" style="normal">
//           TRUYỀN THÔNG VỀ TRINGUDA
//         </Card>
//       </div>
//     );
//   else
//     return (
//       <div className="listcard">
//         <Card src="/bg1.svg" style="normal">
//           {t!["carouselCardService"]}
//         </Card>
//         <Card src="/bg2.svg" style="normal">
//           {t!["carouselCardStaff"]}
//         </Card>
//         <Card src="/bg3.svg" style="normal">
//           {t!["carouselCardActivities"]}
//         </Card>
//         <Card src="/bg4.svg" style="normal">
//           {t!["carouselCardProject"]}
//         </Card>
//         <Card src="/bg5.svg" style="normal">
//           {t!["carouselCardWorker"]}
//         </Card>
//         <Card src="/bg6.svg" style="normal">
//           {t!["carouselCardMedia"]}
//         </Card>
//       </div>
//     );
// };

// export default Listcard;
