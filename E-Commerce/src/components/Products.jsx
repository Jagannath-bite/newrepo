import React from "react";
import Mobiles from "./Mobiles";
import Computers from "./Computer";
import Watches from "./Watches";
import MenFashion from "./MenFashion";
import WomenDressing from "./WomenDressing";
import Furniture from "./Furniture";

const Products = () => {
  return (
    <div>
      <Mobiles />
      <Computers />
      <Watches />
      <MenFashion />
      <WomenDressing />
      <Furniture/>
    </div>
  );
};

export default Products;
