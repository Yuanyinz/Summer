const express = require('express');
const app = express();
const path = require('path');
const PORT = 8080;

app.use(express.json());

const data = {
  "studying": "studying",
  "shop": "shop",
}

// serve index.html
// app.get('/', (req, res) => {
//   return res
//     .status(200)
//     //为什么改了postman没反应？还是 200 ok?
//     .sendFile(path.resolve(__dirname, '../client/index.html'));
// });


// user get information from data
app.get('/', (req, res, next) => {
  // console.log('the response will be sent by the next function ...')
  console.log('do I have access to the data?', data)
  res.send(data)
  next()
})


//user add new toDo 
app.post('/',(req,res,next) => {
  console.log('do I have info from req.body?', req.body.toDo)
  Object.assign(data, req.body.toDo);
  //also can use Object.keys()
  console.log('data', data);

  res.send("success");
  next();
})


//user delete toDo
app.delete('/',(req,res,next) =>{
  console.log('info from req.body',req.body)
  const key = req.body.key
  delete data[key]
  console.log(data)
  res.send('success')
  next()
})

//user edit toDo
app.put('/',(req,res,next) => {
  console.log('update info from req.body',req.body)
  for (let key in data) {
    if (Object.keys(req.body).includes(key)) {
      data[key] = req.body[key];
    }
  }
  console.log(data)
  res.send('success')
  next()
})
// original key and value;
// new key and value



//Handle non-existed url request
app.use((req, res, next) => {
  res.status(404).send('Page not found');
});


//Global error handler




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

// app.post('/test',(req,res,next) => {
//   res.send('test post')
//   console.log("?")
//   next()
// })



//app.delete('/test') 

// app.delete('/test', (req,res,next) => {
//   res.send('delete')
//   next()
// })




//app.post('/test')

