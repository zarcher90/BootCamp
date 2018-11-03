const age = prompt('what is your age');


if (age < 0) {
  alert('Woops somthing when wrong!');
} else if (age === 21) {
  alert('Happy 21st Birthday! You get a free shot!');
} else if (isodd(age) === 1) {
  alert('Did you know your age is odd');
} else if (psquar(age) === 0) {
  alert('Your age is a perfect square!');
} else {
  alert('Nothing to say about your age..... Sorry');
}


function isodd(num) {
  return num % 2;
}

function psquar(num) {
  return num % Math.sqrt(num);
}
