require('dotenv').config()
const express     = require('express');
const app         = express();
const bodyParser  = require('body-parser');
const path        = require('path')
const cors        = require('cors');

const PORT        = process.env.PORT || 3001



// Body parser outter middleware of Express
app.use(bodyParser.json());
app.use(express.json());
app.use(express.urlencoded({extended : false}));
app.use(cors());

if(process.env.NODE_ENV === 'production'){
  //set static folder
  app.use(express.static('FRONTEND/build'));
}
app.get('*',(req, res) => {
  res.sendFile(path.resolve(__dirname, 'FRONTEND', 'build', 'index.html'));
});



app.listen(PORT, () => console.log(`Portfolio APP server is listening the ${PORT} port`));









// nodemailer.createTestAccount((err , account) => {
//   const  htmlEmail = `
//     <h3>ContactDetails</h3>
//       <ul>
//           <li>Name : ${req.body.name}</li>
//           <li>Email : ${req.body.email}</li>
   
//           <h3>Message<h3>
//           <p>${req.body.message}</p>
//       </ul>
//   `

//   let transporter = nodemailer.createTransport({
//     service: 'gmail',
//     auth: {
//         api_key: process.env.ADMIN_EMAIL_API_KEY,
//         user: process.env.EMAIL,
//         pass: process.env.PASSWORD
//     }
//   });

//   const mailOptions = {
//     name: ` ${req.body.name}`, // sender address
//     from: ` ${req.body.email}`, // sender address
//     to: `theservicethe@gmail.com`, // list of receivers
//     subject : `Contact request `,
//     text: `${req.body.message}`,
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