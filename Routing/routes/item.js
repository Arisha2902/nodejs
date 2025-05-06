// ye file sar3 item sprcific routes ko store karegi
const express = require('express')
const router = express.Router()


router.get('/',(req, res) => {
    res.send('get request')
    // res.sendFile('../dummy.html', {root: __dirname});
  });
  
  router.post('/items', (req, res) => {
      // res.send('post request')
      res.json({x : 1, y: 2, z: 3});
      });
  
  router.put('/items/:id', (req, res) => {
      res.send('put request')
      });
  
  router.delete('/items/:id', (req, res) => {
      res.send('delete request')
      });
  


// // define the home page route
// router.get('/', (req, res) => {
//   res.send('Birds home page')
// })
// // define the about route
// router.get('/about', (req, res) => {
//   res.send('About birds')
// })

module.exports = router
