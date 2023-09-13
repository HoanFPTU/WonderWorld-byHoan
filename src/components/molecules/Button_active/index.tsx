import Link from "next/link";
import React, { FC } from "react";
import "./index.scss";
import Button from "@/components/atoms/button";
interface ButtonactiveProps {
  OnClickpage1(): void;
  OnClickpage2(): void;
  children: React.ReactNode;
}
const Buttonactive: FC<ButtonactiveProps> = ({
  children,
  OnClickpage1,
  OnClickpage2,
}) => {
  return (
    <>
      <div className="button-active">
        <p className="button-active__title">{children}</p>
        <Button style="activepage">
          <img src="/activeButton.svg" alt="" />
          <div className="button-active__msg">
            <p onClick={() => OnClickpage1()}>Chương trình trồng san hô</p>
            <p onClick={() => OnClickpage2()}>Khoa học về san hô</p>
          </div>
        </Button>
      </div>
    </>
  );
};
export default Buttonactive;
