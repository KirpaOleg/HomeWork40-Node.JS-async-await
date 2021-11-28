const express = require('express');
const router = express.Router();
const axios = require('axios');
const URL = 'https://swapi.dev/api/';
let listFilms = '';
let name = '';

router.get('/:param1/:param2/', (req, res) => {

  const getURL = `${URL}${req.params.param1}/${req.params.param2}`;
 
  const getPerson = async() => {
    const resultPerson = await axios.get(getURL);
    name = resultPerson.data.name;
    const films = resultPerson.data.films;
    films.forEach(element => {
      listFilms += `${element}<br>\n`;
    });
 
  }
  getPerson()

  res.send(`<table><tr>${name}<br></tr><tr>${listFilms}</tr></table>`);
});

module.exports = router;
