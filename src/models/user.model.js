import mongoose, {Schema} from "mongoose";

const userSchema = new Schema({
    username: {
        type: String,
        required: true,
        unique: true,
        lowercase: true,
        trim: true,
        index: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
        lowercase: true,
        trim: true
    },
    fullname: {
        type: String,
        required: true,
        trim: true,
        index: true
    },
    avatar: {
        type: String, //claoudinary url
        default: null
    },
    coverImage: {
        type: String, //claoudinary url
        default: null
},
 watchHistory: [
        {
            type: Schema.Types.ObjectId,
            ref: "Video"
        }
    ],
    password: {
        type: String,
        required: true
    },
    refreshToken: {
        type: String,
        default: null
    }
},
{
    timestamps: true
} 
    
);

export const User = mongoose.model("User", userSchema);