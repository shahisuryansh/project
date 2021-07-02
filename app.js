const express = require('express') ;
const ejs = require('ejs') ;
const bodyParser = require('body-parser') ;
const nexmo = require('nexmo') ;
const socketio = require('socket.io') ;

const app = express() ;

//template engine setup
app.set('view engine' , 'html') ;
app.engine('html',ejs.renderFile)


//public folder setup
app.use(express.static(__dirname+'/public')) ;

//body parser middleware
app.use(bodyParser.json()) ;
app.use(bodyParser.urlencoded({extended:true}))


//index route
app.get('/',(req,res)=>{
    res.render(index)
})

//define a port
const port = 3000 ;

const server = app.listen(port,()=>{
    console.log('server is running')
})