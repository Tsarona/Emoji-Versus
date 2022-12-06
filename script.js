let fighters = ["🐶", "🐱", "🐭", "🐹", "🐰", "🐻", "🐼", "🐻", "🐨", "🐯", "🐮", "🐷", "🐽", "🐸", "🐵", "🙈", "🙉", "🙊", "🐒", "🐔", "🐧", "🐦", "🐤", "🐣", "🐥", "🐺", "🐗", "🐴", "🐝", "🐛", "🐌", "🐞", "🐜"];

let stageEl = document.getElementById('stageEl');

let fightClick = document.getElementById('fightButton');

fightClick.addEventListener("click", function () {

  let randomIndexOne = Math.floor(Math.random() * fighters.length);
  let randomIndexTwo = Math.floor(Math.random() * fighters.length);

  stageEl.textContent = fighters[randomIndexOne] + "VS" + fighters[randomIndexTwo];
});
