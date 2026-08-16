const { connectionPool } = require("../config/database")

const getMovies = (req, res) =>{
  let queryText = "SELECT * FROM movies"
  connectionPool.query(queryText, (err, data)=>{
    if (err){
      console.log(err)
      res.json({data: null, status: "error"})
      return
    }
    res.json({data, status: "success"})
  })
}

const getMovieById = (req, res) =>{
  const {id} = req.params
  let queryText = `SELECT * FROM movies WHERE id=${id}`
  connectionPool.query(queryText, (err, data)=>{
    if (err){
      console.log(err)
      res.json({data: null, status: "error"})
      return
    }
    res.json({data: data[0], status: "success"})
  })
}


const createMovie = (req, res)=>{
  const {title, year} = req.body

  let queryText = `INSERT INTO movies (title, year) VALUES ('${title}', ${year})`

  connectionPool.query(queryText, (err, data)=>{
    if (err){
      console.log(err)
      res.json({data: null, status: "error"})
      return
    }
    res.json({data: null, status: "success"})
  })
}

const updateMovie = (req, res)=>{
  const {id} = req.params
  const {title, year} = req.body

  let queryText = `UPDATE movies SET title='${title}', year=${year}, updated_at=NOW() WHERE id=${id}`

  connectionPool.query(queryText, (err, data)=>{
    if (err){
      console.log(err)
      res.json({data: null, status: "error"})
      return
    }
    res.json({data: null, status: "success"})
  })
}

const deleteMovie = (req, res)=>{
  const {id} = req.params

  let queryText = `DELETE FROM movies WHERE id=${id}`

  connectionPool.query(queryText, (err, data)=>{
    if (err){
      console.log(err)
      res.json({data: null, status: "error"})
      return
    }
    res.json({data: null, status: "success"})
  })
}

module.exports = {
  getMovies,
  getMovieById,
  createMovie,
  updateMovie,
  deleteMovie
}