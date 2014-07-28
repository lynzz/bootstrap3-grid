# History

---

## 0.6.2

`NEW` 添加 checkbox 支持

`fixed` 修复 pageSize为3且列数为3时， cellTemplates无效

`CHANGED` 默认不启用 加载等待提示 和 url更新

`fixed` 修复 rowTemplate 无效

`CHANGED` 页面开始索引改为 1

`NEW` 有checkbox时，添加行点击事件

`CHANGED` 请求类型改为 get

`CHANGED` 请求参数 pageIndex 改为 pageNo

`NEW` onCheck回调 添加 check 参数

`fixed` check 事件绑定之前先进行销毁,点击 a 链接不触发 check 事件

`NEW` onPage 与 onSort

`fixed` 刷新后 check 时数据没返回问题

## 0.6.1

`CHANGED` 去掉 bootstrap 2 的支持

`improved` 改进文档

`improved` 测试用例改用 mocha


## 0.6.0

`improved` 提交的参数 page 改为 pageIndex

`improved` currentPage 改为 data.listData , totalRows 改为 data.totalCount, 并添加rowIndex

`CHANGED` 去掉表格的空行
