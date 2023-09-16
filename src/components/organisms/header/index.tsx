import Button from "@/components/atoms/button";
import Logo from "@/components/atoms/logo";
import Navigation from "@/components/molecules/navigation";
import React, { FC } from "react";
import "./index.scss";
import { stringify } from "querystring";
import Image from "next/image";
interface HeaderProps {}

const Header: FC<HeaderProps> = ({}) => {
  return (
    <header className="header-area">
      <div className="header" id="the-header">
        <div>
          <Logo />
        </div>

        <div className="header__right">
          <div className="header__right__navbar">
            <Navigation />
          </div>

          <div className="icons">
            <a href="/">
              <Image
                data-aos="flip-left"
                src="/fb.svg"
                alt="Facebook"
                width="0"
                height="0"
                priority
              />
            </a>
            <a href="/">
              <Image
                data-aos="flip-left"
                src="/Twister.svg"
                alt="Twister"
                width="0"
                height="0"
                priority
              />
            </a>
            <a href="/">
              <Image
                data-aos="flip-left"
                src="/instagram.svg"
                alt="Instagram"
                width="0"
                height="0"
                priority
              />
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
