import Link from "next/link";
import React, { FC } from "react";
import "./index.scss";
import Staffname from "@/components/atoms/Staffname";
import { useTranslation } from "@/components/hooks/useTranslation";
interface InforstaffProps {}

const Inforstaff: FC<InforstaffProps> = ({}) => {
  const t = useTranslation();
  return (
    <div className="inforstaff">
      <div className="inforstaff__top">
        <div className="box-staff">
          <img data-aos="flip-left" priority={true} src="/staff1.svg" alt="" />
          <Staffname
            fullname={t!["staffMember01Fullname"]}
            level={4}
            rule={t!["staffMember01Rule"]}
          ></Staffname>
        </div>
        <div className="box-staff">
          <Staffname
            fullname={t!["staffMember02Fullname"]}
            level={2}
            rule={t!["staffMember02Rule"]}
          ></Staffname>
          <img data-aos="flip-left" priority={true} src="/staff2.svg" alt="" />
        </div>
      </div>
      <div className="inforstaff__bot">
        <div className="box-staff2">
          <div className="box-staff">
            <img
              data-aos="flip-left"
              priority={true}
              src="/staff3.svg"
              alt=""
            />
            <Staffname
              fullname={t!["staffMember03Fullname"]}
              level={2}
              rule={t!["staffMember03Rule"]}
            ></Staffname>
          </div>
          <div className="box-staff">
            <img
              data-aos="flip-left"
              priority={true}
              src="/staff4.svg"
              alt=""
            />
            <Staffname
              fullname={t!["staffMember04Fullname"]}
              level={2}
              rule={t!["staffMember04Rule"]}
            ></Staffname>
          </div>
        </div>
        <div className="box-staff2">
          <div className="box-staff">
            <img
              data-aos="flip-left"
              priority={true}
              src="/staff5.svg"
              alt=""
            />
            <Staffname
              fullname={t!["staffMember05Fullname"]}
              level={2}
              rule={t!["staffMember05Rule"]}
            ></Staffname>
          </div>
          <div className="box-staff">
            <img
              data-aos="flip-left"
              priority={true}
              src="/staff6.svg"
              alt=""
            />
            <Staffname
              fullname={t!["staffMember06Fullname"]}
              level={2}
              rule={t!["staffMember06Rule"]}
            ></Staffname>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Inforstaff;
