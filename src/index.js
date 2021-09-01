import 'lodash';
import './style.css';
import { apiPost, apiGet } from './api.js';
import { renderScores } from './render';

const gameId = 'pTM1dfqEPrVz08MIv3ug';

apiGet(`games/${gameId}/scores`).then(response => {
  renderScores(response.result);
});