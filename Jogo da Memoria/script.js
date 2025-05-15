const emojis = ['🍎', '🍌', '🍇', '🍓', '🍍', '🍒', '🥝', '🍉'];
const cards = [...emojis, ...emojis]; // Duplicar os emojis para formar pares
cards.sort(() => 0.5 - Math.random()); // Embaralhar as cartas

const gameBoard = document.getElementById('gameBoard');
let firstCard = null;
let secondCard = null;
let lockBoard = false;

cards.forEach(emoji => {
  const card = document.createElement('div');
  card.classList.add('card');
  card.dataset.emoji = emoji;
  card.textContent = '';
  gameBoard.appendChild(card);

  card.addEventListener('click', () => {
    if (lockBoard || card.classList.contains('revealed')) return;

    card.textContent = emoji;
    card.classList.add('revealed');

    if (!firstCard) {
      firstCard = card;
    } else {
      secondCard = card;
      lockBoard = true;

      if (firstCard.dataset.emoji === secondCard.dataset.emoji) {
        firstCard = null;
        secondCard = null;
        lockBoard = false;
      } else {
        setTimeout(() => {
          firstCard.textContent = '';
          secondCard.textContent = '';
          firstCard.classList.remove('revealed');
          secondCard.classList.remove('revealed');
          firstCard = null;
          secondCard = null;
          lockBoard = false;
        }, 1000);
      }
    }
  });
});
