const nodemailer = require('nodemailer');


let transporter = nodemailer.createTransport({
    service: 'efontian',
    secure: false,
    port: 25,
    auth:{
        user: 'corlon@efontian.com',
        pass: "pass"
    },
    tis: {
        rejectUnauthorized: false,
    },
});


module.exports =  {

    Contactemail: (req, res, next) =>{
        app.post('/postContact', (req, res, next) => {

            let HelperOptions = {
                 from: req.body.email,
                 to: "corlon@efontiane.com",
                 subject: "...#",
                 text: req.body.message + "\n" +
                       "\n" + req.body.tel +
                        "\n" + req.body.fname + 
                        "\n" + req.body.lname +
                        "\n" + req.body.url
             }
         
             transporter.sendMail(HelperOptions, (error, info) => {
                 if(error){
                     console.log(error)
                 }
                 console.log('the message was sent!');
                 console.log(info);  
             })
         });


    },

}

