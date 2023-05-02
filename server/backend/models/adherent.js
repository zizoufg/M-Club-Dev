const mongoose = require('mongoose');
//adherent schema (attributes)
const adherentSchema = mongoose.Schema({
    name: String,
    email :String,
    tel : String,
    abonnement: String,
    duree: String
   

}, { versionKey: false }) ;
//model name : "client" (Pascalcase)
const adherent =mongoose.model("Adherent",adherentSchema);
module.exports = adherent ;