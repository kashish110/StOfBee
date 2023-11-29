const mongoose=require("mongoose");

const SchemaFields=new mongoose.Schema({
    content :{type: String, required: true},
    rating :{type: Number, required: true},
    author :{type: String, required: true},
    createdAt :{type: Number, required: true}
});
const movieSchema=new mongoose.Schema({
    title: {type:String, required:true},
    description: {type:String,required:true},
    genre:{type:String,required:true},
    releaseYear:{type:Number,required:true}

})

module.exports=new mongoose.model("Movies,Reviews",Schemafields,movieSchema);