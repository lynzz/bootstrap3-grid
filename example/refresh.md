# Refreshing a data array

- order: 6

---

<link href="http://ue.17173cdn.com/a/lib/gallery/bootstrap/3.0.0/bootstrap.css" rel="stylesheet">
<link rel="stylesheet" type="text/css" href="../src/bootstrap3-grid.css">


### 使用

<div class="btn-group">
  <button class="btn btn-default" id="addBtn">添加</button>
  <button class="btn btn-default" id="emptyBtn">清空</button>
  <button class="btn btn-default" id="removeBtn">删除</button>
</div>
<div id="exampleGrid"></div>

````javascript
var $ = require('jquery');
require('../index');

$(document).ready(function() {
    var rows = [];
    var rowNumber;
    var numberOfRows = 30;
    for(rowNumber = 0; rowNumber < numberOfRows; rowNumber++) {
        rows.push({
            "OrderLineID": rowNumber,
            "Name": "Product " + rowNumber,
            "Price": Math.floor(Math.random() * 100),
            "Quantity": Math.floor(Math.random() * 100)
        });
    }

    $("#exampleGrid").simplePagingGrid({
        columnNames: ["Name", "Price ($)", "Quantity"],
        columnKeys: ["Name", "Price", "Quantity"],
        columnWidths: ["50%", "25%", "25%"],
        data: rows
    });

    $("#addBtn").click(function(ev) {
        ev.preventDefault();
        rows.splice(0, 0, { "OrderLineID": rows.length + 1, "Name": "Product" + (rows.length + 1), "Price": Math.floor(Math.random() * 100), "Quantity": Math.floor(Math.random() * 100) });
        $("#exampleGrid").simplePagingGrid("refresh");
    });

    $("#emptyBtn").click(function(ev) {
        ev.preventDefault();
        rows.length = 0;
        $("#exampleGrid").simplePagingGrid("refresh");
    });

    $("#removeBtn").click(function(ev) {
        ev.preventDefault();
        rows.splice(0,1);
        $("#exampleGrid").simplePagingGrid("refresh");
    });
});````
