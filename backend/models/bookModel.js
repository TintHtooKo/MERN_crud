const { default: mongoose } = require("mongoose");

const bookSchema = mongoose.Schema(
    {
        title:{
            type: String,
            require: true
        },
        author:{
            type: String,
            require: true
        },
        publishYear:{
            type: Number,
            require: true
        }
    },
    {
        timestamp: true
    }
)

const Book = mongoose.model('Cat', bookSchema);

module.exports={
    Book
}