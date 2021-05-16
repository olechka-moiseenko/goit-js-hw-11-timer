class CountdownTimer {
  constructor() {
    //this.timerDiv = document.querySelector('#timer-1');
    this.htmlField.days = document.querySelector('span[data-value ="days"]');
    this.htmlField.hours = document.querySelector('span[data-value = "hours"]');
    this.htmlField.mins = document.querySelector('span[data-value = "mins"]');
    this.htmlField.secs = document.querySelector('span[data-value = "secs"]');
  }

  start(targetDate) {
    this.targetDate = targetDate;
    this.timerId = setInterval(() => {
      const deltaTime = Date.now() - targetDate;
      if (deltaTime <= 0) {
        clearInterval(this.timerId);
        deltaTime = 0;
      }
      this.show(this.calcTimeComponents(deltaTime));
    }, 1000);
  }

  calcTimeComponents(date) {
    const days = this.pad(Math.floor(date / (1000 * 60 * 60 * 24)));
    const hours = this.pad(
      Math.floor((date % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
    );
    const mins = this.pad(Math.floor((date % (1000 * 60 * 60)) / (1000 * 60)));
    const secs = this.pad(Math.floor((date % (1000 * 60)) / 1000));

    return { days, hours, mins, secs };
  }

  pad(value) {
    return String(value).padStart(2, "0");
  }

  show() {
    const delta = calcTimeComponents();
    this.htmlField.days.textСontent = delta.days;
    this.htmlField.hours.textСontent = delta.hours;
    this.htmlField.mins.textСontent = delta.mins;
    this.htmlField.secs.textСontent = delta.secs;
  }
}

//test
const timer = new CountdownTimer({
  selector: '#timer-1',
  targetDate: new Date('May 16, 2021'),
});

timer.start();

function UpDate(param) {
  console.log(param);
};
UpDate('1,2,3');

function getMessage() {
  console.log(getMessage('It is message'));
};