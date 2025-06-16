//const clock = document.querySelector('#clock')
const clock = document.getElementById('clock');
console.log(clock);

setInterval(() => {
  let date = new Date();
  let curr_time = date.toLocaleTimeString();
  clock.innerHTML = `${curr_time}`;
}, 1000);
