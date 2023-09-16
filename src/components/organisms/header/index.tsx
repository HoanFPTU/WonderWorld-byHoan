import Button from "@/components/atoms/button";
import Logo from "@/components/atoms/logo";
import Navigation from "@/components/molecules/navigation";
import React, { FC } from "react";
import "./index.scss";
import { stringify } from "querystring";
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
              <img data-aos="flip-left" src="/fb.svg" alt="Facebook" />
            </a>
            <a href="/">
              <img data-aos="flip-left" src="/Twister.svg" alt="Twister" />
            </a>
            <a href="/">
              <img data-aos="flip-left" src="/instagram.svg" alt="Instagram" />
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
