import logo from "./logo.svg";
import "./App.css";
import React, { useState } from "react";
import Lists from "./components/Lists";

export default function App() {
  const [todoData, setTodoData] = useState([
    { id: "1", title: "공부하기", completed: true },
    { id: "2", title: "청소하기", completed: false },
  ]);
  const [value, setValue] = useState("");

  const handleChange = (e) => {
    setValue(e.target.value);
  };

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
    <div className="container">
      <div className="todoBlock">
        <div className="title">
          <h1>할 일 목록</h1>
        </div>
        {/* 이런식으로 useState를 각각 나누어서 내려줄 수 있음!!!! */}
        <Lists todoData={todoData} setTodoData={setTodoData} />
        <form style={{ display: "flex" }} onSubmit={(e) => handleSubmit(e)}>
          <input
            type="text"
            style={{ flex: "10", padding: "5px" }}
            placeholder="해야할 일을 입력하세요."
            value={value}
            onChange={(e) => handleChange(e)}
          />
          <input
            type="submit"
            value="입력"
            className="btn"
            style={{ flex: "1" }}
          />
        </form>
      </div>
    </div>
  );
}
