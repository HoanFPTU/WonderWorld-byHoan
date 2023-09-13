import Link from "next/link";
import React, { FC } from "react";
import "./index.scss";
interface checkboxProps {
  href: string;
}

const Checkbox: FC<checkboxProps> = ({ href }) => {
  return (
    <div className={`checkbox`} data-to-scrollspy-id={`${href}`}>
      <a className="a" href={`#${href}`}></a>
    </div>
  );
};

export default Checkbox;
