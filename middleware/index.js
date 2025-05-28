const express = require('express')
const app = express()
const port = 3000

//in-built middleware
//express.json() // Middleware to parse JSON bodies 

//router middleware
// isme jaise app ko replace krke "router" use krte h, app.use  -> Router.use


//error -handling middleware
// "err" extra aad hojata h
// app.use((err, req, res, next) => {



app.use(express.json()) ;

// loging ->  Auth -> Validate
//middleware user created
const loggingMiddleware = (req, res, next) => {
  console.log('logging kr rha hu', req.method, req.url);
  next(); // Call the next middleware or route handler
};
// app.use(loggingMiddleware);


const authMiddleware = (req, res, next) => {
    console.log('Authenticating user...');
    next();
};
// app.use(authMiddleware); 


const validateMiddleware = (req, res, next) => {    
    console.log('Validating user data...');
    next();
}
// app.use(validateMiddleware); 

// aise bhi collectively bhi kr sakte h
// applicattion level middleware h ye 
// app.use(loggingMiddleware);
// app.use(authMiddleware); 
// app.use(validateMiddleware);








const route = require('./routes/route.js');
// mounting the routes
app.use('/api', route);

// ->  /api/student
// ->  /api/admin









app.get('/', (req, res) => {
    console.log(req.body);
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
