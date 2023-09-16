import Image from "next/image";
import Link from "next/link";
import React, { FC } from "react";

const Logo: FC = () => {
  return (
    <Link href={"/"}>
      <Image
        data-aos="flip-left"
        src="/logo.svg"
        alt=""
        width="0"
        height="0"
        priority
      />
    </Link>
  );
};

export default Logo;
