import accentTypography from '../utils/accent-typography';

export default () => {
  const [title] = document.getElementsByClassName(`intro__title`);
  const [date] = document.getElementsByClassName(`intro__date`);

  accentTypography({
    element: title,
    delay: (index) => 0.04 * Math.cos(index),
    delayWord: 0.2
  });

  accentTypography({
    element: date,
    globalDelay: 0.5,
    delay: (index) => 0.04 * Math.cos(index),
  });
};
