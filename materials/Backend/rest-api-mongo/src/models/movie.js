const mongoose = require('mongoose');

const movieSchema = new mongoose.Schema({
  title: String,
  year: Number
}, { timestamps: true, versionKey: false });

const Movie = mongoose.model('Movie', movieSchema);

module.exports ={
  Movie
}