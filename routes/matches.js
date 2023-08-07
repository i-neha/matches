const express = require("express");
const router = express.Router({mergeParams:true});
const Match = require("../models/matches");


router.get("/",async(req,res,next)=>{
    const matches = await Match.find({});
    res.send(matches);
});

router.get("/:date",async(req,res,next)=>{
    const match = await Match.find({date_of_match:req.params.date}).exec();
    res.send(match);
});

router.get("/:id",async(req,res,next)=>{
    const match = await Match.findById(req.params.id);
    res.send(match);
});



router.post("/",async(req,res,next)=>{
const {venue,teams,winner,player_of_match,date_of_match} = req.body;
    const match = new Match({venue,teams,winner,player_of_match,date_of_match});
    await match.save();

    res.send(match);

});

module.exports = router;