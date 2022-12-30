import logo from "./logo.svg";
import "./App.css";
import React, { Component } from "react";

export class App extends Component {
  todoData = [
    { id: "1", title: "공부하기", completed: true },
    { id: "2", title: "청소하기", completed: false },
  ];

  btnStyle = {
    color: "#fff",
    border: "none",
    padding: "5px 9px",
    borderRadius: "50%",
    cursor: "pointer",
    float: "right",
  };

  listStyle = () => {
    return {
      padding: "10px",
      borderBottom: "1px #ccc dotted",
      textDecoration: "none",
    };
  };

  render() {
    return (
      <div className="container">
        <div className="todoBlock">
          <div className="title">
            <h1>할 일 목록</h1>
          </div>
          {this.todoData.map((data) => (
            <div style={this.listStyle()} key={data.id}>
              <input type="checkbox" defaultChecked={data.completed} />{" "}
              {data.title}
              <button style={this.btnStyle}>X</button>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default App;
