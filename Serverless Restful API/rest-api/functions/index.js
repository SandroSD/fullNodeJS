const functions = require('firebase-functions');
const express = require('express');
const mongoose = require('mongoose');

const cors = require('cors') //necesito bajar a node 8, o verlo en el 10.

const mongooseConfig = { useNewUrlParser: true }
mongoose.connect('mongodb://SandroSD:s4ndr0i99i@ds129153.mlab.com:29153/rest-api', mongooseConfig);

const app = express();

const Pets = require('./Pets');

const createServer = () => {
    app.use(cors({ origin:true }))
    app.get('/pets', async(req, res)=>{
        /*const pet = new Pets({
            nombre: "Fluffy!",
            tipo: "Dragón",
            descripcion:"Ingreso por dolor de pancita"
        })
        pet.save();
        res.send('Se guardaron los datos');
        */
        //Creo 2 mascotas más

        //Video 19, Sección 4
        const result = await Pets.find({}).exec()
        res.send(result);
    })

    app.post('/pets', async (req, res)=>{
        const { body } = req //nombre, tipo y descripcion

        const pet = new Pets(body)
        await pet.save()
        res.sendStatus(204)
        //creamos mascota con postman
    })

    app.get('/pets/:id/daralta', async (req, res)=>{
        const { id } = req.params
        await Pets.deleteOne({ _id:id }) //mongo guarda los atributos con un _ adelante
        res.send('Dar el alta')
    })

    return app;
}

exports.api = functions.https.onRequest(createServer());