define(function(require) {
    var expect = require('expect');
    //window.$ = require('$');
    $(document.body).css({
        'margin': 0,
        'padding': 0
    });
    require('../src/bootstrap3-grid');

    var $gridElement;

    describe('核心测试', function() {
        beforeEach(function() {
            $gridElement = $('<div id="J_Grid"></div>').prependTo(document.body);
        });

        afterEach(function() {
            $gridElement.remove();
        });
        it('插件冲突测试', function() {
            var simplePagingGrid = $.fn.simplePagingGrid.noConflict();
            expect(!$.fn.simplePagingGrid).to.equal(true);
            $.fn.simplePagingGrid = simplePagingGrid;
        });

        it('jQuery上是否存在simplePagingGrid', function() {
            expect($.fn.simplePagingGrid).not.to.be(undefined)
        });

        it('调用插件', function() {
            expect($gridElement).to.equal($gridElement.simplePagingGrid({data: simpleData()}))
        });

        it('创建的表格是否有table元素', function() {
            var grid = $gridElement.simplePagingGrid({data: simpleData()});
            var table = grid.children('table');

            expect(table.length).to.equal(1);
        });

        it('创建的表格是否有类table', function() {
            var grid = $gridElement.simplePagingGrid({data: simpleData()});
            var table = grid.children('table.table');

            expect(table.length).to.equal(1);
        });

        it("创建的表格是否有div.clearfix", function() {
            var grid = $gridElement.simplePagingGrid({data: simpleData()});
            var clearfix = grid.children("div.clearfix");

            expect(clearfix.length).to.equal(1);
        });

        it("创建后的表格只包含两子节点(table.table 和 div.clearfix)", function() {
            var grid = $gridElement.simplePagingGrid({data: simpleData()});

            expect(grid.children.length).to.equal(2);
        });

        it("创建的表格是否清掉先前的内容", function() {
            var div = $("<div><span class='previousContents'>hello world</span></div>");
            var grid = $gridElement.simplePagingGrid({data: simpleData()});

            expect(grid.find('.previousContents').length).to.equal(0);
        });

        it("测试表格是否包含thead", function () {
            var grid = $gridElement.simplePagingGrid({data: simpleData()});
            var table = grid.children("table");
            var thead = table.children("thead");

            expect(thead.length).to.equal(1);
        })

        it("测试表格是否包含tbody", function() {
            var grid = $gridElement.simplePagingGrid({data: simpleData()});
            var table = grid.children("table");
            var tbody = table.children("tbody");

            expect(tbody.length).to.equal(1);
        });

        it("测试表格显示的行数", function() {
            var grid = $gridElement.simplePagingGrid({data: simpleData()});
            var table = grid.children("table");
            var tbody = table.children("tbody");

            expect(tbody.children('tr').length).to.equal(2);
        });


    });

    function simpleData() {
        return [
            {Name: "Apples", Price: 1.50},
            {Name: "Oranges", Price: 2.25}
        ];
    }

});

