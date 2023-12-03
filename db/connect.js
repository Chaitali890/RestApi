const mongoose = require("mongoose");

//uri = "mongodb+srv://amangit123:LRH921iJPSAqGkcc@restapimango.l2hf7yj.mongodb.net/RestApiMango?retryWrites=true&w=majority";

const connectDB = (uri) => {
    console.log("connect db");
    return mongoose.connect(uri, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    });
};

module.exports = connectDB;