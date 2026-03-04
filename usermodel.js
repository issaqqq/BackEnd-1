const mongoose = require('mongoose')

mongoose.connect(`mongodb://127.0.01:27017/mongopractice`)

const userSchema = mongoose.Schema({
    name: String,
    emial: String,
    username: String
})

mongoose.model("user", userSchema);
