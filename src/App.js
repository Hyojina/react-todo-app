import logo from "./logo.svg";
import "./App.css";
import React, { Component } from "react";

export class App extends Component {
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
          <div style={this.listStyle()}>
            <input type="checkbox" defaultChecked={false} />
            공부하기
            <button style={this.btnStyle}>X</button>
          </div>
          <div style={this.listStyle()}>
            <input type="checkbox" defaultChecked={false} />
            청소하기
            <button style={this.btnStyle}>X</button>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
