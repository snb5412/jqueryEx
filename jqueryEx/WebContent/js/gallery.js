/**
 * 
 */
$.fn.gallery = function(opt){
		opt = $.extend({
			title : '갤러리',
			arr : [],
		}, opt);
	
		$(`<h1>${opt.title}</h1>`).appendTo('#gallery');
		var detail = $('<div id="detail"></div>');
		var thumbs = $('<div id="thumbs"></div>');
		var left = $('<i class="fas fa-angle-left float-left"></i>');
		var right = $('<i class="fas fa-angle-right float-right"></i>');
		
		$('<img />').attr({
			src : opt.arr[0],
			width : 400
		}).appendTo(detail);
		
		if(opt.arr.length <= 4){
			opt.arr.map(function(img){
				return `<img src="${img}" width="100"/>`;
			}).forEach(function(img){
				$(img).appendTo(thumbs);
			})
		} else {
			left.appendTo(thumbs);
			right.appendTo(thumbs);
		}
		
		thumbs.find('img').click(function(){
			var ix = $(this).index();
			detail.find('img').attr('src',opt.arr[ix]);
		})
		
		detail.appendTo(this);
		thumbs.appendTo(this);
}