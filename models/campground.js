const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const opts = { toJSON: { virtuals: true } };


const CampgroundSchema = new Schema({
    title: String,
    price: Number,
    images: [{
        url:String,
        filename: String
    }],
    geometry: {
        type: {
            type: String,
            enum: ['Point'],
            required: true
        },
        coordinates: {
            type: [Number],
            required: true
        }
    },
    description: String,
    location: String,
    author: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    },
    reviews: [
        {
            type: Schema.Types.ObjectId,
            ref: 'Review'
        }
    ]
}, opts)

CampgroundSchema.virtual('properties.popUpMarkup').get(function(){
    return `<a href='/campgrounds/${this._id}'>${this.title}</a>`
})

module.exports = mongoose.model('Campground', CampgroundSchema)