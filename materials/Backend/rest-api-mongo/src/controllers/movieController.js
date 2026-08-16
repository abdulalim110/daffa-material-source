const { Movie } = require("../models/movie")

const getMovies = async (req, res) =>{
  try{
    const movies = await Movie.find({})
    res.json({data: movies, status: "success"})
  }catch(err){
    return res.status(500).json({data: null, message: err})
  }
}

const getMovieById = async (req, res) =>{
  const {id} = req.params
    try{
    const movie = await Movie.findById(id).exec();
    delete movie.createdAt
    res.json({data: movie, status: "success"})
  }catch(err){
    return res.status(404).json({data: null, message: "data not found"})
  }
}


const createMovie = async (req, res)=>{
  const {title, year} = req.body
  // destructure in es6

  const movie = new Movie({title, year})

  try{
    await movie.save()
    res.json({data: movie, status: "success"})
  }catch(err){
    return res.status(500).json({data: null, message: err})
  }
}

const updateMovie = async (req, res)=>{
  const {id} = req.params
  const {title, year} = req.body

  const movie = await Movie.findById(id).exec();
  movie.title = title
  movie.year = year

  try{
    await movie.save()
    res.json({data: movie, status: "success"})
  }catch(err){
    return res.status(500).json({data: null, message: err})
  }
}

const deleteMovie = async (req, res)=>{
  const {id} = req.params

  try{
    await Movie.findByIdAndDelete(id)
    res.json({data: null, status: "delete movie was success"})
  }catch(err){
    return res.status(500).json({data: null, message: err})
  }
}

module.exports = {
  getMovies,
  getMovieById,
  createMovie,
  updateMovie,
  deleteMovie
}