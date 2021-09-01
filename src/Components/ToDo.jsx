import React, { useState } from "react";

const ToDo = () => {
  const bioData = [
    {
      id: 0,
      myName: "Rajan",
      age: 24,
    },
    {
      id: 1,
      myName: "Dansi",
      age: 25,
    },
    {
      id: 2,
      myName: "Ramu",
      age: 26,
    },
  ];

  const [curVal, setVal] = useState(bioData);

  const deleteEle = (id) => {
    const newArray = curVal.filter((result) => {
      return result.id !== id;
    });
    setVal(newArray);
  };
  return (
    <>
      <div className="container">
        {curVal.map((curEle) => (
          <>
            <h1 className="heading" key={curEle.id}>
              I'm {curEle.myName}. My age is {curEle.age}
              <button onClick={() => deleteEle(curEle.id)}>Delete</button>
            </h1>
          </>
        ))}
      </div>
    </>
  );
};

export default ToDo;
