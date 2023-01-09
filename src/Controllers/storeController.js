const Store = require("../Models/storeModel")
const User = require("../Models/userModel")

const create_store = async(req,res)=>{
    try {
        
        const userrData= await User.findOne({_id:req.body.userId});

        if(userrData){
            if(!req.body.latitude || !req.body.userId){
                res.status(200).send({success:false,msg:'lat and long is not found!'});
            }
            else{
                const vendorData = await Store.findOne({userId:req.body.userId});
                if(vendorData){
                    res.status(200).send({success:false,msg:'This vendor is already created'})
                }
                else{
                    const store = new Store({
                        userId:req.body.userId,
                        geolocation:{
                            type:"Point",
                            coordinates:[parseFloat(req.body.longitude),parseFloat(req.body.latitude)]

                        }
                    });

                    const storeDate = await store.save();
                    res.status(200).send({success:false,msg:'Store Data',data:storeDate})
                }
            }
        }
        else{
            res.status(200).send({success:false,msg:'Vendor Id does not exists.'});
        }

    } catch (error) {
        res.status(400).send(error.message);
    }
}

module.exports = { create_store }