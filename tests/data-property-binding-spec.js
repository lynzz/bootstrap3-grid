define(function(require) {
    var expect = require('expect');
    $(document.body).css({
        'margin': 0,
        'padding': 0
    });
    require('../src/bootstrap3-grid');

    var $gridElement;

    describe('表格配置测试', function() {
        beforeEach(function() {
            $gridElement = $('<div id="J_Grid"></div>').prependTo(document.body);
        });

        afterEach(function() {
            $gridElement.remove();
        });
 
        it("表格创建且数据渲染后的事件回调", function() {
            var grid = $gridElement.simplePagingGrid({
                data: simpleData(),
                pageRenderedEvent: function() {
                    expect(true).to.equal(true);
                }
            });
        });

        it("测试如无配置表格头显示时，单元格显示相应数据接口的key值", function() {
            var grid = $gridElement.simplePagingGrid({data: simpleData()});
            var th = grid.find("th");

            expect(th.length).to.equal(2);
            expect(th.first().text()).to.equal('Name');
            expect(th.eq(1).text()).to.equal('Price');

        });

        it("when bound to the simple data array the grid has two rows like the array", function() {
            var grid = $gridElement.simplePagingGrid({data: simpleData(), minimumVisibleRows:0});
            var table = grid.children("table");
            var tbody = table.children("tbody");

            expect(tbody.children('tr').length).to.equal(2);
        });

        it("when bound to the simple array the grid has 4 cells (2 on each row, 2 rows)", function() {
            var grid = $gridElement.simplePagingGrid({data: simpleData(), minimumVisibleRows:0});
            var table = grid.children("table");
            var tbody = table.children("tbody");

            expect(tbody.find("td").length).to.equal(4);
        });

        it("the grid shows the correct data in the simple array", function() {
            var grid = $gridElement.simplePagingGrid({data: simpleData(), minimumVisibleRows:0});
            var table = grid.children("table");
            var tbody = table.children("tbody");
            var tr0 = tbody.find("tr").eq(0);
            var tr1 = tbody.find("tr").eq(1);
            var td0 = tr0.find("td").eq(0);
            var td1 = tr0.find("td").eq(1);
            var td2 = tr1.find("td").eq(0);
            var td3 = tr1.find("td").eq(1);

            expect(td0.text()).to.equal('Apples');
            expect(td1.text()).to.equal('1.5');
            expect(td2.text()).to.equal('Oranges');
            expect(td3.text()).to.equal('2.25');
        });

        it("an element is returned when the empty template is shown", function() {
            var grid = $gridElement.simplePagingGrid({
                data: null,
                minimumVisibleRows:0,
                templates: {
                    emptyTemplate: "No rows"
                }
            });
            console.log(grid)
            expect($gridElement).to.equal(grid);
        });

        it("the empty template is shown", function() {
            var grid = $gridElement.simplePagingGrid({
                data: null,
                minimumVisibleRows:0,
                templates: {
                    emptyTemplate: "No rows"
                }
            });
            expect(grid.text()).to.equal('No rows');
        });


    });

    function simpleData() {
        return [
            {Name: "Apples", Price: 1.50},
            {Name: "Oranges", Price: 2.25}
        ];
    }

});

