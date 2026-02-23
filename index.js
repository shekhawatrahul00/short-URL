 

 //connection b/w mongo

import mongoose from "mongoose";
import express from "express";
import {shortUrl , getoriginalUrl } from "./controller/shorturl.js";
 const app = express();
//  app.use(express.json())
app.use(express.urlencoded({extended:true}))
 
// server port 
const  port = 2000;

// mongoDB connected url
mongoose.connect("mongodb+srv://rahulsinghrahulsinghshekhawat_db_user:vRLzSbZBVcGio0CV@cluster0.sffdyp9.mongodb.net/").then(()=>{
   console.log("connected")
   
}).catch((e)=>{
   console.log(e)
})

// index.ejs file render
app.get('/', (req , res)=>{
   res.render("index.ejs", {shortUrl:null});
})

//server routing

app.post('/short', shortUrl)

// redirect to original url using short code :- dynamic routing

app.get('/:shortcode', getoriginalUrl)



// start server
 app.listen(port, () => {
    console.log('port is runing on port 2000');
 });

