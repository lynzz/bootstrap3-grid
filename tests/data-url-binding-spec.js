define(function(require) {
    var expect = require('expect');
    var sinon = require('sinon');

    $(document.body).css({
        'margin': 0,
        'padding': 0
    });
    require('../src/bootstrap3-grid');

    var $gridElement;

    describe('表格配置异步请求地址测试', function() {
        beforeEach(function() {
            $gridElement = $('<div id="J_Grid"></div>').prependTo(document.body);
        });

        afterEach(function() {
            $gridElement.remove();
        });

        /*it('when bound to a data URL the URL is called', function(done) {
            var spy = sinon.stub($, 'ajax').returns({
                success: function(callback) {
                    callback({
                        result: 'success',
                        data: {
                            totalRows: 2,
                            listData: simpleData()
                        }
                    });
                    return this;
                },
                error: function() {}
            });
            $.post('http://17173.com').success(function(data) {
                console.log(data)
            })
            var grid = $gridElement.simplePagingGrid({
                dataUrl: "http://17173.com",
                minimumVisibleRows:0,
                columnKeys: ["Name", "Price"],
                pageRenderedEvent: function(data) {
                    console.log(data)
                }
            });
            var tr = grid.find('tbody').children();
            //console.log(grid.html())
            expect(tr.length).to.be.equal(2);
            spy.restore();
            done();
        });*/

    });

    function simpleData() {
        return [
            {Name: "Apples", Price: 1.50},
            {Name: "Oranges", Price: 2.25}
        ];
    }

});

