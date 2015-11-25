	$(document).ready(function(){
		$('#btnContact').bind('click',function(){
			 $('#modal').modal();
		});
		$('.grid-item').bind('click',function(){
			alert('В стадии разработки');
		});
		$('.grid').isotope({
			itemSelector: '.grid-item',
			layoutMode: 'fitRows'
		});
		$('.blockTag ul li').bind('click',function() {
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
	});