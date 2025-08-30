import {request} from 'express';
import Candidate from '../models/Candidate.js'



//GETS
export async function getAllCandidates(req, res){
    try {

        const candidates = await Candidate.find({}).sort({position_sought: 1});
        res.status(200).json(candidates);
    
    } catch (error) {
        console.error("Error fetching candidates", error);
        res.status(500).json({message: "Error fetching candidates", error: error.message});
    }
}

export async function getAllPresCandidates(req, res){
    try {
        const candidates = await Candidate.find({ position_sought: "President" }).sort({ position_sought: 1 });
        res.status(200).json(candidates);
    
    } catch (error) {
        console.error("Error fetching candidates", error);
        res.status(500).json({message: "Error fetching candidates", error: error.message});
    }
}
export async function getPresCandidate(req, res){
    try {
        const candidate = await Candidate.findById(req.params.id);
        res.status(200).json(candidate);
    
    } catch (error) {
        console.error("Error fetching candidate", error);
        res.status(500).json({message: "Error fetching candidate", error: error.message});
    }
}
export async function getAllVicePresCandidates(req, res){
    try {
        res.status(200).json(
            {"test": "test"}
        )
    
    } catch (error) {
        console.error("Error fetching candidates", error);
        res.status(500).json({message: "Error fetching candidates", error: error.message});
    }
}
export async function getVicePresCandidate(req, res){
    try {
        res.status(200).json(
            {"test": "test"}
        )
    
    } catch (error) {
        console.error("Error fetching candidates", error);
        res.status(500).json({message: "Error fetching candidates", error: error.message});
    }
}

//POSTS


export async function addCandidate(req, res){
    try {

        const {
            first_name,
            last_name,
            middle_name,
            suffix,
            position_sought,
            election_year,
            political_party,
            running_mate,
            platform,
            education,
            political_experience,
            work_experience,
            accomplishments,
            legislation,
            projects
        } = req.body;

        const candidate = new Candidate({
            first_name,
            last_name,
            middle_name,
            suffix,
            position_sought,
            election_year,
            political_party,
            running_mate,
            platform,
            education,
            political_experience,
            work_experience,
            accomplishments,
            legislation,
            projects
        });

        const savedCandidate = await candidate.save();
        res.status(200).json(savedCandidate);
        console.log("Candidate Successfully saved");

    } catch (error) {
        console.error("Failed at addCandidate");
        res.status(500).json({message:"Failed to add candidate", error:error.message});
    }
}

//PUTS
export async function updateCandidate(req,res){
    try {
        // const {
        //     first_name,
        //     last_name,
        //     middle_name,
        //     suffix,
        //     position_sought,
        //     election_year,
        //     political_party,
        //     running_mate,
        //     platform,
        //     education,
        //     political_experience,
        //     work_experience,
        //     accomplishments,
        //     legislation,
        //     projects
        // } = req.body;

        // const updateCandidate = await Candidate.findByIdAndUpdate(req.params.id, {
        //     first_name,
        //     last_name,
        //     middle_name,
        //     suffix,
        //     position_sought,
        //     election_year,
        //     political_party,
        //     running_mate,
        //     platform,
        //     education,
        //     political_experience,
        //     work_experience,
        //     accomplishments,
        //     legislation,
        //     projects
        // }, {new: true});

    const updateCandidate = Candidate.findByIdAndUpdate(req.params.id, {$set: req.body}, {new: true, runValidators: true})
    if(!updateCandidate) {
            return res.status(404).json({message:"Candidate not found"})
    }
    else{
    console.log("Candidate updated successfully")
    };
    ;

    } catch (error) {
    console.error("Error in updateCandidate Controller", error);
    res.status(500).json({ message: "Internal Server Error", error: error.message});
    }
}


//DELETES

export async function deleteCandidate(req, res){
    try {
        const deleteCandidate = await Candidate.findByIdAndDelete(req.params.id);
        if(!deleteCandidate) return res.status(404).json({message:"Candidate not found"});
        res.status(200).json({ message: "Candidate deleted successfully!" });

    } catch (error) {
        console.error("Error in deleteCandidate", error);
        res.status(500).json({message: "Error fetching candidates", error: error.message});
    }
}

//REDIRECTS

export async function redirectURL(req, res){
    try {
        const candidate = await Candidate.findById(req.params.id);
        if (!candidate) {
            return res.status(404).json({ message: 'Candidate not found' });
        }
        const position = candidate.position_sought;

        if(position == "President"){
            let targetUrl = `http://localhost:5000/candidates/presidents/${req.params.id}`;

            res.redirect(targetUrl);
            console.log(`Redirected to: ${targetUrl}`);
        }
        

    } catch (error) {
        console.error('Error redirecting', error.message);
    }
}