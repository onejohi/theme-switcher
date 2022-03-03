
const { getElementById, body } = document;
const lightBtn = document.getElementById('light');
const darkBtn = document.getElementById('dark');
const solarizeBtn = document.getElementById('solarize');

const theme = localStorage.getItem('theme');
const isSolarized = localStorage.getItem('isSolar');

if (theme) {
  body.classList.add(theme);
  isSolarized && body.classList.add('solarize');
}

const themeSwitcher = (solar, prev, current) => {
  if (solar) {
    if (body.classList.contains('solarize')) {
      body.classList.remove('solarize');
      localStorage.removeItem('isSolar');
    } else {
      body.classList.add('solarize');
      localStorage.setItem('isSolar', true);
    }
    return;
  }
  body.classList.replace(prev, current);
  localStorage.setItem('theme', current);
  localStorage.removeItem('solarize');
  console.log('I have been clicked')
}

lightBtn.addEventListener('click', () => {
  themeSwitcher(false, 'dark', 'light');
});

darkBtn.addEventListener('click', () => {
  themeSwitcher(false, 'light', 'dark');
});

solarizeBtn.addEventListener('click', () => {
  themeSwitcher(true, '', '');
});