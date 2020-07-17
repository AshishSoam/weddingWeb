const express = require('express');

const app = express();
const cors = require('cors');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const swaggerUi = require('swagger-ui-express');
const swaggerJSDoc = require('swagger-jsdoc');
const helmet = require('helmet');
const config = require('./config/config');
const winston = require('./config/winston');
const db=require('./dbConnectivity/dbConnection')
const userModel=require('./models/userModel')
const path = require('path');
var os = require("os");


require('dotenv').config();

app.use(helmet());

app.use(cors());
app.use(morgan('tiny'))
// app.get('/aaaa', (req, res) => {
// console.log(req.headers['host'])
// req.headers['host']=req.headers['host'].split(':')[0]+':5001'
// // console.log("***************************************",req.headers['host'][0]+":5001")
// console.log("***************************************")

//  res.writeHead(307, { "Location": "http://" + req.headers['host']  });
// return res.send();

//   // return res.send("Connecting to wedding API Server")
// })
app.use(morgan('combined', { stream: winston.stream }));

config
  .configuration()
  .then((configurations) => {
    global.gConfig = configurations;
    app.use(bodyParser.urlencoded({ extended: true, limit: '50mb' }));
    app.use(bodyParser.json());
    app.use((error, req, res, next) => {
      console.log("sdas---->",error)
      if (error instanceof SyntaxError) {
        return res.status(400).send({ status: 400, success: false, message: 'Bad request.' });
      }
      next();
    });

    const swaggerDefinition = {
      info: {
        title: "Wedding_Web.",
        version: '1.0.0',
        description: 'Swagger API Docs',
      },
      // host:`${global.gConfig.swaggerURL}`, // Host (optional)
      //  host:`localhost:7000`, // Host (optional)
      basePath: '/', // Base path (optional)
    };
    
    const options = {
      swaggerDefinition,
      apis: ['./routes/*.js'], // <-- not in the definition, but in the options
    };
    
    const swaggerSpec = swaggerJSDoc(options);
    
    app.get('/swagger.json', (req, res) => {
      res.setHeader('Content-Type', 'application/json');
      res.send(swaggerSpec);
    });

    
    app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));
    app.use('/api/v1/user', require('./routes/userRouter'));
    app.use('/api/v1/admin', require('./routes/adminRouter'));
    app.use('/api/v1/static', require('./routes/staticRouter'));
   
    app.use(express.static(path.join(__dirname, 'dist')));
    app.get('*', (req, res) => {
      res.sendFile(__dirname + '/dist/index.html')
      });

    //* ******************************* function to set first default configuration *************************/

    try {
      app.listen(global.gConfig.node_port, async () => {
      winston.info(`Server is running on port: ${global.gConfig.node_port}`);
      
      });
    } catch (e) {
      winston.error(`Server is not responding.${e}`);
    }

    // error handler
    app.use((err, req, res, next) => {
      // set locals, only providing error in development
      res.locals.message = err.message;
      res.locals.error = req.app.get('env') === 'development' ? err : {};
      winston.error(
        `${err.status || 500} | ${err.message} | ${req.originalUrl} | ${req.method} | ${req.ip}`
      );

      // render the error page
      res.status(err.status || 500);
      return res.send({
        statusCode: err.status || 500,
        success: 'false',
        message: err.message,
      });
    });
  })
  .catch((err) => winston.error(`Error Occured while configuring the server :${err}`));

//* *****************************************swgger setup********************************* */


