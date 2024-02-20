import mongoose, {Schema, model} from "mongoose";

const revSchema = new Schema({
    review: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    }, 
    seen: {
        type: Boolean,
        default: false
    }
}, {timestamps: true})

const review = mongoose.model("review", revSchema);

export default review;