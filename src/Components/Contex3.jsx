import React, { useContext } from "react";
import { BioData } from "./Contex1";

const Contex3 = ({ name }) => {
  const context = useContext(BioData);
  return <h1>My name is {context}</h1>;
};

export default Contex3;
