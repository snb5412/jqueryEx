/**
 * 
 */
$.fn.pagination = function(opt){
	opt = $.extend({
		total : 0,
		active : 1,
		size : 'pagination-sm',
		align : 'justify-content-center'
	},opt);

	var ul = $(`<ul class="pagination ${opt.size} ${opt.align}">`);
	for (var i = 1; i <= opt.total; i++) {
		var li = $(`<li class="page-item">
		<a class="page-link" href="?page=${i}">${i}</a></li>`);
		li.appendTo(ul);
	}
	ul.find('.page-item').eq(opt.active-1).addClass('active');
	
	ul.appendTo(this);
	return this;
};