const express = require('express');
const router = express.Router();
const axios = require('axios');
const URL = 'https://swapi.dev/api/people/';



const getPerson = async(getURL, res) => {
  const resultPerson = await axios.get(getURL);
  const name = resultPerson.data.name;
  const films = resultPerson.data.films;
  let listFilms = '';
  films.forEach(element => {
    listFilms += `${element}<br>\n`;
  });
  res.send(`<table><tr><td>${name}<br></td></tr><tr><td>${listFilms}</td></tr></table>`)
}

router.get('/:param1', (req, res) => {
  const getURL = `${URL}${req.params.param1}`;
  console.log('>>>>>>', getURL);
 
  getPerson(getURL, res)
   
});

module.exports = router;

