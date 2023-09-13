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
          style={{ width: `${page / 0.04}%` }}
        ></div>
      </div>
      <span>0{page}</span>
    </div>
  );
};

export default Progress;
