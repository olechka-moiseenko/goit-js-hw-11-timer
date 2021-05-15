const timer = {
  start() {
    const startTime = Date.now();
    setInterval(() => {
        const currentTime = Date.now();
        const deltaTime = currentTime - startTime;
        const {days, hours, mins, secs} = getTimeComponents(deltaTime);
        console.log(`${days}:${hours}:${mins}:${secs}`);

    },1000);
  },
};

timer.start();

function getTimeComponents (time) {
 const days = pad(Math.floor(time / (1000 * 60 * 60 * 24)));
 const hours = pad(Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)));
 const mins = pad(Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)));
 const secs = pad(Math.floor((time % (1000 * 60)) / 1000));

 return {days, hours, mins, secs};
};

function updateClockface({days, hours, mins, secs}) {
refs.clockface.textContent = `${days}:${hours}:${mins}:${secs}`;
};

// Принимает число, приводит к строке и добавляет в начало 0 если число меньше двух знаков
function pad(value) {
  return String(value).padStart(2, '0');
}