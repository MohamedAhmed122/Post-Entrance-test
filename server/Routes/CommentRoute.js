import express from "express";
import {CreateComments} from '../Controller/CommentController.js'

const router = express.Router();

router.route("/:id").post(CreateComments)



export default router;
