const mongoose = require('mongoose')
global.Promise=mongoose.Promise;
const config = require('../config/config')
const winston = require('../config/winston');

// const db_name = global.gConfig.database ||"wedding_web";
const db_name ="wedding_web";
// const host = global.gConfig.host ||"localhosat";
const host = "localhost";

const DB_URL = `mongodb://${host}/${db_name}`


mongoose.connection.openUri(DB_URL,{useNewUrlParser: true,useUnifiedTopology: true})
/******************************* Events of mongoose connection. *****************************************************/
// CONNECTION EVENTS
// When successfully connected
mongoose.connection.on('connected',()=>{
console.log('success', 'Mongoose default connection open to ' +DB_URL)
});
// if the connection throw an error
mongoose.connection.on('error',(err)=>{
    winston.info(`Mongoose default connection error: ${err}`);

});
// when the connectio is disconnected
mongoose.connection.on('disconnected',()=>{
    winston.info('disconnected',`Mongoose detault connection is disconnected`);

    //  console.log('disconnected', 'Mongoose detault connection is disconnected')
})
//if the node process ends,close the mongoose connection
process.on('SIGINT',()=>{
   mongoose.connection.close(()=>{
      console.log('warning','Mongoose default connection disconnected through app termination')
    });
});

 

