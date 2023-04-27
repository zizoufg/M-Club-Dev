// import express module 
const express = require("express");
//import body-parser module 
const bodyParser = require("body-parser");
//import mongoose module 
const mongoose = require("mongoose");
//import buvette model 
const Buvette = require("./models/buvette");
//import equipe model 
const Equipe = require("./models/equipe");
//mclubDB : database name 
mongoose.connect('mongodb://localhost:27017/mclubDB');
//CORS
const cors = require('cors');




// create express application 
const app = express();

// Enable CORS
app.use(cors());

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    next();
  });
//configure APP with bodyparser to send response => JSON 
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

////////////////////////////buvette/////////////////////////////////////////////////



//business  logic : Req 1 : =>  get buvette
app.get("/buvette",(Req,res)=>{
    console.log("Here BL : Req 1");

    Buvette.find().then((docs) => {
        res.json ({buvettes : docs})

    });
    // res.json({buvette : buvetteTab});

});
//business  logic : Req 2 : =>  create buvette
app.post("/buvette",(Req,res)=>{
    console.log("Here BL : Req 2");
    const x = Req.body;
    let buvetteObj = new Buvette(x);
    buvetteObj.save();



    Buvette.find().then((docs) => {
        res.json ({buvettes : docs})

    });
    

    


});
//business logic : req 3: => edit buvette by id 
app.put("/buvette/:id",(Req,res)=>{
    var x = Req.params.id ;
    console.log("Here BL : REQ to edit buvette by id ");
    Buvette.updateOne({_id: x},Req.body).then((response) =>{
        res.json({message : "updated with success"});
    });





   
    
    // for (let i = 0; i < buvetteTab.length; i++) {
    //     if (x ==buvetteTab[i].id) {
            
    //        buvetteTab[i]= Req.body ;
    //        res.json({message : "edited with success"});
    //        break;

            
    //     }
        
    // }
})
//business logic : Rrq  4: => delete buvette by :id
app.delete("/buvette/:id",(Req,res)=>{
    console.log("HERE BL : REQ to delete buvette by id ");
    var x = Req.params.id;
    Buvette.deleteOne({_id: x }).then((response)=>{
        res.json({message : "deleted with succes "});
        
    });




    // for (let i = 0; i < buvetteTab.length; i++) {
    //     if(x == buvetteTab[i].id) {
    //         buvetteTab.splice(i,1);
    //         res.json({message : `buvette N° ${i+1} deleted with succes `});
    //         break;
    //     }
        
        
    // }
})
//business logic : Rrq 5 : => get  buvette  by :id
app.get("/buvette/:id",(Req,res)=>{
    var id = Req.params.id;
    Buvette.findOne({_id :id}).then((doc)=>{
        res.json({buvette: doc});
        
    })
   
   
    // for (let i = 0; i < buvetteTab.length; i++) {
    //     if (buvetteTab[i].id== id) {
    //         res.json({buvette : buvetteTab[i]});
    //         break;
            
    //     }

        
    // }
}) 








///////////////////////////////equipe//////////////////////////////////////////////////////
//business  logic : Req 1 : =>  get equipe
app.get("/equipe",(Req,res)=>{
    console.log("Here BL : Req 1 equipe");

    Equipe.find().then((docs) => {
        res.json ({equipes : docs})

    });
   

});
//business  logic : Req 2 : =>  create equipe
app.post("/equipe",(Req,res)=>{
    console.log("Here BL : Req 2 equipe ");
    const x = Req.body;
    let equipeObj = new Equipe(x);
    equipeObj.save();



    Equipe.find().then((docs) => {
        res.json ({equipes : docs})

    });
    

    


});
//business logic : req 3: => edit equipe by id 
app.put("/equipe/:id",(Req,res)=>{
    var x = Req.params.id ;
    console.log("Here BL : REQ to edit equipe by id ");
    Equipe.updateOne({_id: x},Req.body).then((response) =>{
        res.json({message : "updated with success"});
    });





   
    
   
})
//business logic : Rrq  4: => delete equipe by :id
app.delete("/equipe/:id",(Req,res)=>{
    console.log("HERE BL : REQ to delete equipe by id ");
    var x = Req.params.id;
    Equipe.deleteOne({_id: x }).then((response)=>{
        res.json({message : "deleted with succes "});
        
    });




  
})
//business logic : Rrq 5 : => get  equipe  by :id
app.get("/equipe/:id",(Req,res)=>{
    var id = Req.params.id;
    Equipe.findOne({_id :id}).then((doc)=>{
        res.json({equipe: doc});
        
    })
   
   
    
}) 



// make app importable 
module.exports = app;