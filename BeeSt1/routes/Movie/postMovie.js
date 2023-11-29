const router=require("express").Router();
const Moviee=require("../../Models/Movie");

//post request
router.post("/add",async (req,res)=>{
   try{
   const newBook=new Moviee(req.body);
   await newBook.save().then(()=>{
    res.status(200).json({message: " Book Added Successfully "})
   });
   }catch(error){
    console.log(error);
   }
})
module.exports=router;
