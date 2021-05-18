class CountdownTimer {
  constructor(parameters) {
    this.targetDate = parameters.targetDate;
    const timerDiv = document.querySelector(parameters.selector);
    this.htmlField = {
      days: timerDiv.querySelector('span[data-value="days"]'),
      hours: timerDiv.querySelector('span[data-value="hours"]'),
      mins: timerDiv.querySelector('span[data-value="mins"]'),
      secs: timerDiv.querySelector('span[data-value="secs"]'),
    };
    this.start();
  }

  update() {
    let deltaTime = this.targetDate - Date.now();
    if (deltaTime <= 0) {
      clearInterval(this.timerId);
      this.timerId = null;
      deltaTime = 0;
    }
    this.show(this.calcTimeComponents(deltaTime));
  }

  start() {
    this.update();
    this.timerId = setInterval(this.update.bind(this), 1000);
  }

  calcTimeComponents(miliseconds) {
    const days = this.pad(Math.floor(miliseconds / (1000 * 60 * 60 * 24)));
    const hours = this.pad(
      Math.floor((miliseconds % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
    );
    const mins = this.pad(
      Math.floor((miliseconds % (1000 * 60 * 60)) / (1000 * 60))
    );
    const secs = this.pad(Math.floor((miliseconds % (1000 * 60)) / 1000));

    return { days, hours, mins, secs };
  }

  pad(value) {
    return String(value).padStart(2, "0");
  }

  show(deltaTime) {
    this.htmlField.days.textContent = deltaTime.days;
    this.htmlField.hours.textContent = deltaTime.hours;
    this.htmlField.mins.textContent = deltaTime.mins;
    this.htmlField.secs.textContent = deltaTime.secs;
  }
}

//test
const timer = new CountdownTimer({
  selector: "#timer-1",
  targetDate: new Date("May 16, 2023"),
});


