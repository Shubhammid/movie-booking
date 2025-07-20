import express from "express";
import { addShow, getNowPlayingMovies } from "../controllers/showController.js";

const showRouter = express.Router();

showRouter.get("/now-playing", getNowPlayingMovies);

export default showRouter;
