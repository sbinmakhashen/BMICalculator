// Listen for submit 
document.getElementById('bmi-form').addEventListener('submit', calcResults);
function calcResults(e) {
  // console.log('hsdkh...');
  // // get the input fields
  const height = document.getElementById('height');
  const weight = document.getElementById('weight');
  const bmiResults = document.getElementById('bmi-results');
  // // converting into floats
  const calculatedHeight = parseFloat(height.value);
  const calculatedWeight = parseFloat(weight.value);
  // // calculate BMI
  // calculatedHeight = calculatedHeight / 100;
  const yourBMI = calculatedWeight / (calculatedHeight * calculatedHeight);
  // yourBMI = Math.round(yourBMI * 100) / 100;
  // // if number is finite
  bmiResults.value = yourBMI.toFixed(2);
  e.preventDefault();
}