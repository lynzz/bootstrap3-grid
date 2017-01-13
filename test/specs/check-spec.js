var $ = require('jquery');
$(document.body).css({
    'margin': 0,
    'padding': 0
});
require('../../src/bootstrap3-grid');

var $gridElement;

describe('Check tests', function() {
    beforeEach(function() {
        $gridElement = $('<div id="J_Grid"></div>').prependTo(document.body);
    });

    afterEach(function() {
        $gridElement.remove();
    });
    it('是否显示 checkbox', function() {
        var grid = $gridElement.simplePagingGrid({
            hasCheckbox: true,
            data: simpleData()
        });
        var $check = $gridElement.find(':checkbox');
        expect($check.length).to.equal(3);
    });

});

function simpleData() {
    return [
        {Name: "Apples", Price: 1.50},
        {Name: "Oranges", Price: 2.25}
    ];
}
