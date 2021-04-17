function calculateAverage() {
    var table = document.getElementById("temperature-table");
    var rows = table.getElementsByTagName('tr');
    
    for (var i = 1; i < rows.length; i++) {
        var cells = rows[i].getElementsByTagName('td');
        var averageTemp = averageValue(cells);
        
        var averageCell = cells[cells.length - 1];
        averageCell.textContent = averageTemp;  
    }
}

function averageValue(cells) {
    var sum = 0;
    
    for (var i = 1; i < cells.length - 1; i++) {
        var currentValue = cells[i].textContent;
        sum += parseInt(currentValue);
    }
    
    var average = sum / (cells.length - 2);
    return average; 
}

function findTemperatures() {
    clearFormatting();
    
    var minTemp = parseInt(document.getElementById('min-temp').value);
    var table = document.getElementById("temperature-table");
    var rows = table.getElementsByTagName('tr');
    
    for (var i = 1; i < rows.length; i++) {
        var cells = rows[i].getElementsByTagName('td');
        
        if (matchesTemp(minTemp, cells)) {
            rows[i].className = 'markedRow';
        }
    }
}

function matchesTemp(minTemp, cells) {
    var hasValue = false;
    
    for (var i = 1; i < cells.length - 1; i++) {
        var currentValue = parseInt(cells[i].textContent);
        
        if (currentValue >= minTemp) {
            hasValue = true;
            cells[i].className = 'markedCell';
        }
    }
    
    return hasValue;
}

function clearFormatting() {
    var table = document.getElementById('temperature-table');
    var rows = table.getElementsByTagName('tr');
    
    for (var i = 1; i < rows.length; i++) {
        rows[i].className = '';
        
        var cells = rows[i].getElementsByTagName('td');
        
        for (var j = 1; j < cells.length - 1; j++) {
            cells[j].className = '';
        }
    }
}


calculateAverage();

var searchButton = document.getElementById('show-value');
searchButton.addEventListener('click', findTemperatures, false);

var clearButton = document.getElementById('clear-formatting');
clearButton.addEventListener('click', clearFormatting, false);