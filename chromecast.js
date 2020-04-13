$(function(){
	$("#nav_list").find('li').eq(0).click(function(){
		var offset = $("#second").offset();

		$('html').animate({scrollTop : offset.top}, 500);
	});
	$("#nav_list").find('li').eq(1).click(function(){
		var offset = $("#fourth").offset();

		$('html').animate({scrollTop : offset.top}, 500);
	});
	$("#nav_list").find('li').eq(2).click(function(){
		var offset = $("#fifth").offset();

		$('html').animate({scrollTop : offset.top}, 500);
	});
	$("#nav_list").find('li').eq(3).click(function(){
		var offset = $("#sixth").offset();

		$('html').animate({scrollTop : offset.top}, 500);
	});

	$("#nav_btn").find('button').click(function(){
		alert("comimg soon");
	});


	/*화면 세로 길이 가져오기*/
	var height =  $(window).height()
	$('#first').css('height', height);

	/*first h1 animate*/
	setTimeout(function(){
		$('#first').find('h1').animate({opacity:"1"},2000);
	},1000);

	/*second slide*/
	$('.slide').eq(0).css({opacity:"1"});	
	$('.bg_phone').css({left:"0px"});	

	/*fourth popup*/
	$('#info_box').find('button').click(function(){
		$('#popup').css({display: "block"});
		$('#popup').css({height: height});

		$('#popup').on('scroll touchmove mousewheel', function(event) {
			event.preventDefault();     
			event.stopPropagation();     
			return false; 
		});
	});
	$('#close').click(function(){
		$('#popup').css({display: "none"});
	});

	/*fifth slide*/
	$('.fifth_text').eq(0).css({opacity: "1"});
	$('.fifth_text').eq(0).find('.circle').css({"background-color":"#4285f4","border":"solid 1px #4285f4", "color":"#ffffff"});
	
	$('#fifth_img_box').find('li').eq(0).css({opacity:"1"});
	var count = 0;
	function slide(){
		count = count+1;

		if (count == 3) {
			count = 0;
		}
		
		/*second slide*/
		$('.slide').eq(count).animate({opacity:"1"},500);
		$('.slide').eq(count-1).animate({opacity:"0"},500);
		

		if(count == 0){
			$('.bg_tablet').animate({left:"100%"},750);
			$('.bg_phone').animate({left:"0px"},750);	
		} else if(count == 1){
			$('.bg_phone').animate({left:"100%"},750);	
			$('.bg_notebook').animate({left:"0px"},750);	
		} else if(count == 2){
			$('.bg_notebook').animate({left:"100%"},750);	
			$('.bg_tablet').animate({left:"0px"},750);	
		}


		/*fifth slide*/
		$('.fifth_text').eq(count).css({opacity: "1"});
		$('.fifth_text').eq(count).find('.circle').css({"background-color":"#4285f4","border":"solid 1px #4285f4", "color":"#ffffff"});
		
		$('.fifth_text').eq(count-1).css({opacity: "0.3"});
		$('.fifth_text').eq(count-1).find('.circle').css({"background-color":"rgba(0,0,0,0)","border":"solid 1px rgba(126,126,126,1)", "color":"#7e7e7e"});
	
		$('#fifth_img_box').find('li').eq(count).css({opacity:"1"});
		$('#fifth_img_box').find('li').eq(count-1).css({opacity:"0"});
	}
	setInterval(slide, 7000);

});

$(window).scroll(function(){
	var scrollValue = $(document).scrollTop();
	if(scrollValue == 0){
		$('nav').css('background-color','rgba(255,255,255,0');
	} else{
		$('nav').css('background-color','rgba(255,255,255,1');
	}

	if(scrollValue >= 2966){
		$('#nav_list').find('li').css({"color":"#737373", "font-weight":"400"});
		$('#nav_list').find('li').eq(3).css({"color":"#4285f4", "font-weight":"600"});
	} else if(scrollValue >= 2425){
		$('#nav_list').find('li').css({"color":"#737373", "font-weight":"400"});
		$('#nav_list').find('li').eq(2).css({"color":"#4285f4", "font-weight":"600"});
	} else if(scrollValue >= 1900){
		$('#nav_list').find('li').css({"color":"#737373", "font-weight":"400"});
		$('#nav_list').find('li').eq(1).css({"color":"#4285f4", "font-weight":"600"});
	} else if(scrollValue >= 850){
		$('#nav_list').find('li').css({"color":"#737373", "font-weight":"400"});
		$('#nav_list').find('li').eq(0).css({"color":"#4285f4", "font-weight":"600"});
	} else{
		$('#nav_list').find('li').css({"color":"#737373", "font-weight":"400"});
	}
});
