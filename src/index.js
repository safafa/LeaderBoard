import _ from 'lodash';
import './style.css';

const players = [
 {
   name: "Safa",
   score: 100
 },
 {
  name: "Safa",
  score: 100
 },
 {
  name: "Safa",
  score: 100
 },
 {
  name: "Safa",
  score: 100
 },
{
  name: "Safa",
  score: 100
},
{
  name: "Safa",
  score: 100
},
]

const renderScores = ()  => {
    const list =  document.getElementById('scores-list');
    players.forEach(player => {
      const {name, score} = player;
      const li = document.createElement('li');
      li.innerText = `${name} : ${score}`;
      list.appendChild(li);
    })
    return list;
}

renderScores();