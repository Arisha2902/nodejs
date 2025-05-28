// rerire(); jab bhi koi object ya module ko include karna hota hai, tab hum require() function ka istemal karte hain.
const express = require('express'); // express module ko include kiya gaya hai
const app = express(); // express function ko call karke ek app object banaya gaya hai or initialize kiya gya h

const port = 3000;

app.get('/', (req, res) => {
  res.send('Hello World!'); 
})

//start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
  // yeh line console par message print karegi ki server kis port par chal raha hai
  //node index.js command se server ko start kiya ja sakta hai ,isko terminal me likhte h
});