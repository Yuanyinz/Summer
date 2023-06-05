const express = require('express');
const app = express();
const path = require('path');
const PORT = 8080;

// serve index.html
app.get('/', (req, res) => {
  return res
    .status(200)
    //为什么改了postman没反应？还是 200 ok?
    .sendFile(path.resolve(__dirname, '../client/index.html'));
});

app.post('/test',(req,res,next) => {
  res.send('test post')
  next()
})

// start server
app.listen(PORT, () => {
  console.log(`Server listening on port: ${PORT}...`);
});

module.exports = app;


// get
// app.get('/test',(req,res,next) => {
  //   res.send('GET request to the homepage')
  //   next()
  // })

// app.get('/test', (req, res, next) => {
//   console.log('test');
//   res.status(200).send('hello')
//   next();
// })

// app.get('/test', (req, res, next) => {
//     console.log('the response will be sent by the next function ...')
//在哪里看这行？
//     next()
//   }, (req, res) => {
//     res.send('Hello from B!')
//   })



//app.delete('/test') 

// app.delete('/test', (req,res,next) => {
//   res.send('delete')
//   next()
// })




//app.post('/test')

