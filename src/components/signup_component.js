import React, { Component } from "react";
import '../Signuo.css'
import LoginSignuoHeader from "./LoginSignupHeader";

export default class SignUp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fname: "",
      lname: "",
      email: "",
      password: "",
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleSubmit(e) {
    e.preventDefault();
    const { fname, lname, email, password } = this.state;
    console.log(fname, lname, email, password);
    fetch("http://localhost:8888/register", {
      method: "POST",
      crossDomain: true,
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        "Access-Control-Allow-Origin": "*",
      },
      body: JSON.stringify({
        fname,
        email,
        lname,
        password,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        // console.log(data, "userRegister");
        if(data.status=== "ok" || data.status=="ok"){
          alert("User Registered Successfully")
        }
      });
  }
  render() {
    return (<>
      <LoginSignuoHeader/>
        
      <form onSubmit={this.handleSubmit} className="Divs">
          <div className="SignUp-div">
        <h3 className="Signup-Head">Sign Up</h3>

        <div >
          <label className="signupHead">First name</label><br/>
          <input
            type="text"
            className="inputText"
            placeholder="First name"
            onChange={(e) => this.setState({ fname: e.target.value })}
          />
        </div>
        
        <div >
          <label className="signupHead">Last name</label><br/>
          <input
            type="text"
            className="inputText"
            placeholder="Last name"
            onChange={(e) => this.setState({ lname: e.target.value })}
            />
        </div>
        
        <div>
          <label className="signupHead">Email address</label><br/>
          <input
            type="email"
            className="inputText"
            placeholder="Enter email"
            onChange={(e) => this.setState({ email: e.target.value })}
            />
        </div>
        
        <div>
          <label className="signupHead">Password</label><br/>
          <input
            type="password"
            className="inputText"
            placeholder="Enter password"
            onChange={(e) => this.setState({ password: e.target.value })}
          />
        </div>
        
        <div>
          <button type="submit" className="buttonsSb">Submit
          </button>
        </div>
        <p className="AlreadyRegister">
          Already registered? <a href="/login" style={{color:"blue"}}>sign in</a>
        </p>
        </div>
      </form>
      </>
    
    );
  }
}