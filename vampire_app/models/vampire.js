const mongoose = require('mongoose');

const vampireSchema = new mongoose.Schema({
  name: {type: String, required: true, unique: true},
  hair_color: {type: String, default: "blonde"},
  eye_color: {type: String},
  dob: {type: Date},
  loves: [{type: String}],
  location: {type: String},
  gender: {type: String},
  victims: {type: Number, min: 1},
})

const Vampire = mongoose.model('Vampire', vampireSchema);

module.exports = Vampire;

//In this file, I have required mongoose. Then I have built a schema. This schema provides the framework for the vampire model that is then inserted in the database. All Vampire models will follow this schema. Then I turn the schema into a variable, Vampires. Notice how I attach the mongoose.model function to the vampireSchema, renaming it Vampire within the parameters. Then I export the schema as the variable Vampire.

//Within the schema, the requirements are validation. As is the type and unique properties.
