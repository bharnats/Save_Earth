// Get references to the tbody element, input field and button
var $tbody = document.querySelector("tbody");
var $dateTime = document.querySelector("#dateTime");
var $searchBtn1 = document.querySelector("#search1");
var $searchBtn2 = document.querySelector("#search2");
var $city = document.querySelector("#city");

// Add an event listener to the searchButton, call handleSearchButtonClick when clicked
$searchBtn1.addEventListener("click", handleSearchButtonClickDate);
$searchBtn2.addEventListener("click", handleSearchButtonClickCity);

// Set alienData to dataset initially
var alienData = dataSet;

// renderTable renders the alienData to the tbody
function renderTable() {
  $tbody.innerHTML = ""
  for (var i = 0; i < alienData.length; i++) {
    // Get get the current dataset object and its fields
    var alien = alienData[i];
    var fields = Object.keys(alien);
    // Create a new row in the tbody, set the index to be i + startingIndex
    var $row = $tbody.insertRow(i);
    for (var j = 0; j < fields.length; j++) {
      // For every field in the alien object, create a new cell at set its inner text to be the current value at the current dataset's field
      var field = fields[j];
      var $cell = $row.insertCell(j);
      $cell.innerText = alien[field];
    }
  }
}

function handleSearchButtonClickDate() {
  // Format the user's search by removing leading and trailing whitespace, lowercase the string
  if ($dateTime.value.length==0){
      renderTable()
  } else{
  var filterDateTime = $dateTime.value.trim().toLowerCase();

  // Set filteredAddresses to an array of all addresses whose "state" matches the filter
  alienData = dataSet.filter(function(alien) {
    var dateTime = alien.datetime.toLowerCase();

    // If true, add the alien to the filterDateTime, otherwise don't add it to filterDateTime
    return dateTime === filterDateTime;
  });
  renderTable();
}}
function handleSearchButtonClickCity() {
  // Format the user's search by removing leading and trailing whitespace, lowercase the string
 $dateTime.value="";
  var filterCity= $city.value.trim().toLowerCase();

  // Set filteredAddresses to an array of all addresses whose "state" matches the filter
  alienData = dataSet.filter(function(alien) {
    var alienCity = alien.city.toLowerCase();

    // If true, add the alien to the filterDateTime, otherwise don't add it to filterDateTime
    return alienCity=== filterCity ;
  
 });
  renderTable();


// Render the table for the first time on page load
}
renderTable();
