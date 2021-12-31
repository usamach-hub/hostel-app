import express from 'express';
import { getApplications, createApplication } from '../controllers/hostelApplication.js';

const router = express.Router();

//get, post, put, delete
router.get("/", getApplications);

router.post("/", createApplication);

// router.delete("/:id" , deleteApplication );

// router.put("/:regNumber" , updateApplication);

export default router;
