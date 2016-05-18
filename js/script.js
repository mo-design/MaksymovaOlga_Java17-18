$(document).ready(function(){
			
	$("#sliders").Slider({ speed: 500 });
	$("select").selectbox();	
				
	
	function An(liClass, menuClass) {
	 
	 $(liClass).hover(
            function(){
                $(this).children(menuClass)
				.slideDown(300)
				.animate({backgroundColor: '#000000'}, 500);
            },
            function(){
                $(this).children(menuClass)
				.slideUp(300)
				.animate({backgroundColor: '#965c5c'}, 500);
            }
		
        );
		
	}
	
	An('.dropdown', '.submenu');	
	An('.dropright', '.subsubmenu');
	
			
			
});		
						
