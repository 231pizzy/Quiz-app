import { Router } from "express";
const router = Router();
import {getQuestions,
     insertQuestions,
     deleteQuestions,
     getResult,
     storeResult,
     deleteResult} from '../controllers/controller.js'

// Questions Route
// router.get('/questions', getQuestions);
// router.post('/questions', insertQuestions)

// Chaining route
router.route('/questions')
.get(getQuestions)
.post(insertQuestions)
.delete(deleteQuestions)

router.route('/result')
.get(getResult)
.post(storeResult)
.delete(deleteResult)


export default router;