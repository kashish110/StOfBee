const router=require("express").Router();
const reviewget=require("../../Models/Movie");

//get request
router.get("./getMovie",async (req,res)=>{
   let books;
   try {
     books=await bookModel.find();
     res.status(200).json({ books }) 
   } catch (error) {
      console.log(error);
   }
})
module.exports=router;
