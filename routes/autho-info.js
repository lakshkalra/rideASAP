const router = require('express').Router();
var MongoClient = require('mongodb').MongoClient;
const Ticket = require('../model/booked_ticket');
const buses = require('../model/bus')
const User = require('../model/User')


var url = "mongodb://localhost:27017/";

router.post('/bus/information', async (req,res)=>{
     
    const bus = Number(req.body.bus_no)

    await buses.findOne({"number": bus}, (err, obj) => {
      if(err){
        res.json(err)
      }
      else{
        res.json(obj)
      }
    })  
})

router.post('/train/information', async(req,res)=>{
     
    const train = req.body.train_no

    await trains.findOne({"number": train}, (err, obj) => {
      if(err){
        res.json(err)
      }
      else{
        res.json(obj)
      }
    })  

    
})



module.exports = router;