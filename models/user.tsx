import { Schema,model,models } from "mongoose";


const userSchema = new Schema({

    email:{
        type:String,
        required:[true,'Email is required'],
        unique:[true,'email already exists'],
       
    },

    username:{
        type:String,
        unique:[true,'Username already exists'],
        required:[true,'Username is required'],
    
        
    },

    image:{
        type:String,
       
    },
    })
  //if not in models.user then look for model('User',userSchema)
    const User= models.User || model('User',userSchema);
 
    export default User;