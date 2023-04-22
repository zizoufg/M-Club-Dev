const mongoose = require('mongoose');
//match schema (attributes)
const buvetteSchema = mongoose.Schema({
    image: String,
    name :String,
    description : String
   

}, { versionKey: false }) ;
//model name : "Buvette" (Pascalcase)
const buvette =mongoose.model("Buvette",buvetteSchema);
module.exports = buvette ;