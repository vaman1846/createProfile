const mongoose = require("mongoose")

const storeSchema = mongoose.Schema({
    userId:{ type:String , required: true },
    address:{ type:String, required: true },
    pin: { type:String, required: true },
    location:{ 
        type:{ type:String, required: true },
    coordinates:[]
}
});

storeSchema.index({location:"2dsphere"});
module.exports = mongoose.model("Store",storeSchema);