let input = document.getElementById('guessField');
let submit = document.getElementById('subt');
let prev_guess = document.getElementsByClassName('guesses')[0];
let remaining = document.getElementsByClassName('lastResult')[0];
let high_or_low = document.getElementsByClassName('lowOrHi')[0];

let answer = parseInt(Math.random() * 100 + 1);
let guess_count = 1;
let prev_guesses = [];
let play = true;

if (play) {
  submit.addEventListener('click', (e) => {
    e.preventDefault();
    const user_input = parseInt(input.value);
    validate(user_input);
  });
}

const validate = (guess) => {
  if (isNaN(guess) || guess > 100 || guess < 1) {
    alert('Invalid input');
  } else {
    prev_guesses.push(guess);
    display_guess(guess);
    if (guess_count === 11) {
      display_msg(`Game over, random num was ${answer}`);
      end_game();
    } else {
      check(guess);
    }
  }
};

const check = (guess) => {
  if (guess === answer) {
    display_msg('Correct');
    end_game();
  } else if (guess > answer) {
    display_msg('High');
  } else {
    display_msg('Low');
  }
};

const display_guess = (guess) => {
  input.value = '';
  prev_guess.innerHTML += `${guess}, `;
  guess_count++;
  remaining.innerHTML = `${11 - guess_count}`;
};

const display_msg = (msg) => {
  high_or_low.innerHTML = `<h2>${msg}</h2>`;
};

const end_game = () => {
  input.disabled = true;
  submit.disabled = true;
  display_msg('Game Ended. Reload to play again.');
};
