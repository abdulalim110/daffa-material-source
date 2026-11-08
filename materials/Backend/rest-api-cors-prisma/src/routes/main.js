import express from "express"
import { createMovie, deleteMovie, getMovieById, getMovies, updateMovie } from "../controllers/movieController";
import { login, register } from "../controllers/authController";
import { authenticateJWT, getUserId } from "../middlewares/authMiddleware";

const router = express.Router();

router.get("/api/movies", getMovies)
router.get("/api/movies/:id", getMovieById)

router.post("/api/movies", authenticateJWT, getUserId, createMovie)
router.put("/api/movies/:id", authenticateJWT, getUserId, updateMovie)
router.delete("/api/movies/:id", authenticateJWT, deleteMovie)

router.post("/api/register", register)
router.post("/api/login", login)

export default router
