# bootstrap3-grid

---
源码来自[Simple-Paging-Grid](https://github.com/JamesRandall/Simple-Paging-Grid)，把它改为了CMD模块的

---

## 官方例子

1. Basic grid
<http://www.accidentalfish.com/simplePagingGrid/examples/basicGrid/index.html>

2. Cell templating
<http://www.accidentalfish.com/simplePagingGrid/examples/hyperlinks/index.html>

3. Sorting
<http://www.accidentalfish.com/simplePagingGrid/examples/sorting/index.html>

4. Function Binding
<http://www.accidentalfish.com/simplePagingGrid/examples/functionBinding/index.html>

5. Page Numbers
<http://www.accidentalfish.com/simplePagingGrid/examples/pageNumbers/index.html>

6. Refreshing a data array
<http://www.accidentalfish.com/simplePagingGrid/examples/dataArrayRefresh/index.html>

## Usage

It is very easy to use this module.

````html
<div class="zeus-bootstrap3-grid">
</div>
````

```javascript
seajs.use('bootstrap3-grid', function(bootstrap3Grid) {

});
```

## Api

Here is some details.

## ChangeLog

v0.6.0 2014-2-10

* 提交的参数 page 改为 pageIndex
* currentPage 改为 data.listData , totalRows 改为 data.totalCount, 并添加rowIndex
* 去掉表格的空行
