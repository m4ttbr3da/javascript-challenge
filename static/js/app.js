// Import sightings from data.js
var sightings = data;

// Select the table body area
var tbody = d3.select("tbody");

// Select the button
var button = d3.select("#filter-btn");

// Select the form
var form = d3.select("#form");

// Create event handlers
button.on("click", runEnter);
form.on("submit", runEnter);

// Populate the table with a new row for each sighting
sightings.forEach((ufoReport) => {
    var row = tbody.append("tr");
    Object.entries(ufoReport).forEach(([key, value]) => {
      var cell = row.append("td");
      cell.text(value);
    });
  });

// Complete the event handler function for the form
function runEnter() {

    // Prevent the page from refreshing
    d3.event.preventDefault();

    // Clear any existing rows from the table
    table_rows = d3.select(".summary");
    table_rows.html("");


    // Select the input element and get the raw HTML node
    var inputElement = d3.select("#datetime");

    // Get the value property of hte input element
    var inputValue = inputElement.property("value");

    console.log(inputValue);
    console.log(sightings);

    var filteredData = sightings.filter(sighting => sighting.datetime == inputValue);

    console.log(filteredData);

    filteredData.forEach((ufoReport) => {
        var row = tbody.append("tr");
        Object.entries(ufoReport).forEach(([key, value]) => {
          var cell = row.append("td");
          cell.text(value);
        });
      });
};