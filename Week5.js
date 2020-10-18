// Lucia Hoerr (lgh4gc)
// I used Will's to-do list code from the Github so that it would work correctly for this week.
import React, { useState } from "react";
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import Button from '@material-ui/core/Button';
import EmojiEmotionsIcon from '@material-ui/icons/EmojiEmotions';
import AssignmentTurnedInIcon from '@material-ui/icons/AssignmentTurnedIn';



export default function App() {
  const [items, setItems] = useState([]);
  const [currentTitle, setCurrentTitle] = useState("");
  const [currentDescription, setCurrentDescription] = useState("");
  const [currentDueDate, setCurrentDueDate] = useState("");

  const handleAdd = () => {
    if (currentTitle === "") alert("Please add a title");
    else if (currentDescription === "") alert("Please add a description");
    else if (currentDueDate === "") alert("Please add a due date");
    else {
      setItems([
        ...items,
        {
          title: currentTitle,
          description: currentDescription,
          dueDate: currentDueDate,
        },
      ]);
      setCurrentTitle("");
      setCurrentDescription("");
      setCurrentDueDate("");
    }
  };

  const TodoItem = ({ item }) => {
    const [checkedOff, setCheckedOff] = useState(false);

    const handleCheckOff = () => {
      setCheckedOff(!checkedOff);
    };

    const handleDelete = () => {
      setItems(items.filter((i) => i !== item));
    };

    return (
      <div
        style={{
          border: "1px solid black",
          textAlign: "left",
          padding: "20px",
          minWidth: "200px",
          display: "flex",
          flexDirection: "column",
          background: "antiquewhite",
        }}
      >
        {checkedOff ? (
          <h1>
            <strike>{item.title}</strike>
          </h1>
        ) : (
          <>
            <h1 style={{ margin: 0 }}>{item.title}</h1>
            <p style={{ margin: 5 }}>{item.description}</p>
            <p style={{ margin: 5 }}>Due: {item.dueDate}</p>
          </>
        )}
        ​
        <IconButton onClick={handleCheckOff} style={{ marginBottom: "10px" }}>
          <AssignmentTurnedInIcon color = "secondary"/>
        </IconButton>
        <IconButton onClick={handleDelete}> <DeleteIcon color = "secondary"/></IconButton>
      </div>
    );
  };
  return (
    <div
      style={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      <div style={{ display: "flex", flexDirection: "column", width: "300px" }}>
        <label style={{ marginBottom: "10px" }}>
          {"Title: "}
          <input
            value={currentTitle}
            onChange={(e) => setCurrentTitle(e.target.value)}
          />
        </label>
        <label style={{ marginBottom: "10px" }}>
          {"Description: "}
          <input
            value={currentDescription}
            onChange={(e) => setCurrentDescription(e.target.value)}
          />
        </label>
        <label style={{ marginBottom: "10px" }}>
          {"Due Date: "}
          <input
            value={currentDueDate}
            onChange={(e) => setCurrentDueDate(e.target.value)}
          />
        </label>
      </div>
      <EmojiEmotionsIcon 
      color = "primary"
      /> 
      <Button onClick={handleAdd} style={{ marginBottom: "20px" }} 
      color = "secondary"
      variant = "contained"
      >Add Todo Item
      </Button>

      
      ​
      {items.map((item) => (
        <TodoItem item={item} />
      ))}
    </div>
  );
}
