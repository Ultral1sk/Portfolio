require('dotenv').config()
const express     = require('express');
const app         = express();
const bodyParser  = require('body-parser');
const path        = require('path')
const cors        = require('cors');
const PORT        = process.env.PORT || 3001
const nodemailer  = require('nodemailer');
const xoauth2     = require('xoauth2')



// Body parser outter middleware of Express
app.use(bodyParser.json());
app.use(express.json());
app.use(express.urlencoded({extended : false}));
app.use(cors());

if(process.env.NODE_ENV === 'production'){
  //set static folder
  app.use(express.static('frontend/build'));

  app.get('*',(req, res) => {
    res.sendFile(path.join(__dirname, 'frontend', 'build', 'index.html'));
  });
}


app.post('/contact', (req, res) => {
  console.log('asd')
  let transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
    }
  });
  
  var mailOptions = {
      name : req.body.name,
      from : req.body.email,
      to : `theservicethe@gmail.com`,
      subject : 'nodemailer test',
      text : req.body.message
  }
  
  transporter.sendMail(mailOptions, function ( err, res ) {
    if( err ) {
      console.log(`Error`, err);
  
    } else{
      console.log(`email snt`, res)
    }
  })
  res.json({status:'sent'});
})


app.listen(PORT, () => console.log(`Portfolio APP server is listening the ${PORT} port`));









// app.post('/contact', function (req, res) {

//   const { name, email, message } = req.body




// nodemailer.createTestAccount((err , account) => {
//   const  htmlEmail = `
//     <h3>ContactDetails</h3>
//       <ul>
//           <li>Name : ${name}</li>
//           <li>Email : ${email}</li>
   
//           <h3>Message<h3>
//           <p>${message}</p>
//       </ul>
//   `

  

//   const mailOptions = {
//     name: ` ${name}`, // sender address
//     from: ` ${email}`, // sender address
//     to: `theservicethe@gmail.com`, // list of receivers
//     subject : `Contact request `,
//     text: `${message}`,
//     html: htmlEmail  // plain text body
//   };

  
// transporter.sendMail(mailOptions, function (err, info) {
//     if(err)
//       console.log(err)
//     else
//       console.log(info);
//       res.json({status : `success`})
//     });
// })      
// });
