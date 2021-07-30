import React from "react";
import "./index.css";

function Greeting() {
  let currHour = new Date().getHours();
  //    console.log(currDate);
  let greeting = "";
  const cssStyle = {};

  if (currHour < 12) {
    greeting = "Good morning!";
    cssStyle.color = "green";
  } else if (currHour >= 12 && currHour < 18) {
    greeting = "Good afternoon!";
    cssStyle.color = "yellow";
  } else if (currHour >= 18 && currHour < 20) {
    greeting = "Good evening ";
    cssStyle.color = "grey";
  } else {
    greeting = "Good night";
    cssStyle.color = "black";
  }

  return (
    <>
      <h1>
        {" "}
        Hello sir, <span style={cssStyle}> {greeting} </span>
      </h1>
    </>
  );
}

export default Greeting;
