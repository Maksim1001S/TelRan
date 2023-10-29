import mongoose from "mongoose";

const CategorySchema = new mongoose.Schema({
    _id: {
        type: Number,
        required: true,
        unique: true,
    },
    title: {
        type: String,
        required: true,
    },
    image: {
        type: String,
        required: true,
    }
})

const Category = mongoose.model('Category', CategorySchema);

export default Category;