const slider = document.getElementById('hue-slider');

slider.addEventListener('input', e => {
  document.documentElement.style.setProperty('--hue', e.target.value);
});