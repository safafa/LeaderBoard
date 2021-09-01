import 'lodash';
import './style.css';
import { apiPost, apiGet } from './api.js';
import { renderScores } from './render';

const gameId = 'pTM1dfqEPrVz08MIv3ug';
const from = document.getElementById('score-form');

from.addEventListener('submit', (e) => {
  e.preventDefault();
  const name = document.getElementById('name').value;
  const score = document.getElementById('score').value;
  apiPost(`games/${gameId}/scores`, { 
    "user": name,
    "score": score
  }).then((response) => {console.log(response)})
})

apiGet(`games/${gameId}/scores`).then(response => {
  renderScores(response.result);
});
