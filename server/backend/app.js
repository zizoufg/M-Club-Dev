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
//import client  model 
const Client = require("./models/client");
//import adherent model 
const Adherent = require("./models/adherent");
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
//////////////////////////////////////////////Client/////////////////////////////////////////////////////

//business  logic : Req 1 : =>  get equipe
app.get("/client",(Req,res)=>{
    console.log("Here BL : Req 1 client");

    Client.find().then((docs) => {
        res.json ({clients : docs})

    });
   

});
//business  logic : Req 2 : =>  create client
app.post("/client",(Req,res)=>{
    console.log("Here BL : Req 2 client ");
    const x = Req.body;
    let clientObj = new Client(x);
    clientObj.save();



    Client.find().then((docs) => {
        res.json ({clients : docs})

    });
    

    


});
//business logic : req 3: => edit client by id 
app.put("/client/:id",(Req,res)=>{
    var x = Req.params.id ;
    console.log("Here BL : REQ to edit client by id ");
    Client.updateOne({_id: x},Req.body).then((response) =>{
        res.json({message : "updated with success"});
    });





   
    
   
})
//business logic : Rrq  4: => delete client by :id
app.delete("/client/:id",(Req,res)=>{
    console.log("HERE BL : REQ to delete client by id ");
    var x = Req.params.id;
    Client.deleteOne({_id: x }).then((response)=>{
        res.json({message : "deleted with succes "});
        
    });




  
})
//business logic : Rrq 5 : => get  client  by :id
app.get("/client/:id",(Req,res)=>{
    var id = Req.params.id;
    Client.findOne({_id :id}).then((doc)=>{
        res.json({client: doc});
        
    })
   
   
    
}) 






////////////////////////////////////////////////////Adherent///////////////////////////////////////////////

//business  logic : Req 1 : =>  get adherent
app.get("/adherent",(Req,res)=>{
    console.log("Here BL : Req 1 adherent");

    Adherent.find().then((docs) => {
        res.json ({adherents : docs})

    });
   

});
//business  logic : Req 2 : =>  create adherent
app.post("/adherent",(Req,res)=>{
    console.log("Here BL : Req 2 create adherent ");
    const x = Req.body;
    let adherentObj = new Adherent(x);
    adherentObj.save();



    Adherent.find().then((docs) => {
        res.json ({adherents : docs})

    });
    

    


});
//business logic : req 3: => edit adherent by id 
app.put("/adherent/:id",(Req,res)=>{
    var x = Req.params.id ;
    console.log("Here BL : REQ to edit adherent by id ");
    Adherent.updateOne({_id: x},Req.body).then((response) =>{
        res.json({message : "updated with success"});
    });





   
    
   
})
//business logic : Rrq  4: => delete adherent by :id
app.delete("/adherent/:id",(Req,res)=>{
    console.log("HERE BL : REQ to delete adherent by id ");
    var x = Req.params.id;
    Adherent.deleteOne({_id: x }).then((response)=>{
        res.json({message : "deleted with succes "});
        
    });




  
})
//business logic : Rrq 5 : => get  adherent  by :id
app.get("/adherent/:id",(Req,res)=>{
    var id = Req.params.id;
    Adherent.findOne({_id :id}).then((doc)=>{
        res.json({adherent: doc});
        
    })
   
   
    
}) 





// make app importable 
module.exports = app;