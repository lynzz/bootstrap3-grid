define("jquery/bootstrap3-grid/0.6.2/bootstrap3-grid",["$","gallery/handlebars/1.0.2/handlebars"],function(a){var b=a("$"),c=a("gallery/handlebars/1.0.2/handlebars");!function(a){function b(a,b,c){var d=(b-1)*c,e=(b-1)*c+c;return a.slice(d,e)}function d(){return!(!window.history||!history.pushState)}function e(a,b,c){var d;d=null!==b?"#{"+a+","+b+","+c+"}":"#{"+a+","+c+"}",window.history.pushState(null,null,i+d)}function f(){if(location.hash.length>0){var a=location.hash.substring(2,location.hash.length-1),b=a.split(",");return{currentPage:1*b[0],sortColumn:b.length>2?b[1]:null,sortOrder:b.length>2?b[2]:b[1]}}return null}var g="simplePagingGrid",h=a.fn[g],i=window.location.href.replace(window.location.hash,""),j=function(b,c){this._settings=c,this.$element=a(b),this.init()};j.prototype={constructor:j,_buttonBarHtml:void 0,_table:void 0,_tbody:void 0,_thead:void 0,_headerRow:void 0,_currentPage:1,_buttonBar:void 0,_firstButton:void 0,_previousButton:void 0,_nextButton:void 0,_lastButton:void 0,_pageTextPicker:void 0,_pageTextPickerBtn:void 0,_pageData:void 0,_sourceData:null,_numberOfRows:null,_sortOrder:null,_sortedColumn:null,_sortElement:null,_loadingOverlay:null,_fetchedData:!1,_firstRefresh:!0,_showingEmptyTemplate:!1,_compiledCellTemplates:null,_originalSortOrder:null,_originalSortColumn:null,init:function(){var b=this;b._currentPage=1,b.$element.empty(),b._sortOrder=this._settings.sortOrder,b._sortedColumn=this._settings.initialSortColumn,b._initCheck(),b._parseUrl(!1,!1),b._buildTable(),b._refreshData(!1),b._registerHistoryEvents(),b._table.insertBefore(b._buttonBar),a(window).resize(b._sizeLoadingOverlay),null!==b._settings.gridCreated&&b._settings.gridCreated(),b._bindCheckEvents()},_initCheck:function(){var a=this._settings,b=a.checkColumnIndex,c=[],d=[],e='<th width="30px"><input data-role="checkAll" type="checkbox" class="checkbox"/></th>',f=a.checkTemplate;if(a.hasCheckbox){var g=a.columnNames.length+1,h=this._settings.columnKeys.indexOf("rowIndex")+1;if(null!==a.cellTemplates)this._settings.cellTemplates.splice(b,h,f);else{for(var i=0;g>i;i++)c[i]=i==b?f:null;this._settings.cellTemplates=c}if(null!==a.headerTemplates)this._settings.headerTemplates.splice(b,0,e);else{for(var j=0;g>j;j++){if(j==b){d[j]=e;break}d[j]=null}this._settings.headerTemplates=d}this._settings.columnNames.splice(b,h,"rowIndex"),this._settings.columnKeys.splice(b,h,"rowIndex"),this._settings.columnWidths.splice(b,h,"50px")}},_bindCheckEvents:function(){if(this._settings.hasCheckbox){var b=this,c=b._settings,d=b.$element.find("tbody"),e=this.$element.find("[data-role=checkAll]").first();b.$element.on("click","input[type=checkbox]",function(f){f.stopPropagation();var g=a(this),h=d.find("input[type=checkbox]");if("checkAll"==g.data("role"))h.prop("checked",g.prop("checked")),c.onCheckAll&&c.onCheckAll.call(b,b._pageData);else{var i=h.length,j=b.$element.find("tbody :checked").length,k=h.index(this);e.prop("checked",j===i),c.onCheck&&c.onCheck.call(b,b._pageData[k])}}),b.$element.on("click","tbody > tr",function(b){var c=a(b.currentTarget),d=c.find("[type=checkbox]").first();d.trigger("click")})}},getCheckedData:function(){var b=[],c=this;return this.$element.find("tbody").find(":checkbox").each(function(d){a(this).prop("checked")&&b.push(c._pageData[d])}),b},checkAll:function(a){var b=this.$element.find("[data-role=checkAll]").first();!b.prop("checked")&&a&&b.trigger("click"),b.prop("checked")&&!a&&b.trigger("click")},_resetCheck:function(){this.$element.find("[data-role=checkAll]").first().prop("checked",!1)},_buildTable:function(){var b=this,c=b._settings;b._table=a(b._settings.templates.tableTemplate()),b._thead=b._table.find("thead"),b._tbody=b._table.find("tbody"),null!==b._settings.columnDefinitionTemplates&&a.each(b._settings.columnDefinitionTemplates,function(c,d){a(d(c)).insertBefore(b._thead)}),b._settings.showHeader?(b._headerRow=a("<tr>").appendTo(b._thead),a.each(b._settings.columnNames,function(d,e){function f(){b._sortedColumn=m,null!=b._sortElement&&b._sortElement.css("opacity","0.5"),b._sortElement="asc"===b._sortOrder?h:i,b._sortElement.css("opacity","1.0")}function g(a){a.preventDefault(),b._sortedColumn===m&&(b._sortOrder="asc"===b._sortOrder?"desc":"asc"),f(),b._refreshData()}var h,i,j,k,l=b._settings.sortable[d],m=b._settings.columnKeys[d],n=null;k=b._settings.columnWidths.length>d?b._settings.columnWidths[d]:"",b._settings.hasCheckbox&&d==c.checkColumnIndex?n=a(b._settings.headerTemplates[d]):null!==b._settings.headerTemplates&&d<b._settings.headerTemplates.length&&null!=b._settings.headerTemplates[d]&&(n=a(b._settings.headerTemplates[d]({width:k,title:e}))),l?(null===n&&(n=a(b._settings.templates.sortableHeaderTemplate({width:k,title:e}))),j=n.find(".sort-container"),h=n.find(".sort-ascending"),i=n.find(".sort-descending"),null!==j?j.click(function(a){g(a)}):(h.click(function(a){g(a)}),i.click(function(a){g(a)})),b._sortedColumn===m&&f()):null===n&&(n=a(b._settings.templates.headerTemplate({width:k,title:e}))),b._headerRow.append(n)})):b._thead.remove(),b._table.addClass(b._settings.tableClass),b._buildButtonBar()},_numberOfPages:function(){return null!==this._numberOfRows?Math.ceil(this._numberOfRows/this._settings.pageSize):0},_getPageRange:function(){var a,b,c=this._numberOfPages();return a=this._currentPage+1-this._settings.numberOfPageLinks/2,1>a?(a=1,b=this._settings.numberOfPageLinks,b>c&&(b=c)):(b=this._currentPage+1+this._settings.numberOfPageLinks/2-1,b>c&&(b=c,a=b-this._settings.numberOfPageLinks,1>a&&(a=1))),{firstPage:a,lastPage:b}},_registerHistoryEvents:function(){var a=this;a._settings.urlUpdatingEnabled&&d()&&window.addEventListener("popstate",function(){a._parseUrl(!0,!1)})},_updateUrl:function(){var a=this;a._settings.urlUpdatingEnabled&&d()&&a._settings.urlWriter(a._currentPage,a._sortedColumn,a._sortOrder)},_parseUrl:function(b,c){var e=this;if(e._settings.urlUpdatingEnabled&&d()){var f=e._settings.urlReader();if(null!==f?(e._currentPage=f.currentPage,e._sortOrder=f.sortOrder,e._sortedColumn=f.sortColumn):(e._currentPage=e._settings.pageNumber,e._sortOrder=e._settings.sortOrder,e._sortedColumn=e._settings.initialSortColumn),b&&(e._refreshData(c),a(".sort-ascending").css("opacity","0.5"),a(".sort-descending").css("opacity","0.5"),null!==e._sortedColumn)){var g=e._settings.columnKeys.indexOf(e._sortedColumn),h=e._table.find("th"),i=a(h[g]);i.find("asc"===e._sortOrder?".sort-ascending":".sort-descending").css("opacity","1.0")}}},_buildButtonBar:function(){function b(){var b=c._pageTextPicker.val();a.isNumeric(b)&&(c._currentPage=1*b,c._currentPage<1&&(c._currentPage=1),c._currentPage>f&&(c._currentPage=f),c._refreshData())}var c=this;if(!c._showingEmptyTemplate){var d,e=c._buttonBar,f=c._numberOfPages(),g=c._getPageRange(),h=!1;void 0!==c._pageTextPicker&&(h=c._pageTextPicker.is(":focus"));var i={pageNumbersEnabled:null!==c._numberOfRows&&c._settings.showPageNumbers,isFirstPage:1==c._currentPage,isLastPage:null!==c._numberOfRows?c._currentPage>=f:void 0!==c._pageData&&c._pageData.length<c._settings.pageSize,currentPage:c._currentPage,totalPages:f,showGotoPage:null!==c._numberOfRows&&c._settings.showGotoPage,pages:[]};for(d=g.firstPage;d<=g.lastPage;d++)i.pages.push({pageNumber:d,displayPageNumber:d,isCurrentPage:d==c._currentPage});c._buttonBarHtml=c._settings.templates.buttonBarTemplate(i),c._buttonBar=a(c._buttonBarHtml),c._firstButton=c._buttonBar.find(".first"),c._previousButton=c._buttonBar.find(".previous"),c._nextButton=c._buttonBar.find(".next"),c._lastButton=c._buttonBar.find(".last"),c._pageTextPicker=c._buttonBar.find(".pagetextpicker"),c._pageTextPickerBtn=c._buttonBar.find(".pagetextpickerbtn"),c._previousButton.click(function(a){a.preventDefault(),i.isFirstPage||(c._currentPage--,c._refreshData())}),c._nextButton.click(function(a){a.preventDefault(),i.isLastPage||(c._currentPage++,c._refreshData())}),null===c._numberOfRows?(c._firstButton.remove(),c._lastButton.remove()):(c._firstButton.click(function(a){a.preventDefault(),i.isFirstPage||(c._currentPage=1,c._refreshData())}),c._lastButton.click(function(a){a.preventDefault(),i.isLastPage||(c._currentPage=f,c._refreshData())})),c._buttonBar.find(".pagenumber").click(function(b){var d=a(b.target);b.preventDefault(),c._currentPage=1*d.data("pagenumber"),c._refreshData()}),i.showGotoPage&&(c._pageTextPicker.keydown(function(a){var c=a.keyCode?a.keyCode:a.which;13==c&&b()}),c._pageTextPickerBtn.click(function(a){a.preventDefault(),b()})),void 0!==e?e.replaceWith(c._buttonBar):c.$element.append(c._buttonBar),h&&c._pageTextPicker.focus(),c._settings.pagingEnabled||c._buttonBar.hide()}},_sizeLoadingOverlay:function(){null!=this._loadingOverlay&&(this._loadingOverlay.width(this.$element.width()),this._loadingOverlay.height(this.$element.height()))},_showLoading:function(){this._settings.showLoadingOverlay&&(this._loadingOverlay=a(this._settings.templates.loadingOverlayTemplate()),this._sizeLoadingOverlay(),this.$element.prepend(this._loadingOverlay))},_hideLoading:function(){null!==this._loadingOverlay&&(this._loadingOverlay.remove(),this._loadingOverlay=null)},_parseSourceData:function(b){this._sourceData=b,a.isArray(b)?(this._pageData=b,this._numberOfRows=null):a.isPlainObject(b)?(a.each(b.data.listData,function(a){b.data.listData[a].rowIndex=a+1}),this._pageData=b.data.listData,this._numberOfRows=b.data.totalCount):(null===b||void 0===b)&&(this._pageData=[],this._numberOfRows=0),this._deferredCellTemplateCompilation()},_deferredCellTemplateCompilation:function(){var b=this;if(null===b._compiledCellTemplates&&null!==b._settings.cellTemplates){var d=a.isArray(b._sourceData);b._compiledCellTemplates=[],a.each(b._settings.cellTemplates,function(a,e){if(null!==e){var f,g=[],h=e;for(f=0;f<b._settings.pageSize;f++){var i=h;i=d?"{{#with this.["+f+"]}}"+i+"{{/with}}":"{{#with currentPage.["+f+"]}}"+i+"{{/with}}",g.push(c.compile(i))}b._compiledCellTemplates.push(g)}else b._compiledCellTemplates.push(null)})}},_refreshData:function(c,d){var e,f,g,h,i=this;if(void 0===c&&(c=!0),void 0!==d&&(a.isArray(d)?i._settings.data=d:(i._settings.dataUrl=d,i._currentPage=1)),i._currentPage=Math.floor(i._currentPage),null!==i._settings.dataFunction)i._settings.dataFunction(i._currentPage,i._settings.pageSize,i._sortedColumn,i._sortOrder,function(a){i._fetchedData=!0,i._parseSourceData(a),i._loadData(),i._buildButtonBar(),i._hideLoading(),c&&i._updateUrl(),null!==i._settings.pageRenderedEvent&&i._settings.pageRenderedEvent(i._pageData)});else if(null!==i._settings.dataUrl){void 0===i._pageData&&(i._loadData(),i._pageData=[]),i._showLoading();var j=i._settings.postDataFunction;j="function"==typeof j?j():{};var k=a.extend({pageNo:i._currentPage,pageSize:i._settings.pageSize,sortColumn:i._sortedColumn,sortOrder:i._sortOrder},j);a.ajax({url:i._settings.dataUrl,cache:!1,dataType:"json",data:k,success:function(a){i._fetchedData=!0,i._parseSourceData(a),i._loadData(),i._buildButtonBar(),i._hideLoading(),c&&i._updateUrl(),null!==i._settings.pageRenderedEvent&&i._settings.pageRenderedEvent(i._pageData)},error:function(a,b,c){null!==i._settings.ajaxError&&i._settings.ajaxError(a,b,c)}})}else h=null,a.isArray(i._settings.data)?(h=i._settings.data,i._numberOfRows=i._settings.data.length):a.isPlainObject(i._settings.data)&&(h=i._settings.data.currentPage,i._numberOfRows=i._settings.data.currentPage.length),e=null===i._sortedColumn?h:h.sort(function(b,c){return f="asc"===i._sortOrder?b[i._sortedColumn]:c[i._sortedColumn],g="asc"===i._sortOrder?c[i._sortedColumn]:b[i._sortedColumn],a.isNumeric(f)?g>f?1:f>g?-1:0:f.localeCompare(g)}),i._numberOfPages()<i._currentPage&&(i._currentPage=i._numberOfPages()-1),i._fetchedData=!0,i._sourceData=i._settings.data,i._pageData=null!==i._sourceData?b(e,i._currentPage,i._settings.pageSize):[],i._deferredCellTemplateCompilation(),i._loadData(),i._buildButtonBar(),c&&i._updateUrl(),null!==i._settings.pageRenderedEvent&&i._settings.pageRenderedEvent(i._pageData)},_loadData:function(){var b=this;if(b._settings.hasCheckbox&&b._resetCheck(),void 0!==b._pageData&&0===b._pageData.length&&1==b._currentPage&&null!==b._settings.templates.emptyTemplate)b.$element.empty(),b._buttonBar=void 0,b._table=void 0,b.$element.append(b._settings.templates.emptyTemplate()),b._table=b.$element.find("table"),b._thead=b._table.find("thead"),b._tbody=b._table.find("tbody"),b._showingEmptyTemplate=!0,null!==b._settings.emptyTemplateCreated&&b._settings.emptyTemplateCreated();else{b._showingEmptyTemplate&&(b.$element.empty(),b._showingEmptyTemplate=!1,b._buildTable(),b._table.insertBefore(b._buttonBar),null!==b._settings.gridCreated&&b._settings.gridCreated());var c=0;b._tbody.empty();var d;null!==b._sourceData&&(a.isArray(b._sourceData)?(d=b._sourceData,b._sourceData=b._pageData):(d=b._sourceData.currentPage,b._sourceData.currentPage=b._pageData));var e=void 0===b._pageData?[]:b._pageData;a.each(e,function(d,e){if(d<b._settings.pageSize){var f=a(b._settings.rowTemplates[c](e));c++,c>=b._settings.rowTemplates.length&&(c=0),a.each(b._settings.columnKeys,function(c,g){var h;if(h=null!==b._settings.cellContainerTemplates&&c<b._settings.cellContainerTemplates.length&&null!==b._settings.cellContainerTemplates[c]?a(b._settings.cellContainerTemplates[c](c)):a("<td>"),null!==b._compiledCellTemplates&&null!==b._compiledCellTemplates[c]&&d<b._compiledCellTemplates[c].length&&null!==b._compiledCellTemplates[c][d])h.html(b._compiledCellTemplates[c][d](b._sourceData));else{var i=e[g];h.text(i)}f.append(h)}),b._tbody.append(f),null!==b._settings.rowCreatedEvent&&b._settings.rowCreatedEvent(f,e)}}),null!==b._sourceData&&(a.isArray(b._sourceData)?b._sourceData=d:b._sourceData.currentPage=d)}b._fetchedData&&b._firstRefresh&&(b._firstRefresh=!1)},refresh:function(a){this._refreshData(!1,a)},currentPageData:function(a){a(this._pageData)}},a.fn[g]=function(b){var d=arguments,h=a.extend({buttonBarTemplate:'<div class="clearfix form-inline">                                     {{#if showGotoPage}}                                         <div class="pull-right form-group" style="padding-left: 1em;">                                             <div class="input-group" style="width: 110px;">                                                 <input class="form-control pagetextpicker" type="text" value="{{currentPage}}" />                                                 <span class="input-group-btn">                                                     <button class="btn btn-default pagetextpickerbtn" type="button">Go</button>                                                 </span>                                             </div>                                         </div>                                     {{/if}}                                     <ul class="pagination pull-right" style="margin-top: 0px">                                         {{#if isFirstPage}}                                             {{#if pageNumbersEnabled}}                                                 <li><a href="#" class="first"><span class="glyphicon glyphicon-fast-backward" style="opacity: 0.5"></span></a></li>                                             {{/if}}                                             <li><a href="#" class="previous"><span class="glyphicon glyphicon-step-backward" style="opacity: 0.5"></span></a></li>                                         {{/if}}                                         {{#unless isFirstPage}}                                             {{#if pageNumbersEnabled}}                                                 <li><a href="#" class="first"><span class="glyphicon glyphicon-fast-backward"></span></a></li>                                             {{/if}}                                             <li><a href="#" class="previous"><span class="glyphicon glyphicon-step-backward"></span></a></li>                                         {{/unless}}                                         {{#if pageNumbersEnabled}}                                             {{#each pages}}                                                 {{#if isCurrentPage}}                                                     <li class="active"><a href="#" class="pagenumber" data-pagenumber="{{pageNumber}}">{{displayPageNumber}}</a></li>                                                 {{/if}}                                                 {{#unless isCurrentPage}}                                                     <li><a href="#" class="pagenumber" data-pagenumber="{{pageNumber}}">{{displayPageNumber}}</a></li>                                                 {{/unless}}                                             {{/each}}                                         {{/if}}                                         {{#if isLastPage}}                                             <li><a href="#" class="next"><span class="glyphicon glyphicon-step-forward" style="opacity: 0.5"></span></a></li>                                             {{#if pageNumbersEnabled}}                                                 <li><a href="#" class="last"><span class="glyphicon glyphicon-fast-forward" style="opacity: 0.5"></span></a></li>                                             {{/if}}                                         {{/if}}                                         {{#unless isLastPage}}                                             <li><a href="#" class="next"><span class="glyphicon glyphicon-step-forward"></span></a></li>                                             {{#if pageNumbersEnabled}}                                                 <li><a href="#" class="last"><span class="glyphicon glyphicon-fast-forward"></span></a></li>                                             {{/if}}                                         {{/unless}}                                     </ul>                                 </div>',tableTemplate:"<table><thead></thead><tbody></tbody></table>",headerTemplate:'<th width="{{width}}">{{title}}</th>',sortableHeaderTemplate:'<th width="{{width}}">{{title}}<div class="sort-container pull-right"><span class="glyphicon glyphicon-arrow-up sort-ascending" style="opacity: 0.5"></span><span class="glyphicon glyphicon-arrow-down sort-descending" style="opacity: 0.5"></span></div></th>',emptyCellTemplate:"<td>&nbsp;</td>",loadingOverlayTemplate:'<div class="loading"></div>',currentPageTemplate:'<span class="page-number">{{pageNumber}}</span>',pageLinkTemplate:'<li><a class="page-number" href="#">{{pageNumber}}</a></li>',emptyTemplate:null},b.templates),i=a.extend({pageSize:10,columnWidths:[],cellTemplates:null,cellContainerTemplates:null,columnDefinitionTemplates:null,headerTemplates:null,rowTemplates:["<tr>"],sortable:[],sortOrder:"asc",initialSortColumn:null,tableClass:"table",dataFunction:null,dataUrl:null,data:null,postDataFunction:null,minimumVisibleRows:10,showLoadingOverlay:!1,showPageNumbers:!0,showGotoPage:!0,numberOfPageLinks:10,pageRenderedEvent:null,rowCreatedEvent:null,ajaxError:null,showHeader:!0,pageNumber:1,pagingEnabled:!0,urlWriter:e,urlReader:f,urlUpdatingEnabled:!1,hasCheckbox:!1,checkColumnIndex:0,checkTemplate:'<input type="checkbox" class="checkbox">',onCheckAll:null,onCheck:null,emptyTemplateCreated:null,gridCreated:null},b);i.templates={},a.each(h,function(a,b){i.templates[a]=null!==b?c.compile(b):null});var k=["cellContainerTemplates","columnDefinitionTemplates","headerTemplates","rowTemplates"];if(a.each(k,function(b,d){var e=i[d];null!==e&&a.each(e,function(a){null!==e[a]&&(e[a]=c.compile(e[a]))})}),void 0===i.columnKeys&&null!==i.data&&i.data.length>0){var l;i.columnKeys=[];for(l in i.data[0])i.columnKeys.push(l)}return void 0===i.columnNames&&(i.columnNames=void 0!==i.columnKeys?i.columnKeys.slice(0):[]),this.each(function(){var b=a.data(this,"plugin_"+g),c=d.length>0&&("string"==typeof d[0]||d[0]instanceof String);b&&c?b[d[0]].apply(b,Array.prototype.slice.call(d,1)):a.data(this,"plugin_"+g,new j(this,i))})},a.fn[g].Constructor=j,a.fn[g].noConflict=function(){return a.fn[g]=h,this}}(b)});
