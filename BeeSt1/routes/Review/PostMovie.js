const router=require("express").Router();
const reviewget=require("../../Models/Movie");

//post request
router.post("/add",async (req,res)=>{
   try{
   const reviewas=new reviewget(req.body);
   await newBook.save().then(()=>{
    res.status(200).json({message: " Rating Added Successfully "})
   });
   }catch(error){
    console.log(error);
   }
})

module.exports=router;
