const word = document.querySelector('button.word-highlight');
const meaning = document.getElementById('word-meaning');
const recognition = document.getElementById('word-return');
const repeatedWord = document.querySelector('[data-repeat-word]');

word.addEventListener('click', () => {
  meaning.hidden = !meaning.hidden;
  word.setAttribute('aria-expanded', String(!meaning.hidden));
  repeatedWord.classList.add('recognized-word');
  recognition.hidden = false;
});
