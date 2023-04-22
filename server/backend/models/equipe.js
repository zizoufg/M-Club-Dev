const mongoose = require('mongoose');
//equipe schema (attributes)
const equipeSchema = mongoose.Schema({
    image: String,
    name :String,
    profession : String,
    tel : String
   

}, { versionKey: false }) ;
//model name : "Buvette" (Pascalcase)
const equipe =mongoose.model("Equipe",equipeSchema);
module.exports = equipe ;