import React from "react";
import { computerData } from "../data/computers";
import NavBar from "../components/NavBar";
const Computers = () => {
  return (
    <>
      <NavBar />
      <div>
        <div className="pageSection">
          {computerData.map((item, index) => {
            return (
              <div key={index}>
                <div className="pageImage">
                  <img src={item.image} alt="" />
                </div>
                <div className="prodModel">
                  ${item.company}, ${item.model}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Computers;
