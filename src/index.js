import './styles/style.css';
import getData from './gameServer/serverget.js';
import postData from './gameServer/serverpost.js';

const refresh = document.getElementById('btn');

const name = document.getElementById('Name');
const score = document.getElementById('Score');

console.log(refresh);
const submit = document.querySelector('.btnsubmit');

const url =
  'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/4VEGe50cX5o9oalxLylU/scores/';

const display = (data) => {
  const list = document.querySelector('.list-item');

  if (Array.isArray(data) && list) {
    data.forEach((item) => {
      const li = document.createElement('li');
      li.innerHTML = `${item.user}: ${item.score}`;
      list.appendChild(li);
    });
  } else {
    li.innerHTML = `input data`;
  }
};

refresh.addEventListener('click', async () => {
  const data = await getData(url);
  console.log(data);
  display(data);
});

submit.addEventListener('click', () => {
  const data = {
    user: name.value,
    score: score.value,
  };
  postData(url, data);

  name.value = '';
  score.value = '';
});

// window.onload = async () => {
//   const data = await getData(url);
//   display(data);
// };
