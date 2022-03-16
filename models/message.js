const mongoose = require ("./connection");

const {Schema , model} =mongoose ;


const messageSchema = new Schema ({
    content:String,
    user1:{type:Schema.Types.ObjectId , ref: "User"},
    user2:{type:Schema.Types.ObjectId , ref: "User"},
    name1:String ,
    name2:String
},
{
    timestamps:true
})

const Message = model("Message",messageSchema);
module.exports = Message;