import logo from "./logo.svg";
import "./App.css";
import React, { useState } from "react";
import Lists from "./components/Lists";
import Form from "./components/Form";

export default function App() {
  const initialTodoData = localStorage.getItem("todoData")
    ? JSON.parse(localStorage.getItem("todoData"))
    : [];

  const [todoData, setTodoData] = useState(initialTodoData);
  const [value, setValue] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const newTodoData = {
      id: Date.now(),
      title: value,
      completed: false,
    };

    setTodoData((previous) => [...previous, newTodoData]);

    localStorage.setItem(
      "todoData",
      JSON.stringify([...todoData, newTodoData])
    );

    setValue("");
  };

  const handleRemoveClick = () => {
    setTodoData([]);
    localStorage.setItem("todoData", JSON.stringify([]));
  };

  return (
    <div className="flex items-center justify-center w-screen h-screen bg-blue-100">
      <div className="w-full p-6 m-4 bg-white rounded shadow md:w-3/4 md:max-w-lg lg:w-3/4 lg:max-w-lg">
        <div className="flex justify-between mb-3">
          <h1>할 일 목록</h1>
          <button onClick={handleRemoveClick}>Delete All</button>
        </div>
        {/* 이런식으로 useState를 각각 나누어서 내려줄 수 있음!!!! */}
        <Lists todoData={todoData} setTodoData={setTodoData} />
        <Form value={value} setValue={setValue} handleSubmit={handleSubmit} />
      </div>
    </div>
  );
}
