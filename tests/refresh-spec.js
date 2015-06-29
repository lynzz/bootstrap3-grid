var expect = require('expect.js');
var sinon = require('sinon');
var $ = require('jquery');

$(document.body).css({
    'margin': 0,
    'padding': 0
});
require('../src/bootstrap3-grid');

var $gridElement;
var server;

describe('Refresh method tests', function() {
    beforeEach(function() {
        $gridElement = $('<div id="J_Grid"></div>').prependTo(document.body);
        server = sinon.fakeServer.create();
    });

    afterEach(function() {
        $gridElement.remove();
        server.restore();
    });

    /*it('refresh method should change contents', function(done) {
        var callCount = 0;
        var spy = sinon.stub($, 'ajax').returns({
            success: function(callback) {
                callback({
                    result: 'success',
                    data: {
                        totalRows: 10,
                        listData: createLargeArray(10, callCount * 10)
                    }
                });
                return this;
            },
            error: function() {}
        });
        $.post('http://17173.com').success(function(data) {
            console.log(data)
        });
        var grid = $gridElement.simplePagingGrid({
            dataUrl: "http://17173.com",
            minimumVisibleRows:0,
            columnKeys: ["Value"],
            pageRenderedEvent: function() {
                callCount++;
                if (callCount === 1) {
                    expect($gridElement.find('td:first').text()).to.equal('Row 0');
                    $gridElement.simplePagingGrid("refresh", "refresh1");
                }
                else {
                    expect($gridElement.find('td:first').text()).to.equal('Row 10');
                }
                spy.restore();
                done();
            }
        });

    });*/

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


