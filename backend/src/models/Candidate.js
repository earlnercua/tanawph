import mongoose from 'mongoose';

const candidateSchema = new mongoose.Schema({
    first_name: {type: String, required: true},
    last_name: {type: String, required: true},
    middle_name: {type: String},
    suffix: {type: String},

    position_sought: {type:String, required: true},
    election_year: {type:Number, required: true},

    political_party: {type: String},
    running_mate: {type:String},
    platform: {type: String},

    education: {type:String},

    political_experience:[{ 
        position: {type:String}, 
        start: {type:Number}, 
        end: {type:Number},
        _id: false
    }],

    work_experience:[{ 
        position: {type:String}, 
        start: {type:Number}, 
        end:{type:Number},
        _id: false }],

    accomplishments:[{
        position:{type: String}, 
        year:{type:Number},
        _id: false,
    }],
        
    legislation: [{
        code: {type:String}, 
        title: {type: String}, 
        contribution: { type: String, enum: ['Authored', 'Supported']},
        _id: false
    }],

    projects: [{
        title:{type: String}, 
        status:{type: String, enum:['Completed', 'Ongoing', 'Incomplete']},
        _id: false
    }]

})

const Candidate = mongoose.model("Candidate", candidateSchema);

export default Candidate;