function average(scores) {
  let results = 0;
  scores.forEach((element) => {
    results += element;
  });
  console.log(Math.ceil(results /= scores.length));
}

const grades = [90, 98, 89, 100, 100, 86, 94];
average(grades);

const grades2 = [40, 65, 77, 82, 80, 54, 73, 63, 95, 49];
average(grades2);
