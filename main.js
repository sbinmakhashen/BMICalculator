// Listen for submit 
document.getElementById('bmi-form').addEventListener('submit', function (e) {
  // showing the loading gif when submit button clicked
  document.getElementById('loading').style.display = 'block';
  // hiding the results
  document.getElementById('results').style.display = 'none';
  setTimeout(calcResults, 5000);
  e.preventDefault();
});
function calcResults(e) {
  // console.log('hsdkh...');
  // // get the input fields
  const height = document.getElementById('height');
  const weight = document.getElementById('weight');
  const bmiResults = document.getElementById('bmi-results');
  // // converting into floats
  const calculatedHeight = parseFloat(height.value);
  const calculatedWeight = parseFloat(weight.value);
  const yourBMI = calculatedWeight / (calculatedHeight / 100 * calculatedHeight / 100); //divide height by 100 so we don't have to use '1.70 cm' instead we can put the numbers without putting . 
  // // if number is finite
  bmiResults.value = yourBMI.toFixed(2);
  // bmiResultCate.value = yourBMI;
  // console.log(bmiResultCate);
  // if number is finite
  if (isFinite(yourBMI)) {
    // if (yourBMI < 18.5) {
    //   bmiResultCate.innerText = " Your Underweight";
    bmiResults.value = yourBMI.toFixed(2);
    // hide loading gid and show reults
    document.getElementById('loading').style.display = 'none';
    document.getElementById('results').style.display = 'block';
  } else {
    errorPopUp('Please check your numbers');
  }
}

// error function 
function errorPopUp(e) {
  // creating a div and giving it a class name 
  const errorDiv = document.createElement('div');
  errorDiv.className = 'alert';
  // // create a textNode and append the child into the div
  errorDiv.appendChild(document.createTextNode(e));
  // // get element before the card title
  const CardTitleParentEL = document.getElementById('form-group');
  // // get the card titile element
  const cardTitle = document.querySelector('.card-title');
  // // inserting the error message before the card title
  CardTitleParentEL.insertBefore(errorDiv, cardTitle);
  // make the error message disappear after 3 seconds
  setTimeout(removeErrorMes, 5000);
  // show loading gif for 3 seconds and hide results
  document.getElementById('loading').style.display = 'none';
}

// function to make the error message disappear after 3 second 
function removeErrorMes(e) {
  // removing the error message
  const errorClassName = document.querySelector('.alert');
  errorClassName.remove();


}