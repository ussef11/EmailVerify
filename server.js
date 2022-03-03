require("dotenv").config();
require("./config/database").connect();
const express = require("express");
const app = express();


const joi = require('joi');
app.use(express.json());

const Auth = require("./routes/auth/auth");
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});


//middleware
app.use(express.json());

app.use("/api/auth", Auth);

const myauth = require("./middleware/auth");

app.get("/welcome", myauth, (req, res) => {
  res.status(200).send("Welcome 🙌 ");
});

app.get("/",(req,res)=>{
    res.send("welcome")
})


app.post('/verify',(req,res)=>{
  
  const schema = {
      
      email:joi.string().email().required()
  }
  const result = joi.validate(req.body , schema);
  const age = 20;
  const valid = "Yes"
  const Staut = 50
  const Domain = ".com"
  //console.log("email ", req.body.email);
  if(req.body.email === "youssef@gmail.com")
  {
      // res.status(200).send(`Email:${req.body.email} | Valid:${valid} | Staut:${Staut} | Age :${age} |  Domain :${Domain}`)
     
  }else if(result.error)
  {
      // res.status(200).send(result.error.details[0].message)
    
    
  }
  else{
      res.status(200).send("Email Not Found In DataBase")
  }



  // const addemail = {
     
  //     email:req.body.email
  // }
  // Emails.push(addemail)
  // res.send(JSON.stringify(addemail))
})

app.listen(3000, () => {
  console.log("Search server is running!");
});