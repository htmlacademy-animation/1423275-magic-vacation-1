const accentTypography = ({
  element,
  globalDelay = 0,
  delay = 0,
  delayWord = 0
}) => {
  const {textContent} = element;

  let letterMemoizedIndex = 0;
  const wrapLetters = (word, wordDelay) => word
    .split(``)
    .map((letter) => {
      letterMemoizedIndex += 1;
      const animationDelay = `animation-delay: ${
        globalDelay + wordDelay + (typeof delay === `function` ? delay(letterMemoizedIndex) : delay)
      }s;`;
      return (
        `<span class="animated-text__letter" style="${animationDelay}">
          ${letter}
        </span>`
      );
    })
    .join(``);

  const wrapWord = (text) => text
    .split(` `)
    .map((word, i) => (
      `<span class="animated-text__word">
        ${wrapLetters(word, i * delayWord)}
      </span>`
    ));

  const wrappedText = wrapWord(textContent)
    .join(`<span class="animated-text__space"> </span>`);

  element.classList.add(`animated-text`);
  element.innerHTML = wrappedText;
};

export default accentTypography;
