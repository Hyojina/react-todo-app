import logo from "./logo.svg";
import "./App.css";
import React, { useState } from "react";
import Lists from "./components/Lists";
import Form from "./components/Form";

export default function App() {
  const [todoData, setTodoData] = useState([
    { id: "1", title: "공부하기", completed: true },
    { id: "2", title: "청소하기", completed: false },
  ]);

  const [value, setValue] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    let newTodoData = {
      id: Date.now(),
      title: value,
      completed: false,
    };

    setTodoData((previous) => [...previous, newTodoData]);
    setValue("");
  };

  return (
    <div className="flex items-center justify-center w-screen h-screen bg-blue-100">
      <div className="w-full p-6 m-4 bg-white rounded shadow md:w-3/4 md:max-w-lg lg:w-3/4 lg:max-w-lg">
        <div className="flex justify-between mb-3">
          <h1>할 일 목록</h1>
        </div>
        {/* 이런식으로 useState를 각각 나누어서 내려줄 수 있음!!!! */}
        <Lists todoData={todoData} setTodoData={setTodoData} />
        <Form value={value} setValue={setValue} handleSubmit={handleSubmit} />
      </div>
    </div>
  );
}
