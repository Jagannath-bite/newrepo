import React from "react";
import { menData } from "../data/men";
const MenFashion = () => {
  const firstFiveImages = menData.slice(0, 5);
  return (
    <>
      <h2>Men and boy and this fashion</h2>
      <div className="proSection">
        {firstFiveImages.map((item) => {
          return (
            <div className="imgBox">
              <img className="proImage" src={item.image} alt="" />
            </div>
          );
        })}
      </div>
    </>
  );
};

export default MenFashion;
