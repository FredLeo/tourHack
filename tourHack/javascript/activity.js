google.charts.load('current', {'packages':['geochart']});
google.charts.setOnLoadCallback(drawRegionsMap);

function drawRegionsMap() {

    var data = google.visualization.arrayToDataTable([
        ['Country', 'Popularity'],
        ['Germany', 200],
        ['United States', 300],
        ['Brazil', 400],
        ['Canada', 500],
        ['France', 600],
        ['RU', 700],
        ['China',800],
        ['New Zealand',600]
    ]);

    var options = {
        backgroundColor: '#81d4fa',
        defaultColor: '#f5f5f5',
        colorAxis: {colors: ['#003300']}
    };

    var chart = new google.visualization.GeoChart(document.getElementById('regions_div'));
    chart.draw(data, options);
}

function activity(){
    var name=document.getElementById('activity').value;
    var year=document.getElementById('year').value;
    $('#results').empty();
    $.getJSON("php/tourHack.php?name=" + name +"&year="+year, displayResults);
}

var countryArray=[['Country', 'Popularity']]; //instaniate app list
displayResults = function(data) {
    var searchResults = document.getElementById("results");
    searchResults.innerHTML="";
    for(index in data)
    {
        countryArray.push([data[index]['Country'], parseInt(data[index]['Value'])]);
    }

    // alert(countryArray);
    for(index in countryArray)
    {
        countryArray[index];
    }

    ////////////////////////////////////////////////////////
    google.charts.setOnLoadCallback(drawRegionsMap);

    function drawRegionsMap() {

        var data = google.visualization.arrayToDataTable(countryArray);

        var options = {
            backgroundColor: '#81d4fa',
            defaultColor: '#f5f5f5',
            colorAxis: {colors: ['Green','Blue']},
            displayMode: 'regions',
        };

        var chart = new google.visualization.GeoChart(document.getElementById('regions_div'));
        chart.draw(data, options);
    }
}
