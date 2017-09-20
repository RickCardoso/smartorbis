function btnSlide(button,element){

 	$(button).click(function(){
        $(element).slideToggle();

        if(button  == ".menuMobile"){

    		$(this).toggleClass('closer');
    	}

    });



}




$(document).ready(function(){
   

	btnSlide(".menuMobile",".navMobile");

	$("#btn-host").click(function(){
		$(this).siblings().removeClass('active');
		$(this).addClass('active');
		$('.divTable > div').hide();
		$('#table-1').show();
	});

	$("#btn-pod").click(function(){
		$(this).siblings().removeClass('active');
		$(this).addClass('active');
		$('.divTable > div').hide();
		$('#table-2').show();
	});

	$("#btn-beh").click(function(){
		$(this).siblings().removeClass('active');
		$(this).addClass('active');
		$('.divTable > div').hide();
		$('#table-3').show();
	});

	$("#btn-beh2").click(function(){
		$(this).siblings().removeClass('active');
		$(this).addClass('active');
		$('.divTable > div').hide();
		$('#table-4').show();
	});


	$(".box").click(function(){
				
		
			
			$(this).addClass("checked");
			

		
	});

	$("#save").click(function(){
				
			
			$('#myModal').hide();

	});


	$("#cancel").click(function(){
				
			
			$('#myModal').hide();

	});




});

$(window).resize(function(){
	var width = jQuery(window).width();

	if(width > 1024){
		$('.navMobile').hide();
	}

});