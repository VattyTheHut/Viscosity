 
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const nodemailer = require('nodemailer');
var port = 4000;
var app = express();

app.use(express.static(__dirname + '/public'))
app.use(express.static('assets'))
app.use(cors())
app.use(bodyParser.json())

// let transporter = nodemailer.createTransport({
//     service: 'efontian',
//     secure: false,
//     port: 25,
//     auth:{
//         user: 'corlon@efontian.com',
//         pass: pass
//     },
//     tis: {
//         rejectUnauthorized: false,
//     },
// });

// app.post('/postContact', (req, res, next) => {

//    let HelperOptions = {
//         from: req.body.email,
//         to: "corlon@efontiane.com",
//         subject: "...#",
//         text: req.body.message + "\n" +
//               "\n" + req.body.tel +
//                "\n" + req.body.fname + 
//                "\n" + req.body.lname +
//                "\n" + req.body.url
//     }

//     transporter.sendMail(HelperOptions, (error, info) => {
//         if(error){
//             console.log(error)
//         }
//         console.log('the message was sent!');
//         console.log(info);  
//     })
// });





app.listen(port, () => {
    console.log("resonating on port " + port)
})