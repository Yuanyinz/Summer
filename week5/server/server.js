const express = require('express');
const cors = require('cors');
const app = express();
const path = require('path');
const PORT = 8080;
const uuid = require('uuid');
const fs = require('fs');

app.use(express.json());

app.use(cors({
  origin: 'http://localhost:3000'
}));



// serve index.html
// app.get('/', (req, res) => {
//   return res
//     .status(200)
//     //为什么改了postman没反应？还是 200 ok?
//     .sendFile(path.resolve(__dirname, '../client/index.html'));
// });

// user get information from data
app.get('/', (req, res, next) => {
  try {
    fs.readFile(path.resolve(__dirname, './database.json'), 'utf-8', (err, data) => {
      if (err) {
        console.log('error in GET readFile');
        next(err);
      }
      // console.log('data', data);
      res.send(data);
    })

  } catch (err) {
    next(err)
  }
})

// console.log('outside of app.get')

//user add new toDo 
app.post('/',(req,res) => {
  console.log('do I have info from req.body?', req.body)
  // {content: "study"}

  // uuid
  const uniq = uuid.v4();

  // {"12iu4u": "study"}
  const newData = {};
  newData[uniq] = req.body.content;
  
  //read from database
  fs.readFile(path.resolve(__dirname, './database.json'), 'utf-8', (err, data) => {
    if (err) {
      console.log('error in POST readFile');
      next(err);
    }
    // console.log('data', data);
    // data => json format => convert to JS object
    data = JSON.parse(data);
    data = Object.assign(data, newData);

    // data write to JSON database
    fs.writeFile(path.resolve(__dirname, './database.json'), JSON.stringify(data), err => {
      if (err) {
        next(err);
      }

      // send success status/message to client
      console.log("write to database successfully");
      res.send(newData);
    })  
  })
})




//user delete toDo
app.delete('/',(req,res) =>{
  console.log('info from req.body',req.body)
  // { uuid: '65068a67-ad23-460c-a3e3-3c1127139e80' }
  const deleteId = req.body.uuid;

  //read from database
  fs.readFile(path.resolve(__dirname, './database.json'), 'utf-8', (err, data) => {
    if (err) {
      console.log('error in POST readFile');
      next(err);
    }

    
    let jsonData = JSON.parse(data);
    console.log(jsonData)

    for (let key in jsonData) {
      if(key === deleteId) {
        delete jsonData[key]
      }
    }
    console.log(jsonData)

    // data write to JSON database
    fs.writeFile(path.resolve(__dirname, './database.json'), JSON.stringify(jsonData), err => {
      if (err) {
        next(err);
      }
      console.log("delete to database successfully")
      res.send(jsonData);
    })
  })
})




//user edit toDo
app.put('/',(req,res) => {
  console.log('info from req.body',req.body.uuid)
  console.log('info from req.body',req.body.content)

  fs.readFile(path.resolve(__dirname, './database.json'), 'utf-8', (err, data) => {
    if (err) {
      console.log('error in POST readFile');
      next(err);
    }

    
    let jsonData = JSON.parse(data);
    console.log(jsonData)

    for (let key in jsonData) {
      if(key === req.body.uuid) {
        jsonData[key] = req.body.content
      }
    }
    console.log(jsonData)

    // data write to JSON database
    fs.writeFile(path.resolve(__dirname, './database.json'), JSON.stringify(jsonData), err => {
      if (err) {
        next(err);
      }
      console.log("delete to database successfully")
      res.send(jsonData);
    })
  })
})


//Handle non-existed url request
app.use((req, res, next) => {
  console.log('inside app.use for url handler');
  const err = new Error("Page Not Found")
  next(err);
});
// Cannot set headers after they are sent to the client问题在这里 还不知道怎么解决
//例如错误 postman http://localhost:8080/test？？


//Global error handler
app.use((err, req, res, next) => {
  console.error(err);
  res.status(500).send('Internal Server Error');
});

// const ErrorHandler = (err, req, res, next) => {
//   console.log("error")
//   res.status(500).send('Internal Server Error')
// }

// // const error = new ErrorHandler(err, req, res, next)

// start server
app.listen(PORT, () => {
  console.log(`Server listening on port: ${PORT}...`);
});

module.exports = app;






