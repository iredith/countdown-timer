const birthDate = '01 Jan';

function countdown() {
  const currentDate = new Date();
  const dateOfBirth = new Date(birthDate);
  dateOfBirth.setFullYear(currentDate.getFullYear() + 1);

  const totalSeconds = (dateOfBirth - currentDate) / 1000;

  const days = Math.floor(totalSeconds / 3600 / 24);
  const hours = Math.floor(totalSeconds / 3600) % 24;
  const minutes = Math.floor(totalSeconds / 60) % 60;
  const seconds = Math.floor(totalSeconds) % 60;

  document.getElementById('days').innerText = timeFormat(days);
  document.getElementById('hours').innerText = timeFormat(hours);
  document.getElementById('minutes').innerText = timeFormat(minutes);
  document.getElementById("seconds").innerText = timeFormat(seconds);
}

const timeFormat = time => time < 10 ? `0${time}` : time;

countdown();
setInterval(() => {
  countdown();
}, 1000);