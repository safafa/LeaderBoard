import 'lodash';
import './style.css';
import { apiPost, apiGet } from './api.js';
import { renderScores, emptyList } from './render.js';

const gameId = 'pTM1dfqEPrVz08MIv3ug';
const form = document.getElementById('score-form');
const refresh = document.getElementById('refresh');

refresh.addEventListener('click', () => {
  apiGet(`games/${gameId}/scores`).then((response) => {
    emptyList();
    renderScores(response.result);
  });
});

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const name = document.getElementById('name').value;
  const score = document.getElementById('score').value;
  apiPost(`games/${gameId}/scores`, {
    user: name,
    score: score,
  }).then(() => {
    form.reset();
  });
});

apiGet(`games/${gameId}/scores`).then((response) => {
  renderScores(response.result);
});
