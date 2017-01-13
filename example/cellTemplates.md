# Cell Templates

- order: 2

---

<link href="http://ue.17173cdn.com/a/lib/gallery/bootstrap/3.0.0/bootstrap.css" rel="stylesheet">
<link rel="stylesheet" type="text/css" href="../src/bootstrap3-grid.css">


### 使用

<div id="exampleGrid"></div>

````javascript
var $ = require('jquery');
require('../index');

$(document).ready(function() {
    var rows = [];
    var rowNumber;
    var numberOfRows = 355;
    for(rowNumber = 0; rowNumber < numberOfRows; rowNumber++) {
        rows.push({
            "OrderLineID": rowNumber,
            "Name": "Product " + rowNumber,
            "Price": Math.floor(Math.random() * 100),
            "Quantity": Math.floor(Math.random() * 100)
        });
    }

    $("#exampleGrid").simplePagingGrid({
        cellTemplates: [null, "${{Price}}", null, "{{../message}}"],
        columnNames: ["Name", "Price", "Quantity", "Additional Payload"],
        columnKeys: ["Name", "Price", "Quantity", null],
        columnWidths: ["25%", "25%", "25%", "25%"],
        data: {
            listData: rows,
            totalRows: rows.length,
            message: "Additional payload"
        }
    });
});
````
