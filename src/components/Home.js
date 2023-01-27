import React, { Component } from "react";
import "../components/all.css";
import Header from "./Header";

export default class Home extends Component {
  componentDidMount() {
    fetch("http://localhost:8888/userData", {
      method: "POST",
      crossDomain: true,
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        "Access-Control-Allow-Origin": "*",
      },
      body: JSON.stringify({
        token: window.localStorage.getItem("token"),
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data, "userData");
      });
  }

  render() {
    return (
      <>
        <Header />
        <div className="Library-div">
          <div>
            <h1>Welcome to Library</h1>
          </div>
        </div>
      </>
    );
  }
}
