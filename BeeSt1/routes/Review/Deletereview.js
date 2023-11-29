const router=require("express").Router();
const movieRating=require("../../Models/Movie");
 
 // delete review
  router.delete("/deleteRating/:id",async (req,res)=>{
    const id=req.params.id;
    try {
       await movie.FindByIdAndDelete(id).then(()=>res.status(201).json({ message:"Deleted Successfully"}));
 
    } catch (error) {
       console.log(error);
    }
  })
  module.exports=router;