const mongoose = require('mongoose');
//notification schema (attributes)
const notificationSchema = mongoose.Schema({
    name :String,
    email: String,
    tel : String,
    message : String
   

}, { versionKey: false }) ;
//model name : "Notification" (Pascalcase)
const notification =mongoose.model("Notification",notificationSchema);
module.exports = notification;