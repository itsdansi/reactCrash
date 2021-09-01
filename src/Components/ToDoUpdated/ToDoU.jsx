import React from "react";
import "./toDo.css";
import AddIcon from "@material-ui/icons/Add";
import DeleteForeverIcon from "@material-ui/icons/DeleteForever";
import EditIcon from "@material-ui/icons/Edit";
import { useState } from "react";
import { useEffect } from "react";

const getLocalItems = () => {
  const data = localStorage.getItem("data");
  if (data) {
    return JSON.parse(data);
  } else {
    return [];
  }
};

const ToDoU = () => {
  const [curItems, setItems] = useState("");
  const [curData, setData] = useState(getLocalItems());
  const [toggleSubmit, setToggleSubmit] = useState(true);
  const [isEdited, setIsEdited] = useState(null);

  const addData = () => {
    if (curItems) {
      const allInputData = {
        id: new Date().getTime().toString(),
        name: curItems,
      };
      setData([...curData, allInputData]);
      setItems("");
    } else if (curItems && !toggleSubmit) {
      setData(
        curData.map((result) => {
          if (result.id === isEdited) {
            return { ...result, name: curItems };
          }
          return result;
        })
      );
      setToggleSubmit(true);
      setItems("");
      setIsEdited(null);
    } else alert("Input is required!");
  };

  const deleteItem = (index) => {
    const updatedItems = curData.filter((curEle) => {
      return index !== curEle.id;
    });
    setData(updatedItems);
  };

  const deleteAllItems = () => {
    setData([]);
  };

  const editItem = (id) => {
    let editedItem = curData.find((data) => {
      return data.id === id;
    });
    console.log(editedItem);
    setToggleSubmit(false);
    setItems(editedItem.name);
    setIsEdited(id);
  };

  //   storing data items to the local storage
  useEffect(() => {
    localStorage.setItem("data", JSON.stringify(curData));
  }, [curData]);

  return (
    <>
      <div className="main-div">
        <div className="child-div">
          <figure>
            <img src="./../../images/book.jpeg" alt="logo_note" />
            <figcaption> Add your list here</figcaption>
          </figure>

          <div className="addItems">
            <input
              type="text"
              placeholder="Add item"
              value={curItems}
              onChange={(e) => setItems(e.target.value)}
            />

            {/* Checking whether user click edit buton or not */}
            <button>
              {toggleSubmit ? (
                <AddIcon style={{ color: "green" }} onClick={addData} />
              ) : (
                <EditIcon style={{ color: "green" }} onClick={addData} />
              )}
            </button>
          </div>

          {/* Showing each item in list */}
          <div className="showItems">
            {curData.map((curEle) => {
              return (
                <div className="eachItem" key={curEle.id}>
                  <h3>{curEle.name}</h3>

                  <button onClick={() => deleteItem(curEle.id)}>
                    <DeleteForeverIcon />
                  </button>
                  <button onClick={() => editItem(curEle.id)}>
                    <EditIcon />
                  </button>
                </div>
              );
            })}
          </div>

          {/* Button to clear all items at once */}

          <div className="showItems">
            <button
              className="btn effect04"
              data-sm-link-text="Remove all"
              onClick={deleteAllItems}
            >
              <span>Check list</span>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ToDoU;
