/* 
function tableRow() {
    var table = document.getElementById("temperature-table");
    var rows = table.getElementsByTagName("tr");
    return rows;
}
*/

function calculateAverage(){
    //saves the reference to table node
    var table = document.getElementById('temperature-table');
    //saves reference to rows node list in the table
    var rows = table.getElementsByTagName('tr');
        //rotates over the rows and saves the rows' node list per line in a variable called cells
        for (var i = 1; i < rows.length; i++){
            var cells = rows[i].getElementsByTagName('td');
            //calls averageValue function with parameter cells 
            var averageTemp = averageValue(cells);
            //chooses the last cell in a row node list
            var averageCell = cells[cells.length-1];
            //gives the last data cell of each row average value of the cells per row
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
    clearFormatting();
    //saves the input button's node element in minTemp variable
    var minTemp = parseInt(document.getElementById('min-temp').value);
    var table = document.getElementById("temperature-table"); 
    var rows = table.getElementsByTagName("tr"); 


    for (var i = 1; i < rows.length; i++){
        var cells = rows[i].getElementsByTagName("td");
        if (matchesTemp(minTemp, cells)){
            rows[i].className = "markedRow";
        }
    }
}

function matchesTemp(minTemp, cells){
    var hasValue = false;
    for (var i = 1; i < cells.length - 1; i++){
        //saves the current value of the datacell
        var currentValue = parseInt(cells[i].textContent)
        //for each current value checks if it's bigger or equal to input value in minTemp field
        if (currentValue >= minTemp) {
            //sets the hasValue to true
            hasValue = true;
            cells[i].className = "markedCell"
        }
    }
    return hasValue;
}

function clearFormatting (){
    var table = document.getElementById("temperature-table");
    var rows = table.getElementsByTagName("tr");

   for(var i = 1; i < rows.length; i++){
       rows[i].className = "";
       var cells = rows[i].getElementsByTagName("td");
       for (var j = 1; j < cells.length - 1; j++){
           cells[j].className = "";
       }
   }
}

calculateAverage();
var searchButton = document.getElementById("show-value");
searchButton.addEventListener("click", findTemperatures, false);

var clearButton = document.getElementById("clear-formatting");
clearButton.addEventListener("click", clearFormatting, false);


