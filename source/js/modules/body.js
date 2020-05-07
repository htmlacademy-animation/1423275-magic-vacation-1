export default () => {
  window.onload = () => {
    document.body.classList.add(`loaded`);
  };

  document.body.addEventListener(`screenChanged`, ({detail: {screenName}}) => {
    const page = document.getElementsByClassName(`page-content`)[0];
    const screensToFill = [
      `prizes`,
      `rules`,
      `game`
    ];

    if (screensToFill.includes(screenName)) {
      page.classList.add(`page-content--filled`);
    } else {
      page.classList.remove(`page-content--filled`);
    }
  });
};
