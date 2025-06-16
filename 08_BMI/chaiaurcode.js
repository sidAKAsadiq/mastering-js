const form = document.querySelector('form');
console.log(form);

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const height = parseInt(document.querySelector('#height').value);
  const weight = parseInt(document.querySelector('#weight').value);
  const results = document.querySelector('#results');
  //optionally can check condition for height and weight
  const bmi = (weight / ((height * height) / 10000)).toFixed(2);
  results.innerHTML = `<span>BMI  : ${bmi}</span>`;
});
