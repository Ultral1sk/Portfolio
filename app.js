require('dotenv').config()
const express     = require('express');
const bodyParser  = require('body-parser');
const nodemailer  = require('nodemailer')
const app         = express();
const PORT    = process.env.PORT || 3001
// Body parser outter middleware of Express
app.use(bodyParser.json());
app.use(express.json());
app.use(express.urlencoded({extended : false}));

app.post('/contact', ( req, res ) => {
  console.log(req.body);
  
    nodemailer.createTestAccount((err , account) => {
          const  htmlEmail = `
            <h3>ContactDetails</h3>
              <ul>
                  <li>Name : ${req.body.name}</li>
                  <li>Email : ${req.body.email}</li>
              </ul>
                  <h3>Message<h3>
                  <p>${req.body.message}</p>
          `

          let transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: process.env.EMAIL,
                pass: process.env.PASSWORD
            }
          });

          const mailOptions = {
            from: `${req.body.name}`, // sender address
            to: 'theservicethe@gmail.com', // list of receivers
            subject: `Connection request from email: ${req.body.email}`, // Subject line
            text: `${req.body.message}`,
            html: htmlEmail  // plain text body
          };
        
          
        transporter.sendMail(mailOptions, function (err, info) {
            if(err)
              console.log(err)
            else
              console.log(info);
              res.json({status : `success`})
            });
    })      



      
});



if(process.env.NODE_ENV === 'production')
app.listen(PORT, () => console.log(`Portfolio APP server is listening the ${PORT} port`));