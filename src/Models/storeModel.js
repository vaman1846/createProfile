const mongoose = require("mongoose")

const storeSchema = mongoose.Schema({
    userId:{ type:String , required: true },
    title: {
        type: String,
        required: true,
      },
      body: {
        type: String,
        required: true,
      },
      created_by: {
        type: String,
        required: true,
      },
      active: {
        type: String,
        require: true,
      },
    geolocation:{ 
        type:{ type:String,
             required: true },
    coordinates:[]
}
});

storeSchema.index({location:"2dsphere"});
module.exports = mongoose.model("Store",storeSchema);