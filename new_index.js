// Get references to the tbody element, input field and button
var $tbody = document.querySelector("tbody");
var $dateTime = document.querySelector("#dateTime");
var $searchBtn = document.querySelector("#search");
var $selCity = document.querySelector("#selectCity");
var $selState= document.querySelector("#selectState");
var $selCountry = document.querySelector("#selectCountry");
var $selShape = document.querySelector("#selectShape");

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
var shape_name = [];
var unique_shape = [];
city_name = alienData.map(function(item){
      return item.city;

    });
unique_city =  (Array.from(new Set(city_name))).sort();

unique_city.forEach(function(city, index) {
  var opt = document.createElement('option');
     opt.innerHTML = city;
     opt.value = city;
     fragment.appendChild(opt);
 });

$selCity.appendChild(fragment);

// wrap the items in city dropdown list


// populate the state items into state dropdownlist
state_name = alienData.map(function(item){
  return item.state;
    });
unique_state =  (Array.from(new Set(state_name))).sort();
unique_state.forEach(function(state, index) {
     var opt = document.createElement('option');
     opt.innerHTML = state;
     opt.value = state;
     fragment.appendChild(opt);
 });

$selState.appendChild(fragment);

//populate the country items into the country dropdown list
country_name = alienData.map(function(item){
       return item.country;

     });
unique_country =  (Array.from(new Set(country_name))).sort();
unique_country.forEach(function(country, index) {
    var opt = document.createElement('option');
     opt.innerHTML = country;
     opt.value = country;
     fragment.appendChild(opt);
 });

$selCountry.appendChild(fragment);
// populate the shape items into the shape dropdown list
shape_name = alienData.map(function(item){
       return item.shape;

     });
unique_shape =  (Array.from(new Set(shape_name))).sort();
unique_shape.forEach(function(shape, index) {
    var opt = document.createElement('option');
     opt.innerHTML = shape;
     opt.value = shape;
     fragment.appendChild(opt);
 });
$selShape.appendChild(fragment);
    
// renderTable renders the alienData to the tbody
function renderTable() {
  $tbody.innerHTML = "";
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
  
  var filterDateTime = $dateTime.value.trim().toLowerCase();
  var filterCity = $selCity.options[$selCity.selectedIndex].value
  var filterState = $selState.value
  var filterCountry = $selCountry.value
  var filterShape = $selShape.value
 
if (filterDateTime != ""){
alienData = dataSet.filter(function(alien) {
  var dateTime = alien.datetime.toLowerCase();

    // If true, add the alien to the alienData, otherwise don't add it to alienData
  return dateTime === filterDateTime;
   
  })};
var x = document.getElementById("selectCity").selectedIndex;
if (x != 0){
alienData = alienData.filter(function(alienCity){
  var City = alienCity.city.toLowerCase();
  return City === filterCity;

})};
var y = document.getElementById("selectState").selectedIndex;
if(y != 0){
alienData = alienData.filter(function(alienState){
  var State = alienState.state.toLowerCase();
  return State === filterState;
})};
var z = document.getElementById("selectCountry").selectedIndex;
if(z != 0){
alienData = alienData.filter(function(alienCountry){
  var Country = alienCountry.country.toLowerCase();
  return Country === filterCountry;
})};
var k = document.getElementById("selectShape").selectedIndex;
if(k != 0){
alienData = alienData.filter(function(alienShape){
  var Shape = alienShape.shape.toLowerCase();
  return Shape === filterShape;
})};

 console.log(alienData);

  renderTable();
 
}
// Render the table for the first time on page load
renderTable();