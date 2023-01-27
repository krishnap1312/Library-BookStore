import React from "react";
import Header from "./components/Header";
import {Route,Routes} from "react-router-dom";
import Home from "./components/Home";
import AddBook from "./components/AddBook";
import Books from "./components/Book/Books";
import About from "./components/About";
import BookDetail from "./components/Book/BookDetail";
import Login from "./components/login_component";
import SignUp from "./components/signup_component";

function App() {
  return (
    <>
    
    <main>
      <Routes>
        <Route path="/" element={<SignUp/>} exact/> {/*exact help to match the exact file*/}
        <Route path="/home" element={<Home/>} exact/> {/*exact help to match the exact file*/}
        <Route path="/sign-up" element={<SignUp/>} exact/> {/*exact help to match the exact file*/}
        <Route path="/login" element={<Login/>} exact/> {/*exact help to match the exact file*/}
        <Route path="/add" element={<AddBook/>} exact/> {/*exact help to match the exact file*/}
        <Route path="/books" element={<Books/>} exact/> {/*exact help to match the exact file*/}
        <Route path="/about" element={<About/>} exact/> {/*exact help to match the exact file*/}
        <Route path ="/books/:id" element={<BookDetail/>} exact/> {/**id name should be same as mentioned in BookDetail file*/}
      </Routes>
    </main>
    </>

    
  );
}

export default App;
