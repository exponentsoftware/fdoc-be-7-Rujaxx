const express = require('express')
const dotenv = require('dotenv')
const cors = require('cors')
const db = require('./config/db')


//load env vars
dotenv.config({path : "./config/config.env"})

//routes
const tasks = require('./routes/task')

// db.sync({ force: true }).then(() => {
//     console.log("Drop and re-sync db.");
//   });


//test 
 db.authenticate().
 then(console.log('Connection has been established successfully.'))
 .catch (error => console.error('Unable to connect to the database:', error)) 

const app = express();

//body parser
app.use(express.json())
app.use(express.urlencoded({extended: false}));

// Enable CORS
app.use(cors());

app.use('/api/v1/tasks',tasks)

const port = process.env.PORT

app.use('/',(req,res,next)=>{
    res.send("Hola Amigos")
})

const server = app.listen(port,console.log(`server is listening on ${port}`))