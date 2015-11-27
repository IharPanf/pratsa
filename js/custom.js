$('#btnContact').on('click',function(){
	 $('#modal').modal();
});
$(window).scroll(function() {
	if ($(this).scrollTop() > 0) {
		$('#up').fadeIn();	
	} else {
		$('#up').fadeOut();
	}			
});
$('#up').on('click',function(){
	$("body,html").animate({
					"scrollTop" : 0
					},"slow",function(){
									$('#up').fadeOut();	
								 });
})

//Отложенная загрузка, ждем загрузки  AngularJS		
setTimeout(function(){
		$('.grid').isotope({
			itemSelector: '.grid-item',
			layoutMode: 'fitRows'
		});
		$('.blockTag ul li').on('click',function() {
							var curAttr = $(this).attr('data-tag');
							$('.curTag').fadeOut(200,function(){
								$('.curTag').text('#'+curAttr).fadeIn();		
							});
							$('.grid').isotope({
										filter: function() {	
													var tag = false;
													var arrTags = $(this).find('.tag').text();
													arrTags = arrTags.split('#');
													$.each(arrTags,function(index,value){
														if (value == curAttr) {
															tag = true;
														}
													});
													return tag;	
													}	
													
												})
							});				
		
},1000);