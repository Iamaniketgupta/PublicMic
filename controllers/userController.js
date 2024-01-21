const user =require("../models/userModel");

exports.createUser = async(req,res)=>{
    try {

    await user.create(req.body)
    .then(res=>console.log(res))
    .catch(err =>{
        console.log(err);
    });
} catch (err) {
     console.log("There might be a server Issue");
}

}

