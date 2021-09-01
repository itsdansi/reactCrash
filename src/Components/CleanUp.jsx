import React, { useEffect, useState } from "react";

const CleanUp = () => {
  const [curWidth, setWidth] = useState(window.screen.width);
  const [curHeight, setHeight] = useState(window.screen.height);

  const actualWidth = () => {
    console.log(window.innerWidth);
    setWidth(window.innerWidth);
  };
  const actualHeight = () => {
    console.log(window.innerHeight);
    setHeight(window.innerHeight);
  };
  useEffect(() => {
    window.addEventListener("resize", actualWidth);
    window.addEventListener("resize", actualHeight);

    return () => {
      window.removeEventListener("resize", actualWidth);
      window.removeEventListener("resize", actualHeight);
    };
  });

  return (
    <>
      <h1> This window's width is: </h1>
      <h3>
        {curWidth} x {curHeight}
      </h3>
    </>
  );
};

export default CleanUp;
