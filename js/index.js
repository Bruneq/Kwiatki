const title = document.querySelector('.title');
const words = ['Wszystkiego', 'Najlepszego'];

words.forEach((word, wordIndex) => {
  const wordContainer = document.createElement('div'); // Create a container for each word
  word.split('').forEach((letter) => {
    const letterSpan = document.createElement('span');
    letterSpan.textContent = letter;
    wordContainer.appendChild(letterSpan);
  });

  // Add a bit of margin to separate the lines
  wordContainer.style.marginBottom = wordIndex === 0 ? '10px' : '0';

  title.appendChild(wordContainer); // Append the word container to the title element
});

// Apply random animation delays
const textElements = document.querySelectorAll('.title span');
textElements.forEach((element) => {
  const randomDelay = Math.random() * 2;
  element.style.animationDelay = `${randomDelay}s`;
});
