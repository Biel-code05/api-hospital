const {Call} = require('../models/calls.js')

async function createCall(req, res){
    try{
        const {id, name, hospital } = req.body;
        if(hospital.roomNumber < 1){
            res.status(400).json({message: 'O número do quarto deve ser maior ou igual a 1'})
        }
        const newCall = new Call({id, name, hospital});
        await newCall.save();
        res.status(201).json({message: 'Chamado criado com sucesso'})
    }
    catch(error){
        console.log('erro ao criar: ', error)
        res.status(500).json({message: error})
    }
}

async function getCalls(req, res){
    try{
        const projection = {
            hospital:0,
            id: 0,
            _id:0,
            __v:0
        }
        const calls = await Call.find({}, projection);
        res.status(200).json(calls);
    }
    catch(error){
        console.log(error);
        res.status(500).json({message: error});
    }
}

module.exports = {createCall, getCalls}