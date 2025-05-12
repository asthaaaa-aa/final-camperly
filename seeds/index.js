const mongoose = require('mongoose');
const cities = require('./cities');
const {descriptors, places} = require('./seedhelpers');
const Campground = require('../models/campground');
const Review = require('../models/review');


mongoose.connect('mongodb://127.0.0.1:27017/yelp-camp')
.then(()=>{
    console.log("Connected to mongoose");
}).catch((err)=>{
    console.log("Could not connect to mongoose");
    console.log(err);
})



const sample = array => array[Math.floor(Math.random() * array.length)]

const seedDB = async ()=> {
    await Campground.deleteMany({});
    await Review.deleteMany({});
    for(let i=0 ; i<30 ; i++){
        let random30 = Math.floor(Math.random() * 30)
        let price = Math.floor(Math.random() * 20)+10
        let camp = new Campground({
            title: `${sample(descriptors)} ${sample(places)}`,
            location: `${cities[random30].city}, ${cities[random30].state}`,
            price: price ,
            author: '681f4de439130df63399da52',
            description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Hic ratione obcaecati cum provident minus id, itaque sint inventore, dolorem cumque reprehenderit ullam velit? Cum similique sint earum commodi ratione consequuntur.',
            geometry: {
                type: "Point",
                coordinates: [
                    cities[random30].longitude,
                    cities[random30].latitude,
                ]
            },
            images: [
                {
                  url: 'https://res.cloudinary.com/dbvlqytsm/image/upload/v1734162659/yelpcamp/uorm0pdsogsswdbcznyg.jpg',   
                  filename: 'yelpcamp/uorm0pdsogsswdbcznyg'
                },
                {
                  url: 'https://res.cloudinary.com/dbvlqytsm/image/upload/v1734162661/yelpcamp/egudcmjrgl8tw6dqma7s.jpg',   
                  filename: 'yelpcamp/egudcmjrgl8tw6dqma7s'
                }
              ]

        })
        await camp.save();
    }
    
}

seedDB().then(()=>{
    mongoose.connection.close()
})