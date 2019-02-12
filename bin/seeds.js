const Place = require('../models/Place')
const mongoose = require('mongoose')

const places = [
  {
    name: 'Butcher & Sons',
    category: 'Restaurant',
    stars: 5,
    address: {
      coordinates: [-99.1605, 19.4201],
    },
  },
  {
    name: 'Pulquería Insurgentes',
    category: 'Bar',
    stars: 5,
    address: {
      coordinates: [-99.1638, 19.4197],
    },
  },
  {
    name: 'Boicot Café',
    category: 'Coffee',
    stars: 5,
    address: {
      coordinates: [-99.1615, 19.4185],
    },
  },
]

mongoose.connect('mongodb://localhost/mapbox')

Place.create(places)
  .then(places => {
    console.log(`You created ${places.length} places successfully`)
    mongoose.connection.close()
  })
  .catch(err => {
    console.log(err)
  })
