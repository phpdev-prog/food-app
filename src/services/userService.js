const User = require("../models/user.model");
const bcrypt = require("bcrypt")

module.exports = {
    async createUser(userData) {
        try{
            let {fullName,email,password,role} = userData;
            const isUserExist = await User.findOne({email : email})

            if(isUserExist){
                throw new Error("User already exist")
            }

            password = bcrypt.hash(password , 8)

            const newUser = await  User.create({
                fullName,
                email,
                password,
                role
            })
            return newUser
        }
        catch(error){
            console.error(error)
        }
    },

    async getUserByEmail(email){
        try{
            const user = await User.findOne({email : email})
            if(!user){
                throw new Error("User not found")
            }
            return user
        }
        catch(error){
            console.error(error)
        }
    },

    async findUserById(userId){
        try{
           const user = await User.findById(userId).populate("addresses")
           if(!user){
               throw new Error("User not found")
           }
           return user
        }
        catch(error){
            console.error(error)
        }
    }
}