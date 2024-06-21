const mongoose = require('mongoose');

async function connectDb(){
    try{
        const connection = await mongoose.connect('mongodb+srv://gabrielbatistao:Biel-04082005@api-hospital.hkai0hk.mongodb.net/?retryWrites=true&w=majority&appName=API-Hospital')
        console.log('Connection successfuly')
        return connection;

    }
    catch(error){
        console.error('Error conecting to MongoDB: ', error);
        throw error;

    }

}
module.exports = {connectDb}