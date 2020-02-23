const express     = require('express');
const bodyParser  = require('body-parser');
const nodemailer  = require('nodemailer')
const app         = express();

// Body parser outter middleware of Express
app.use(bodyParser.json());
app.use(express.json());
app.use(express.urlencoded({extended : true}));

app.post('/api/form', ( req, res ) => {
      res.json({ status : 200, message : 'Hello from Home route'})
      console.log(req.body);
      
});



const PORT    = process.env.PORT || 3001
app.listen(PORT, () => console.log(`Portfolio APP server is listening the ${PORT} port`));