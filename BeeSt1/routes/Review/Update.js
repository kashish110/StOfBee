const router=require("express").Router();
const movieRating=require("../../Models/Movie");
// update review 
router.put("/updateRating/:",async (req,res)=>{
    const id=req.params.id;
    const {bookname,description,author,image,price }=req.body;
    let rating;
    try {
       await movieRating.findByIdAndUpdate(id,{
          content,
          rating,
          author,
          image,
          createdAt,
       });
       await movieRating.save()
       .then(()=>res.send(200).json({message: "Data updated"}));
    } catch (error) {
       console.log(error);
    }
 }); 
 
  module.exports=router;