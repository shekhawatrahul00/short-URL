
import { Url } from "../models/apiurl.js";
import shortid from "shortid"


export const shortUrl = async (req , res)=>{
   const longurl = req.body.longUrl;
   const shortcode = shortid.generate();

   const shortUrl = `http://localhost:2000/${shortcode}`


   // save to database

   const newurl = new Url({shortcode , longurl})
   await newurl.save();
   
   console.log("short saved = " , newurl)

   res.render("index.ejs" , {shortUrl})


} 



export const getoriginalUrl = async (req , res) =>{
    
    const shortcode = req.params.shortcode

    //find on db
const originalUrl = await Url.findOne({shortcode})

if(originalUrl){
    res.redirect(originalUrl.longurl);
}else{
    res.json({msg:"invalid"});
}
}