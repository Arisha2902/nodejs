const express = require('express')
const app = express()
const port = 3000


//items.js ko bnane ka maksad ye hai ki ye file sirf item specific routes ko store karegi aur uske bad ye krenge
const items = require('./routes/item')  //ye item ko import kr rhe h

app.use('/api', items);  //load item into app

// -> /api/ -> item home page
// -> /api/items -> item post request


const birds = require('./routes/birds')  //ye birds ko import kr rhe h
app.use('/birds', birds)  //load birds into app


// app.get('/', (req, res) => {
//   res.send('Hello World!')
// })

// request ki khani

// get request
// app.get('/',(req, res) => {
//   // res.send('get request')
//   res.sendFile('./dummy.html', {root: __dirname});
// });

// app.post('/items', (req, res) => {
//     // res.send('post request')
//     res.json({x : 1, y: 2, z: 3});
//     });

// app.put('/items/:id', (req, res) => {
//     res.send('put request')
//     });

// app.delete('/items/:id', (req, res) => {
//     res.send('delete request')
//     });


//chaining
// app.get('/',(req, res) => {
//   res.sendFile('./dummy.html', {root: __dirname});
// }).post('/items', (req, res) => {
//     res.json({x : 1, y: 2, z: 3});
//     }).put('/items/:id', (req, res) => {
//     res.send('put request')
//     });




app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
