import { prisma } from "../lib/prisma";

export const getMovies = async (req, res) =>{
  try{
    const movies = await prisma.Movie.findMany({})
    res.json({data: movies, status: "success"})
  }catch(err){
    return res.status(500).json({data: null, message: err})
  }
  res.json({data: null, status: "success"})
}

export const getMovieById = async (req, res) =>{
  const {id} = req.params
  try{
    const movie = await prisma.Movie.findUnique({where:{
      id: Number(id)
    }})
    delete movie.createdAt
    res.json({data: movie, status: "success"})
  }catch(err){
    return res.status(404).json({data: null, message: "data not found"})
  }
  res.json({data: null, status: "success"})
}


export const createMovie = async (req, res)=>{
  const {title, year} = req.body
  // destructure in es6

  
  try{
    const movie = await prisma.Movie.create({
      data: {
        title,
        year,
      },
    });
    res.json({data: movie, status: "success"})
  }catch(err){
    return res.status(500).json({data: null, message: err})
  }
  res.json({data: null, status: "success"})
}

export const updateMovie = async (req, res)=>{
  const {id} = req.params
  const {title, year} = req.body


  try{
    const movie = await prisma.Movie.update({
      data: {
        title,
        year,
      },
      where: {
        id: Number(id)
      }
    });
    res.json({data: movie, status: "success"})
  }catch(err){
    return res.status(500).json({data: null, message: err})
  }
  res.json({data: null, status: "success"})

}

export const deleteMovie = async (req, res)=>{
  const {id} = req.params

  try{
    await prisma.Movie.delete({where:{
      id: Number(id)
    }})
    res.json({data: null, status: "delete movie was success"})
  }catch(err){
    return res.status(500).json({data: null, message: err})
  }
  res.json({data: null, status: "success"})
}

