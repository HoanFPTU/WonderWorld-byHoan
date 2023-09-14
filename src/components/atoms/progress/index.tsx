import React, { FC, useContext } from "react";
import "./index.scss";
import { PageContext } from "@/components/useContext/setPage";

const Progress: FC = ({}) => {
  const { page, setPage } = useContext(PageContext);

  return (
    <div className="progress">
      <div className="progress__border">
        <div
          className="progress_per"
          style={{ width: `${page ? page / 0.04 : 1}%` }}
        ></div>
      </div>
      <span>0{page ? page : 4}</span>
    </div>
  );
};

export default Progress;
