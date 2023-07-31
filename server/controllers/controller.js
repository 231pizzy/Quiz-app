import Questions from "../models/questionSchema.js";
import Results from "../models/resultSchema.js";
import questions, {answers} from '../database/data.js'

//   Insert Questions
export const getQuestions =async (req,res)=>{
    try {
     const q =await Questions.find();
     res.json(q)  
    } catch (error) {
        res.json({error})
    }
}

export const insertQuestions = async(req,res)=>{
    try {
       Questions.insertMany({questions: questions, answers: answers})
        res.json({msg:`Data saved successfully`})
       
    } catch (error) {
        res.json({error})
    }
}

export const deleteQuestions = async(req,res)=>{
    try {
       await Questions.deleteMany();
       res.json({msg: 'Questions deleted successfully'})
    } catch (error) {
        res.json({error})
    }
}

// get all results
export const getResult = async(req,res)=>{
    try {
        const r = await Results.find();
        res.json(r)
    } catch (error) {
        res.json({error})
    }
}

// store result
export const storeResult = async(req,res)=>{
    try {
       const {username, result, points, achieved} = req.body;

       if(!username && !result)throw new Error('Data not provided')

       Results.create({username, result, points, achieved})
       res.json({msg:`Result saved successfully`})
    } catch (error) {
        res.json({error})
    }
}

export const deleteResult = async(req,res)=>{
    try {
        await Results.deleteMany();
        res.json({msg: "Results Deleted"})
    } catch (error) {
      res.json({error})  
    }
}