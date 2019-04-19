const express = require('express');
const app = express();
const methodOverride = require('method-override');
const bodyParser = require('body-parser');
const vampire = require('./models/vampire');
const vampireData = require('./populateVampires');
const mongoose = require('mongoose');

app.use(methodOverride('_method'));

app.use(bodyParser.urlencoded({extended:false}));

require('./db/db');

//Added the vampire data to the vampire collection.
/**
vampire.collection.insertMany(vampireData, (err, data) => {
  console.log("Added vampire data!!!");
  mongoose.connection.close();
})
**/

vampire.create({
  name: "Brewhaha the Vampster",
  hair_color: 'green',
  eye_color: 'purple',
  loves: ['blood', 'more blood'],
  location: 'Cancun',
  gender: 'm',
  victims: 100,
},
  {
    name: 'Glamping Queen Brazilionaire Karen',
    hair_color: 'blondish',
    eye_color: 'violet',
    loves: ['glamping', 'biting necks'],
    location: 'Rio de Janeiro',
    gender: 'f',
    victims: 43,
  },
  {
    name: 'Groans of the Damned or just Bob',
    hair_color: 'bald',
    eye_color: 'brown',
    loves: ['basements', 'dried blood', 'buckets of blood'],
    location: 'below your feet',
    gender: 'm',
    victims: 428,
  },
  {
    name: 'Pritzle Golunahnah',
    hair_color: 'red',
    eye_color: 'blue',
    loves: ['blood', 'long walks by the morgue'],
    location: 'behind you',
    gender: 'f',
    victims: 294,
  }, (err, createdVampire) => {
    if(err) {
      console.log(err);
    } else {
      console.log(createdVampire);
    }
  }
)

/////////////////////////////////////////////////
//Write your answers to add, query, update, remove, and Hungry for More below.

// Note: Remember to close your connection after you add, update, remove from your database
/////////////////////////////////////////////////
/////////////////////////////////////////////////
// INSERT USING MONGOOSE
// ### Add the vampire data that we gave you

// ### Add some new vampire data

/////////////////////////////////////////////////
// ## QUERYING
/////////////////////////////////////////////////
// ### Select by comparison

/////////////////////////////////////////////////
// ### Select by exists or does not exist

/////////////////////////////////////////////////
// ### Select with OR

/////////////////////////////////////////////////
//### Select objects that match one of several values

/////////////////////////////////////////////////
//### Negative Selection

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// ## REPLACE

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// ## UPDATE

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// ## REMOVE

/////////////////////////////////////////////////
/////////////////////////////////////////////////

// ## HUNGRY FOR MORE
/////////////////////////////////////////////////
//## Select objects that match one of several values

/////////////////////////////////////////////////
//## Negative Selection

/////////////////////////////////////////////////
