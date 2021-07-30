import React, { useState } from "react";

function CreateNote() {
  const [input, setInput] = useState({
    title: "",
    content: "",
  });

  function handelChange(event) {
    const { name, value } = event.target;

    setInput((prevInput) => {
      return {
        ...prevInput,
        [name]: value,
      };
    });
  }

  function handelClick(event) {
    event.preventDefault();
    console.log(input);
  }

  return (
    <div className="container">
      <h2>Create note</h2>
      <form action="">
        <div className="form-group">
          <input
            type="text"
            onChange={handelChange}
            placeholder="Note title"
            value={input.title}
            className="form-control"
          />
        </div>
        <div className="form-group">
          <textarea
            onChange={handelChange}
            name=""
            id=""
            placeholder="Note details"
            value={input.content}
            className="form-control"
          ></textarea>
        </div>
        <button onClick={handelClick} className="btn btn-large btn-info">
          Add Note
        </button>
      </form>
    </div>
  );
}
export default CreateNote;
