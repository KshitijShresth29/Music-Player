const mongoose = require("mongoose");
const Song = new mongoose.Schema({
    name:{
        type: String,
        required: true,

    },
    thumbnail:{
        type: String,
        required: false,
    },
    track :{
        type: String,
        required: true,
    },
    artist :{
        type: mongoose.Types.ObjectID,
        ref: "user",
        required: true,
    },

   
});
const SongModel = mongoose.model("Song", Song);
module.exports = SongModel;
