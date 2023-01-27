import React,{useEffect,useState} from "react";
import Book from "../Book/Book"
import axios from "axios";
import "./Book.css"
import Header from "../Header";
const URL = "http://localhost:8888/books"; //backend server number
const fetchHandler = async ()=>{
    return await axios.get(URL).then((res)=>res.data)
}


const Books = ()=>{
    const [books, setbooks] = useState();
    useEffect(() => {
        fetchHandler().then((data)=>setbooks(data));
            },[]);
            console.log(books);
    return (
    <><Header/>
    <div>
        <ul>
            {books && books.map((book,i)=>(
                <li key={i}>
                    <Book book= {book}/>
                </li>
            ))}
        </ul>
    </div></>
    
    )
}

export default Books;