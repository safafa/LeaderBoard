export const renderScores = (players) => {
  const list = document.getElementById('scores-list');
  players.forEach((player) => {
    const { user:name, score } = player;
    const li = document.createElement('li');
    li.innerText = `${name} : ${score}`;
    list.appendChild(li);
  });
  return list;
};