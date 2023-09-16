import Link from "next/link";
import React, { FC } from "react";

const Logo: FC = () => {
  return (
    <Link href={"/"}>
      <img data-aos="flip-left" src="/logo.svg" alt="" />
    </Link>
  );
};

export default Logo;
