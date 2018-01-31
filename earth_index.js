// Get references to the tbody element, input field and button
var $tbody = document.querySelector("tbody");
var $dateTime = document.querySelector("#dateTime");
var $searchBtn = document.querySelector("#search");

var $city = document.querySelector("#city");
var selCity = document.getElementById('selectCity');
var selState= document.getElementById('selectState');
var selCountry = document.getElementById('selectCountry');

var fragment = document.createDocumentFragment();

// Add an event listener to the searchButton, call handleSearchButtonClick when clicked
$searchBtn.addEventListener("click", handleSearchButtonClick);


// Set alienData to dataset initially
var alienData = dataSet;
var city_name = [];
var unique_city = [];
var state_name = [];
var unique_state = [];
var country_name = [];
var unique_country = [];
var city_name = alienData.map(function(item){
      return item.city;

    })
  var unique_city =  (Array.from(new Set(city_name))).sort();
  var state_name = alienData.map(function(item){
      return item.state;

    })
  var unique_state =  (Array.from(new Set(state_name))).sort();
  var country_name = alienData.map(function(item){
      return item.country;

    })
  var unique_country =  (Array.from(new Set(country_name))).sort();
  

    

// renderTable renders the alienData to the tbody
function renderTable() {
  $tbody.innerHTML = ""

  unique_city.forEach(function(city, index) {
    var opt = document.createElement('option');
    opt.innerHTML = city;
    opt.value = city;
    fragment.appendChild(opt);
});

selCity.appendChild(fragment);
unique_state.forEach(function(state, index) {
    var opt = document.createElement('option');
    opt.innerHTML = state;
    opt.value = state;
    fragment.appendChild(opt);
});

selState.appendChild(fragment);
unique_country.forEach(function(country, index) {
    var opt = document.createElement('option');
    opt.innerHTML = country;
    opt.value = country;
    fragment.appendChild(opt);
});

selCountry.appendChild(fragment);

  for (var i = 0; i < alienData.length; i++) {
    // Get get the current dataset object and its fields
    var alien = alienData[i];
    var fields = Object.keys(alien);
    // pull the array of cities from the dataSet
    
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
  if ($dateTime.value.length==0){
      renderTable()
  } else{
  var filterDateTime = $dateTime.value.trim().toLowerCase();
  var filterCity = selCity.value.trim().toLowerCase();
  //var filterState = $selState.value.trim().toLowerCase();
  //var filterCountry = $selCountry.value.trim().toLowerCase();

  // Set filteredAddresses to an array of all addresses whose "date" matches the filter
  var alienData = dataSet.filter(function(alien) {
    var dateTime = alien.datetime.toLowerCase();

    // If true, add the alien to the filterDateTime, otherwise don't add it to filterDateTime

    return dateTime === filterDateTime;
   
  });
  //var alienCity = alienData.filter(function(alien){
     //var city_filter = alien.city.toLowerCase();
     //return city_filter === filterCity;
  //})
  
  renderTable();
}};

// Render the table for the first time on page load

renderTable();
