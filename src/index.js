import 'lodash';
import './style.css';
import {apiPost, apiGet} from './api.js';

const gameId = 'pTM1dfqEPrVz08MIv3ug';

const renderScores = (players) => {
  const list = document.getElementById('scores-list');
  players.forEach((player) => {
    const { name, score } = player;
    const li = document.createElement('li');
    li.innerText = `${name} : ${score}`;
    list.appendChild(li);
  });
  return list;
};

apiGet(`games/${gameId}/scores`).then(response => {
  renderScores(response.result);
});