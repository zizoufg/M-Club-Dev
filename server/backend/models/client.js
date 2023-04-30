const mongoose = require('mongoose');
//client schema (attributes)
const clientSchema = mongoose.Schema({
    name: String,
    email :String,
    tel : String,
    abonnement: String,
    duree: String
   

}, { versionKey: false }) ;
//model name : "client" (Pascalcase)
const client =mongoose.model("Client",clientSchema);
module.exports = client ;