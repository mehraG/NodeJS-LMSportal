const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({

    name:{
        type: String,
        required: true
    },
    email:{
        type: String,
        required: true
    },
    phone:{
        type: Number,
        required: true
    },
    gender:{
        type: String,
        required: true
    },
    category:{
        type: String,
        required: true
    },
    tech:{
        type: Array,
        required: true
    },
    filename:{
        type: String,
        required: false,
        default: ""
    },
    photo64:{
        type: String,
        required: false,
        default: ""
    }
})

module.exports = mongoose.model('User',userSchema)