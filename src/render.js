const list = document.getElementById('scores-list');

export const emptyList = () => {
  list.innerHTML = '';
};

export const renderScores = (players) => {
  players.forEach((player) => {
    const { user: name, score } = player;
    const li = document.createElement('li');
    li.innerText = `${name} : ${score}`;
    list.appendChild(li);
  });
  return list;
};