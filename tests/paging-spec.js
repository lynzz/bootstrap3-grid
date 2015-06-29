var expect = require('expect.js');
var $ = require('jquery');

$(document.body).css({
    'margin': 0,
    'padding': 0
});
require('../src/bootstrap3-grid');

var $gridElement;

describe('分页测试', function() {
    beforeEach(function() {
        $gridElement = $('<div id="J_Grid"></div>').prependTo(document.body);
    });

    afterEach(function() {
        $gridElement.remove();
    });


    it("created grid has a previous page button", function() {
        var grid = $gridElement.simplePagingGrid({data: simpleData()});
        var buttonbar = grid.find("div.clearfix");
        var previousPageBtn = buttonbar.find('li a.previous');

        expect(previousPageBtn.length).to.equal(1);
    });

    it("previous page button is disabled", function() {

        var grid = $gridElement.simplePagingGrid({data: simpleData()});
        var buttonbar = grid.find("div.clearfix");
        var previousPageBtn = buttonbar.find('li a.previous span');

        expect(previousPageBtn.css('opacity')).to.equal('0.5');
    });

    it("created grid has a next page button", function() {

        var grid = $gridElement.simplePagingGrid({data: simpleData()});
        var buttonbar = grid.find("div.clearfix");
        var nextPageBtn = buttonbar.find('li a.next');

        expect(nextPageBtn.length).to.equal(1);
    });

    it("next page button is disabled", function() {

        var grid = $gridElement.simplePagingGrid({data: simpleData()});
        var buttonbar = grid.children("div.clearfix");
        var nextPageBtn = buttonbar.find('li a.next span');

        expect(nextPageBtn.css('opacity')).to.equal('0.5');
    });

    it("next page button is enabled when there are more than 15 rows and are viewing first page", function() {

        var grid = $gridElement.simplePagingGrid({data: createLargeArray(15)});
        var buttonbar = grid.children("div.clearfix");
        var nextPageBtn = buttonbar.find('li a.next span');

        expect(nextPageBtn.css('opacity')).to.equal('1');
    });

    it("previous page button is disabled when there are 15 rows and are viewing first page", function() {

        var grid = $gridElement.simplePagingGrid({data: createLargeArray(15)});
        var buttonbar = grid.children("div.clearfix");
        var previousPageBtn = buttonbar.find('li a.previous span');

        expect(previousPageBtn.css('opacity')).to.equal('0.5');
    });

    it("next page button is disabled when there are more than 15 rows and are viewing second page", function() {

        var grid = $gridElement.simplePagingGrid({data: createLargeArray(15), pageNumber: 1});
        var buttonbar = grid.children("div.clearfix");
        var nextPageBtn = buttonbar.find('li a.next span');

        expect(nextPageBtn.css('opacity')).to.equal('0.5');
    });

    it("previous page button is enabled when there are 15 rows and are viewing second page", function() {

        var grid = $gridElement.simplePagingGrid({data: createLargeArray(15), pageNumber: 1});
        var buttonbar = grid.children("div.clearfix");
        var previousPageBtn = buttonbar.find('li a.previous span');

        expect(previousPageBtn.css('opacity')).to.equal('1');
    });
});

function simpleData() {
    return [
        {Name: "Apples", Price: 1.50},
        {Name: "Oranges", Price: 2.25}
    ];
}

function createLargeArray(numberOfRows, startAtIndex) {
    if (numberOfRows === undefined) {
        numberOfRows = 15;
    }
    if (startAtIndex === undefined) {
        startAtIndex = 0;
    }

    var rowNumber;
    var rows = [];
    for (rowNumber = startAtIndex; rowNumber < (startAtIndex + numberOfRows); rowNumber++) {
        rows.push({Value: "Row " + rowNumber });
    }
    return rows;
}


