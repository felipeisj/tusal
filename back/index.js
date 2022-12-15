import express from 'express'
import User from '/home/felipe/Escritorio/proyectos/tusal/back/api/user.controller.js'

const app = express()


app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "http://localhost:3000"); // update to match the domain you will make the request from
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });

app.get('/', (req, res) => {
  res.status(200).send("Here it is")
})

app.post('/send', User.create)

app.get('/users', User.list)


app.listen(5000, () => console.log('La app está corriendo'))