import logo from "./logo.svg";
import "./App.css";
import React, { Component } from "react";

export class App extends Component {
  // constructor라고 안써도 됨
  state = {
    todoData: [
      { id: "1", title: "공부하기", completed: true },
      { id: "2", title: "청소하기", completed: false },
    ],
    value: "",
  };

  btnStyle = {
    color: "#fff",
    border: "none",
    padding: "5px 9px",
    borderRadius: "50%",
    cursor: "pointer",
    float: "right",
  };

  // 동적으로 바꾸기 위해 listStyle은 함수로 생성
  listStyle = () => {
    return {
      padding: "10px",
      borderBottom: "1px #ccc dotted",
      textDecoration: "none",
    };
  };

  handleClick = (id) => {
    let newTodoData = this.state.todoData.filter((data) => data.id !== id);
    console.log("newTodoData", newTodoData);
    this.setState({ todoData: newTodoData });
  };

  render() {
    return (
      <div className="container">
        <div className="todoBlock">
          <div className="title">
            <h1>할 일 목록</h1>
          </div>
          {this.state.todoData.map((data) => (
            <div style={this.listStyle()} key={data.id}>
              <input type="checkbox" defaultChecked={data.completed} />{" "}
              {data.title}
              <button
                style={this.btnStyle}
                onClick={() => this.handleClick(data.id)}
              >
                X
              </button>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default App;
