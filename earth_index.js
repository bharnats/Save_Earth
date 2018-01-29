// Get references to the tbody element, input field and button
var $tbody = document.querySelector("tbody");
var $dateTime = document.querySelector("#dateTime");
var $searchBtn = document.querySelector("#search");

// Add an event listener to the searchButton, call handleSearchButtonClick when clicked
$searchBtn.addEventListener("click", handleSearchButtonClick);

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

function handleSearchButtonClick() {
  // Format the user's search by removing leading and trailing whitespace, lowercase the string
  var filterDateTime = $dateTime.value.trim().toLowerCase();

  // Set filteredAddresses to an array of all addresses whose "state" matches the filter
  alienData = dataSet.filter(function(alien) {
    var dateTime = alien.datetime.toLowerCase();

    // If true, add the alien to the filterDateTime, otherwise don't add it to filterDateTime
    return dateTime === filterDateTime;
  });
  renderTable();
}

// Render the table for the first time on page load
renderTable();
