# Function Binding

- order: 4

---

<link href="http://ue.17173cdn.com/a/lib/gallery/bootstrap/3.0.0/bootstrap.css" rel="stylesheet">
<link rel="stylesheet" type="text/css" href="../src/bootstrap3-grid.css">


### 使用

<div id="exampleGrid"></div>

````javascript
var $ = require('jquery');
require('../index');

$(document).ready(function() {
    var callIndex = 0;
    function getDataFunction(pageNumber, pageSize, sortColumn, sortOrder, callback) {
        callIndex++;
        var functionData = [
            { "OrderLineID": 1, "Name": "Pineapple", "Price": 1.50, "Quantity": 4, "CallIndex":callIndex },
            { "OrderLineID": 2, "Name": "Strawberry", "Price": 1.10, "Quantity": 40, "CallIndex":callIndex },
            { "OrderLineID": 3, "Name": "Oranges", "Price": 0.20, "Quantity": 8, "CallIndex":callIndex },
            { "OrderLineID": 4, "Name": "Apples", "Price": 1.50, "Quantity": 5, "CallIndex":callIndex },
            { "OrderLineID": 5, "Name": "Raspberries", "Price": 1.50, "Quantity": 20, "CallIndex":callIndex },
            { "OrderLineID": 6, "Name": "Pineapple", "Price": 1.50, "Quantity": 4, "CallIndex":callIndex },
            { "OrderLineID": 7, "Name": "Strawberry", "Price": 1.10, "Quantity": 40, "CallIndex":callIndex },
            { "OrderLineID": 8, "Name": "Oranges", "Price": 0.20, "Quantity": 8, "CallIndex":callIndex },
            { "OrderLineID": 9, "Name": "Apples", "Price": 1.50, "Quantity": 5, "CallIndex":callIndex },
            { "OrderLineID": 10, "Name": "Raspberries", "Price": 1.50, "Quantity": 20, "CallIndex":callIndex },
            { "OrderLineID": 11, "Name": "Pineapple", "Price": 1.50, "Quantity": 4, "CallIndex":callIndex },
            { "OrderLineID": 12, "Name": "Strawberry", "Price": 1.10, "Quantity": 40, "CallIndex":callIndex },
            { "OrderLineID": 13, "Name": "Oranges", "Price": 0.20, "Quantity": 8, "CallIndex":callIndex },
            { "OrderLineID": 14, "Name": "Apples", "Price": 1.50, "Quantity": 5, "CallIndex":callIndex },
            { "OrderLineID": 15, "Name": "Raspberries", "Price": 1.50, "Quantity": 20, "CallIndex":callIndex },
        ];
        callback(functionData.slice(pageNumber * pageSize, pageNumber * pageSize + pageSize));
    };

    $("#exampleGrid").simplePagingGrid({
        columnNames: ["Name", "Price ($)", "Quantity", "Call Index"],
        columnKeys: ["Name", "Price", "Quantity", "CallIndex"],
        columnWidths: ["50%", "20%", "20%", "10%"],
        dataFunction: getDataFunction,
        minimumVisibleRows: 10,
        templates: {
            emptyTemplate: '<p>Empty</p>'
        }
    });
});
````
