const axios = require('axios');

const url = 'https://swapi.dev/api/'

exports.getCategory = (req, res, next) => {
    axios.get(url + req.body.param)
        .then(data => {
            return res.status(200).send(data.data)
        })
        .catch(function (error) {
            console.log('Error ' + error.message)
        })
  }

exports.getNextPrev = (req, res, next) => {
    axios.get(req.body.url)
        .then(data => {
            return res.status(200).send(data.data)
        })
        .catch(function (error) {
            console.log('Error ' + error.message)
        })
  }
  