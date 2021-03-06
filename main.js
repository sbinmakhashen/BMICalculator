// Listen for submit 
document.getElementById('bmi-form').addEventListener('submit', calcResults);
function calcResults(e) {
  // get the input fields
  const height = docuemnt.getElementById('height');
  const weight = document.getElementById('weight');
  const bmiResults = document.getElementById('bmi-results');
  // converting into floats
  console.log(height.target);
  const calculatedHeight = parseFloat(height.value);
  const calculatedWeight = parseFloat(weight.value);
  // calculate BMI
  const yourBMI = calculatedWeight / Math.pow(calculatedHeight, 2);
  // if number is finite
  if (isFinite(yourBMI)) {
    bmiResults.value = calculatedHeight.toFixed(2); //number to have 2 decimals 
    bmiResults.value = calculatedWeight.toFixed(2);
  } else {
    showError('Please check your numbers');
  }
  e.preventDefault();
}