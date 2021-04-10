// Pulling from the data.js data dictionary
var tableData = data;

//Referencing the table body from the HTML
var tbody = d3.select("tbody");

// Console.log / print the UFO data from data.js
console.log(data);

// Listed below are my 5 steps on inputting the data into HTML
// Step 1: Loop Through 'data' and console.log each UFO report object
// Step 2: Use d3 to append one table row 'tr' for each ufo report object
// Step 3: Use 'Object.entries' to console.log each ufo report value
// Step 4: Use d3 to append 1 cell per ufo report value 
// Step 5: Use d3 to update each cell's text with the values 

// inputting data into HTML
function insertTable(data){
    tbody.html("");
    data.forEach(data => {
        console.log(data);
        var tr = tbody.append("tr");
        Object.entries(data).forEach(([key,value]) => {
            console.log(`key=${key} value=${value}`);
            tr.append("td").text(value);
        })
    })
}

// function to allow filtering on input date
function filterClick(){
    var date = d3.select("#datetime").property("value");
    var dataFilter = tableData;
    if(date){
        dataFilter = dataFilter.filter(x => x.datetime === date);
    }
    console.log(dataFilter);
    insertTable(dataFilter);
}

d3.select("#filter-btn").on("click", filterClick);

insertTable(tableData);
