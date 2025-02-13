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
/**
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
**/

//Find all female vampires
/**
vampire.find({gender: 'f'}, (err, foundVampire) => {
  if(err) {
    console.log(err);
  } else {
    console.log(foundVampire);
  }
});
**/

//Victims over 500
/**
vampire.find({victims: {$gte: 500}}, (err, foundVampire) => {
  if(err) {
    console.log(err);
  } else {
    console.log(foundVampire);
  }
});
**/

//Less than or equal to 150
/**
vampire.find({victims:{$lte: 150}}, (err, foundVampire) => {
  if(err) {
    console.log(err);
  } else {
    console.log(foundVampire);
  }
});
**/

//Not equal to 210234
/**
vampire.find({victims: {$ne: 210234}}, (err, foundVampire) => {
  if(err) {
    console.log(err);
  } else {
    console.log(foundVampire);
  }
});
**/

//Find more than 150 and less than 500
/**
vampire.find({victims: {$gt:150, $lt:500}}, (err, foundVampire) => {
  if(err) {
    console.log(err);
  } else {
    console.log(foundVampire);
  }
});
**/

//Find with title property. Returns empty array.
/**
vampire.find({title: {$exists:true}}, (err, foundVampire) => {
  if(err) {
    console.log(err);
  } else {
    console.log(foundVampire);
  }
});
**/

//No victims property
/**
vampire.find({victims: {$exists:false}}, (err, foundVampire) => {
  if(err) {
    console.log(err);
  } else {
    console.log(foundVampire);
  }
});
**/

//Has title & no Victims
/**
vampire.find({title: {$exists:true}, victims: {$exists:false}}, (err, foundVampire) => {
  if(err) {
    console.log(err);
  } else {
    console.log(foundVampire);
  }
});
**/

//In one location or another
/**
vampire.find({ $or: [{location:'New York, New York, US'}, {location:'New Orleans, Louisiana, US'}]}, (err, foundVampire) => {
  if(err) {
    console.log(err);
  } else {
    console.log(foundVampire);
  }
});
**/
//Loves brooding or being tragic
/**
vampire.find({ $or: [{loves:'brooding'}, {loves:'being tragic'}]}, (err, foundVampire) => {
  if(err) {
    console.log(err);
  } else {
    console.log(foundVampire);
  }
});
**/

//More than 1000 victims or loves marshmellows
/**
vampire.find({ $or: [{victims:{$gt:1000}}, {loves:'marshmellows'}]}, (err, foundVampire) => {
  if(err) {
    console.log(err);
  } else {
    console.log(foundVampire);
  }
});
**/

//Red hair or green eyes
vampire.find({ $or: [{hair_color:'red'}, {eye_color:'green'}]}, (err, foundVampire) => {
  if(err) {
    console.log(err);
  } else {
    console.log(foundVampire);
  }
});
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
