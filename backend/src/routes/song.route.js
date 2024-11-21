import { Router } from "express";
import { getAllSongs } from "../controller/song.controller";

const router = Router();

router.get("/",protectRoute,requireAdmin,getAllSongs);
router.get("/featured",getFeaturedSongs);
router.get("/made-for-you",getMadeForYouSongs);
router.get("/trending",getTrendingSongs);

export default router;