


import React, { Component, useState } from "react";
import '../App.css'
import Header from "./Header";
import LoginSignuoHeader from "./LoginSignupHeader";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    console.log(email, password);
    fetch("http://localhost:8888/login-user", {
      method: "POST",
      crossDomain: true,
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        "Access-Control-Allow-Origin": "*",
      },
      body: JSON.stringify({
        email,
        password,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data, "userRegister");
        if (data.status == "ok") {
          alert("login successfull");
          window.localStorage.setItem("token", data.data);
          window.localStorage.setItem("loggedIn", true);

          window.location.href = "./home";
        }
        else{
          alert("Invalid User")
        }
      });
  }

  return (<>
    <LoginSignuoHeader/>
    <form onSubmit={handleSubmit} className="Form-div">
      <h3 className="login-head">Sign In</h3>
    
    <div className="div-form">
      
      <div className="input-parts">
        <label className="input-head">Email address</label><br/>
        <input 
          type="email"
          className="input-headPass"
          placeholder="Enter email"
          onChange={(e) => setEmail(e.target.value)}
          />
      </div>

      <div className="input-parts">
        <label className="">Password</label><br/>
        <input
          type="password"
          className="input-headPass"
          placeholder="Enter password"
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>

      <div className="input-parts">
        <div className="custom-control custom-checkbox">
          <input
            type="checkbox"
            className="check-input"
            id="customCheck1"
            />
          <label className="checked" htmlFor="customCheck1"><br/>
            Remember me
          </label>
        </div>
      </div>

      <div className="submits">
        <button type="submit" className="Submits">
          Submit
        </button>
      </div>
      <p className="signup"><span className="NewUser">New User?</span>
        <a href="/sign-up" style={{color:"yellow"}}> Sign Up</a>
      </p>
    </div>
    </form>
    </>
  );
}