import React from "react";
import { mobileData } from "../data/mobiles";
import NavBar from "../components/NavBar";

const Mobile = () => {
  return (
    <>
      <NavBar />
      <div className="pageSection">
        {mobileData.map((item, index) => {
          return (
            <div key={index}>
              <div className="pageImage">
                <img src={item.image} alt="" />
              </div>
              <div className="prodModel">
                {item.company}, {item.model}
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Mobile;
