import EventDetail from "@/components/atoms/enentDetail";
import EventTitle from "@/components/atoms/eventTitle";
import React, { FC } from "react";
import "./index.scss";

import { useTranslation } from "@/components/hooks/useTranslation";
import Link from "next/link";
import Image from "next/image";
interface indexProps {}

const About: FC<indexProps> = ({}) => {
  const t = useTranslation();
  return (
    <div>
      <div className="about">
        <div className="about__top">
          <EventDetail content={t!["footerAboutTitle"]} />
          <h5>{t!["footerAboutContent"]}</h5>
        </div>
        <div className="about__bottom">
          <div className="icons">
            <Link href="#">
              <Image
                data-aos="flip-left"
                src="/Twister.svg"
                alt="Twister"
                width="0"
                height="0"
                priority
              />
            </Link>
            <Link href="#">
              <Image
                data-aos="flip-left"
                src="/fb.svg"
                alt="Facebook"
                width="0"
                height="0"
                priority
              />
            </Link>

            <Link href="#">
              <Image
                data-aos="flip-left"
                src="/instagram.svg"
                alt="Instagram"
                width="0"
                height="0"
                priority
              />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
