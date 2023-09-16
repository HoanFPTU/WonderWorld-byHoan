import Link from "next/link";
import React, { FC } from "react";
import "./index.scss";
interface StaffnameProps {
  fullname: string;
  rule: string;
  level: 2 | 4;
}

const Staffname: FC<StaffnameProps> = ({ rule, level, fullname }) => {
  if (level == 2)
    return (
      <div className="staffname">
        <h3 className="nameStaff"> {fullname}</h3>
        <p className="ruleStaff">{rule}</p>
        <div className="levelStaff">
          <img priority={true} src="/level.svg" alt="" />
          <img priority={true} src="/level.svg" alt="" />
        </div>
      </div>
    );
  return (
    <div className="staffname">
      <h3 className="nameStaff"> {fullname}</h3>
      <p className="ruleStaff">{rule}</p>
      <div className="levelStaff">
        <img priority={true} src="/level.svg" alt="" />
        <img priority={true} src="/level.svg" alt="" />
        <img priority={true} src="/level.svg" alt="" />
        <img priority={true} src="/level.svg" alt="" />
      </div>
    </div>
  );
};

export default Staffname;
