const mongoose = require("mongoose")

const matchSchema = new mongoose.Schema({
    venue:{
        type:String,
        required:true
    },
    teams:[String],
    winner: String,
    player_of_match:String,
    date_of_match:Date

}

);

module.exports = mongoose.model("Matches",matchSchema);