function calculateAverage(){
    var table = document.getElementById('temperature-table');
    var rows = table.getElementsByTagName('tr');
        for (var i = 1; i < rows.length; i++){
            var cells = rows[i].getElementsByTagName('td');
            var averageTemp = averageValue(cells);
            var averageCell = cells[cells.length-1];
            averageCell.textContent = averageTemp;
        }
    }

function averageValue(cells){
    var sum = 0;
        for(var i = 1; i < cells.length - 1; i++){
            var currentValue = cells[i].textContent;
            //the textContent returns string
            sum = sum + parseInt(currentValue);
        }
    var average = sum / (cells.length - 2);
    return average;
}

function findTemperatures(){
    var minTemp = parseInt(document.getElementsById('min-temp').value);
    if(isNaN(minTemp)){
        alert("Enter a number")
        findTemperatures();
    }
    var table = document.getElementById("temperature-table"); 
    var rows = table.getElementsByTagName("tr"); 
    for (var i = 1; i < rows.length; i++){
        var cells = rows[i].getElementsByTagName("td");
    }
}

function matchesTemp(minTemp, cells){

}
calculateAverage()

