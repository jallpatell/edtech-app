const mongoose = require("mongoose")

const courseSchema = new mongoose.Schema({
    name: {type: String, required: true},
    courseDuration: {type:String, required: true},
    testIncluded: {type: Boolean, required: true},
});

const userSchema = new mongoose.Schema({
    userName: {type: String, required: true},
    UserId: {type: String, required: true, unique: true},
    password: { type: mongoose.Schema.Types.ObjectId, required: true},
    token: mongoose.Schema.Types.ObjectId,
})

const Course = mongoose.model('Course', courseSchema);
const User = mongoose.model('User', userSchema);
module.export = User;