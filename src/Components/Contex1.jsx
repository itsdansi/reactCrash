import React, { createContext } from "react";
import Contex2 from "./Contex2";

const BioData = createContext();

const Contex1 = () => {
  return (
    <BioData.Provider value="Thapa technical">
      <Contex2 />
    </BioData.Provider>
  );
};

export default Contex1;
export { BioData };
