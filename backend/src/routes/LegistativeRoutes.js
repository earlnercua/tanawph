import express from 'express'
import { addCandidate, deleteCandidate, getAllCandidates, getAllPresCandidates, getAllVicePresCandidates, getPresCandidate, getVicePresCandidate, redirectURL, updateCandidate } from '../controllers/legislativeControllers.js';


const lRouter = express.Router();




lRouter.get('/', getAllCandidates)

lRouter.get('/presidents', getAllPresCandidates)
lRouter.get('/presidents/:id', getPresCandidate);

lRouter.get('/vice-presidents/:id', getAllVicePresCandidates);
lRouter.get('/vice-presidents', getVicePresCandidate);

//TO DO: ROUTERS FOR EDIT CANDIDATE CONTROLLERS

lRouter.post('/presidents/add', addCandidate);

//PUTS
lRouter.put('/:id', updateCandidate);

// DELETES

lRouter.delete('/:id', deleteCandidate);

//REDIRECTS

lRouter.get('/:id', redirectURL);

export default lRouter;
