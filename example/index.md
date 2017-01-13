# 初始化

- order: 1

----

<link rel="stylesheet" type="text/css" href="../src/select.css">

## 可根据原生的 select 初始化

trigger 为 select，并默认选中 option2

````html
<select id="example1">
    <option value="">全部</option>
    <option value="0">Anna</option>
    <option value="1">na na</option>
    <option value="2">绿色</option>
</select>
<button id="btn-off" type="button">禁用</button>
<button id="btn-on" type="button">启用</button>
````

````javascript
var $ = require('jquery');
var Select = require('../src/select');
var select = new Select({
    //search: true,
    minWidth: 50,
    hasLabel: true,
    field: '#example1',
    //value: '1'
});

$('#btn-off').click(function(){
    select.disable();
});
$('#btn-on').click(function(){
    select.enable();
});

````


## 可直接传入 DOM 初始化

trigger 为任意 DOM，但必须传入 model 数据

````html
<a href="#" id="example2">请选择</a>
````

````javascript
var Select = require('../src/select');
new Select({
    field: '#example2',
    search: true,
    placeholder: '模板风格',
    //multiple: true,
    name: 'template',
    hasOptionAll: true,
    model: [
        {value:'0', text:'blue template'},
        {value:'1', text:'red template'},
        {value:'2', text:'green template'}
    ]
});
````

## 可根据原生的 input 初始化

trigger 为 input, 默认值为 1,如有设置value值，能过js配置的优先级高， 同上必须传入 model 数据

````html
<input id="example3" name="theme">
````

````javascript
var Select = require('../src/select');
new Select({
    field: '#example3',
    //value: '2',
    hasOptionAll: true,
    model: [
        {value:'0', text:'蓝色模板'},
        {value:'1', text:'红色模板'},
        {value:'2', text:'绿色模板'}
    ],
    events: {
        change: function(e, target) {
            console.log(e)
        }
    }
});
````

## 可根据原生的 input 初始化多选框

trigger 为 input, 如有设置value值，能过js配置的优先级高， 同上必须传入 model 数据

> **注：多选只支持在js配置mulitple**

````html
<input id="example4" name="theme" value="">
````

````javascript
var Select = require('../src/select');
new Select({
    field: '#example4',
    value: ['1','2'],
    multiple: true,
    maxWidth: 200,
    load: function(callback){
        //setTimeout(function() {
          callback([
            {value:'0', text:'blue templateaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa'},
            {value:'1', text:'red template'},
            {value:'2', text:'green template'},
            {value:'12', text:'green template12'}
          ]);
        //}, 0);
    }
});
````

## 异步加载数据，开启 search


````html
<input id="example5" value="12" name="theme">
````

````javascript
var Select = require('../src/select');
new Select({
    field: '#example5',
    //value: '2',
    search: false,
    maxWidth: 100,
    hasOptionAll: true,
    load: function(callback){
        setTimeout(function() {
          callback([
            {value:'0', text:'blue template,longtemplatetemplatetemplatetemplatetemplatetemplatetemplate'},
            {value:'1', text:'red template'},
            {value:'2', text:'green template'},
            {value:'12', text:'green template111'}
          ]);
        }, 0);
    }
});
````

