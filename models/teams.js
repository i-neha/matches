const mongoose = require("mongoose")

const teamSchema = new mongoose.Schema({
    name:{type:String,
    required:true},
    players_involved:[String],
    wins_count:Number,
    loss_count:Number,
    upcoming_match:Date

}

);

const teams = new mongoose.model("Teams",teamSchema);