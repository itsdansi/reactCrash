import React, { useState } from "react";

function Time() {
  let time = new Date().toLocaleTimeString();

  const [curTime, getTime] = useState(time);

  const updateTime = () => {
    time = new Date().toLocaleTimeString();
    getTime(time);
  };

  setInterval(updateTime, 1000);

  return (
    <>
      <div style={{ color: "red", textAlign: "center", marginTop: "400px" }}>
        <h4>{curTime}</h4>
      </div>

      {/* <button onClick={updateTime}>Get time</button> */}
    </>
  );
}

export default Time;
