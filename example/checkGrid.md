# Checkbox Grid

- order: 8

---

<link href="http://ue.17173cdn.com/a/lib/gallery/bootstrap/3.0.0/bootstrap.css" rel="stylesheet">
<link rel="stylesheet" type="text/css" href="../src/bootstrap3-grid.css">


### 使用

<div class="btn-group">
  <button class="btn btn-default" id="J_CheckAll">全选</button>
  <button class="btn btn-default" id="J_UncheckAll">反选</button>
  <button class="btn btn-default" id="J_Get">获取</button>
  <button class="btn btn-default" id="J_Refresh">刷新</button>
</div>

<div id="exampleGrid"></div>

````javascript

var $ = require('jquery');
require('../index');

function initTable() {
    $("#exampleGrid").simplePagingGrid({
      hasCheckbox: true,
      columnNames: ["Name", "Price ($)", "Quantity" ,'options'],
      columnKeys: ["Name", "Price", "Quantity", null],
      //columnWidths: ["50%", "25%", "25%"],
      checkTemplate: '<input type="checkbox" class="checkbox" data-id="{{OrderLineID}}">',
      onCheck: function(data, checked, el) {
        console.log(el)
      },
      onCheckAll: function(data, checked, el) {
        console.log(el)
      },
      cellTemplates: [
        null,
        null,
        null,
        '<a href="javascript:;" class="btn-del">删除</a>'
      ],
      data: [
        { "OrderLineID": 1, "Name": "Pineapple", "Price": 1.50, "Quantity": 4 },
        { "OrderLineID": 2, "Name": "Fresh Spring Onions", "Price": 1.10, "Quantity": 40 },
        { "OrderLineID": 3, "Name": "Oranges", "Price": 0.20, "Quantity": 8 },
        { "OrderLineID": 4, "Name": "Apples", "Price": 1.50, "Quantity": 5 },
        { "OrderLineID": 5, "Name": "Raspberries", "Price": 1.50, "Quantity": 20 },
        { "OrderLineID": 6, "Name": "Blueberries", "Price": 1.50, "Quantity": 20 },
        { "OrderLineID": 7, "Name": "Pairs", "Price": 1.50, "Quantity": 8 },
        { "OrderLineID": 8, "Name": "Melons", "Price": 1.50, "Quantity": 2 },
        { "OrderLineID": 9, "Name": "Potatoes", "Price": 1.50, "Quantity": 6 },
        { "OrderLineID": 10, "Name": "Sweet Potatoes", "Price": 1.50, "Quantity": 3 },
        { "OrderLineID": 11, "Name": "Cabbages", "Price": 1.50, "Quantity": 1 },
        { "OrderLineID": 12, "Name": "Lettuce", "Price": 1.50, "Quantity": 1 },
        { "OrderLineID": 13, "Name": "Onions", "Price": 1.50, "Quantity": 25 },
        { "OrderLineID": 14, "Name": "Carrots", "Price": 1.50, "Quantity": 30 },
        { "OrderLineID": 15, "Name": "Broccoli", "Price": 1.50, "Quantity": 1 },
        { "OrderLineID": 16, "Name": "Cauliflower", "Price": 1.50, "Quantity": 1 },
        { "OrderLineID": 17, "Name": "Peas", "Price": 1.50, "Quantity": 1 },
        { "OrderLineID": 18, "Name": "Sweetcorn", "Price": 1.50, "Quantity": 2 },
        { "OrderLineID": 19, "Name": "Gooseberries", "Price": 1.50, "Quantity": 20 },
        { "OrderLineID": 20, "Name": "Spring Onions", "Price": 1.50, "Quantity": 9 },
        { "OrderLineID": 21, "Name": "Beetroot", "Price": 0.30, "Quantity": 3 },
        { "OrderLineID": 22, "Name": "Avocado", "Price": 2.30, "Quantity": 1 }]
    });
}
$(document).ready(function() {
    initTable();

    $('#J_CheckAll').on('click', function() {
      $("#exampleGrid").simplePagingGrid('checkAll', true);
    });
    $('#J_UncheckAll').on('click', function() {
      $("#exampleGrid").simplePagingGrid('checkAll', false);
    });
    $('#J_Get').on('click', function() {
      var api = $("#exampleGrid").data('plugin_simplePagingGrid');
      console.log(api.getCheckedData());
    });

    $('#J_Refresh').on('click', function() {
      var api = $("#exampleGrid").data('plugin_simplePagingGrid');
      api.refresh();
    });

});

````
