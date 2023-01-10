const Store = require("../Models/storeModel")
const users = require("../Models/userModel")

const create_store = async(req,res)=>{
    try {
        let userId = req.body.userId
        const userrData= await users.findById({ _id : userId});
        // console.log(userrData)

        const latitude = req.body.latitude;
        const longitude = req.body.longitude;
        if(userrData){
            if( !latitude  || !longitude ){
                res.status(200).send({success:false,msg:'lat and long is not found!'});
            }
            else{
                const vendorData = await Store.findOne({userId:req.body.userId});
                if(vendorData){
                    res.status(200).send({success:false,msg:'This user is already created'})
                }
                else{
                    const store = new Store({
                        userId:req.body.userId,
                        title :req.body.title,
                        body : req.body.body,
                        created_by : req.body.created_by,
                        active : req.body.active,
                        geolocation:{
                            type:'Point',
                            coordinates:[parseFloat(req.body.longitude),parseFloat(req.body.latitude)]

                        }
                    });

                    const storeDate = await store.save();
                    res.status(200).send({success:false,msg:'Store Data',data:storeDate})
                }
            }
        }
        else{
            res.status(200).send({success:false,msg:'User Id does not exists.'});
        }

    } catch (error) {
        res.status(400).send(error.message);
    }
}

module.exports = { create_store }