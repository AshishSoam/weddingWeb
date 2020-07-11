const _ = require('lodash');
const fs = require('fs');
const path = require('path');
const config = require('./config.json');


//* ************************************************** self init config********************************
module.exports = {
  configuration: (congifProfile) => {
    
    const environment = process.env.NODE_ENV || 'dev';
        const environmentConfig = config[environment];

    const defaultConfig = config.staging;
     const finalConfig = _.merge(defaultConfig, environmentConfig);

    console.log(environment);


    return new Promise((resolve, reject) => {
      finalConfig.node_port = 5000;
      resolve(finalConfig);

    })

}
  //* ********************************* */
};
