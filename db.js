const mongoose = require('mongoose');
// import variable from local enviorement:
require('dotenv').config({path: 'variables.env'});

mongoose.connect(
  process.env.DB_URL,
  {  
    // `mongodb+srv://goalUser:${process.env.MONGO_ATLAS_PW}@goals-app-p9rxi.mongodb.net/todolist?retryWrites=true&w=majority`
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false
  })
  .then(() => {
    console.log('Mongodb connected...............')
  })
  .catch(err => {
    console.error('Error connecting to mongo', err)
  });

mongoose.Promise = global.Promise;