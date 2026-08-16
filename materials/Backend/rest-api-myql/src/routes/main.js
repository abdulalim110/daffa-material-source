const express = require('express');
const { getMovies, createMovie, updateMovie, deleteMovie, getMovieById } = require('../controllers/movieController');
const router = express.Router();

router.get("/api/movies", getMovies)
router.get("/api/movies/:id", getMovieById)

router.post("/api/movies", createMovie)
router.put("/api/movies/:id", updateMovie)
router.delete("/api/movies/:id", deleteMovie)

module.exports = router;