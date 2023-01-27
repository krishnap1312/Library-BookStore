const express = require("express");
const mongoose = require("mongoose");
const router = require("./routes/book-routes");
mongoose.set("strictQuery", false); //to avoid deprecation messages.
const cors = require("cors");
const app = express();
require("../Backend/model/userDetails");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const { unstable_createMuiStrictModeTheme } = require("@mui/material");

const JWT_SECRET = "sadfbbaKBNbnasfbnjnbnJNBjkoasjdvjknIBIdf[]\]]]asidbfkj";   //it is some random chars using this we will decode password

//middlewares
app.use(express.json());
app.use(cors());
// app.use("/",(req,res,next)=>{
//     res.send("Connected successfull and server is running")
// })

app.use("/books", router);
//user login and registeration
const User = mongoose.model("UserInfo");
let oldUser;
app.post("/register", async (req, res) => {
  const { fname, lname, email, password } = req.body;
  const encryptedPassword = await bcrypt.hash(password, 10);
  try {
     oldUser = await User.findOne({ email });
    if (oldUser) {
     return res.send({ error: "User Exists" });
    }
    await User.create({ fname, lname, email, password:encryptedPassword });
    res.send({ status: "ok" });
  } catch (error) {
    console.log(error);
  }
});

// app.post("/loginuser",async (req,res)=>{
//     const{email,password} = req.body;
//     const user = await User.findOne({email});
//     if (!oldUser) {
//         return res.send({ error: "User Not Exists" });
//        }
//        if(await bcrypt.compare(password,user.password)){
//         const token = jwt.sign({email:user.email},JWT_SECRET);
//         if(res.status(201)){  // 201 means request has been successfull/
//             return res.json({status:"ok", data:token})
//         }
//         return res.json({error:"error"});
//        }
//        res.json({status:"error", error:"invalid Password"})
// })


app.post("/login-user", async (req, res) => {
  const { email, password } = req.body;

  const user = await User.findOne({ email });
  if (!user) {
    return res.json({ error: "User Not found" });
  }
  if (await bcrypt.compare(password, user.password)) {
    const token = jwt.sign({ email: user.email }, JWT_SECRET, {
      expiresIn: "15m",
    });

    if (res.status(201)) {
      return res.json({ status: "ok", data: token });
    } else {
      return res.json({ error: "error" });
    }
  }
  res.json({ status: "error", error: "InvAlid Password" });
});

app.post("/userData",async (req,res)=>{
    const{token} = req.body;
    try {
        const user = jwt.verify(token,JWT_SECRET);
        const userEmail = user.email;
        User.findOne({email: userEmail}).then((data)=>{
            res.send({status:"ok",data:data});
        })
    } catch (error) {
        res.send({status:"error",data:error})
    }
})


mongoose
  .connect(
    "mongodb+srv://admin:5QJgdVoxk4PmzWPV@cluster0.x8tcav0.mongodb.net/Store?retryWrites=true&w=majority"
  )
  .then(() => console.log("Connected to database"))
  .then(() => {
    app.listen(8888);
  })
  .catch((error) => console.log(error));

console.log("hii");
