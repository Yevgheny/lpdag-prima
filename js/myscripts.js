$(function(){
   $('a[href^="#l"]').click(function(){
        var target = $(this).attr('href');
        $('html, body').animate({scrollTop: $(target).offset().top}, 1000);
        return false; 
   }); 
});
		$(document).ready(function(){
  $('.bxslider').bxSlider({
        minSlides: 2,
        maxSlides: 16,
        moveSlides: 1,
        slideWidth: 270,
        slideMargin: 26,
        pager: false,
        infiniteLoop: false
    });

  $('.logos-slider').bxSlider({
        minSlides: 4,
        maxSlides: 12,
        moveSlides: 1,
        slideWidth: 270,
        slideMargin: 26,
        pager: false,
        infiniteLoop: true
    });
});

$(document).ready(function(){
  $('.main-slider').bxSlider({
      slideWidth: 1160,
      pager: true,
      controls: true,
      auto: false,
      pause: 5000,
      infiniteLoop: false
    });
}); 

/*var waypoint1 = new Waypoint({
  element: document.getElementById('type_text'),
  handler: function(direction) {    
  }
})

var text = '"Доброе имя нужно заработать."';
i = 0;
function type(){
  i++;
  if( i <= text.length )
    document.getElementById("type_text").innerHTML = text.substr(0, i);
  setTimeout( type, 50 );
}
type();*/

$(document).ready(function(){
               
  $(".input-phone").mask("+38(999)999-99-99");

  //----------Select the first tab and div by default
  
  $('.vertical_tab_nav > ul > li > a').eq(0).addClass( "selected" );
  $('.vertical_tab_nav > div > article').eq(0).css('display','block');


  //---------- This assigns an onclick event to each tab link("a" tag) and passes a parameter to the showHideTab() function
      
    $('.vertical_tab_nav > ul').click(function(e){
      
      if($(e.target).is("a")){
      
        /*Handle Tab Nav*/
        $('.vertical_tab_nav > ul > li > a').removeClass( "selected");
        $(e.target).addClass( "selected");
        
        /*Handles Tab Content*/
        var clicked_index = $("a",this).index(e.target);
        $('.vertical_tab_nav > div > article').css('display','none');
        $('.vertical_tab_nav > div > article').eq(clicked_index).fadeIn();
        
      }
      
        $(this).blur();
        return false;
      
    });
    
   
});//end ready

$(document).ready(function(){

    $('.slider-specification-1').bxSlider({
      pagerCustom: '#bx-pager-1'
    });    
});

/*--Accordeon menu--*/

$(document).ready(function(){
  var animTime = 500,
      clickPolice = false;
  
  $(document).on('touchstart click', '.acc-btn', function(){
    if(!clickPolice){
       clickPolice = true;
      
      var currIndex = $(this).index('.acc-btn'),
          targetHeight = $('.acc-content-inner').eq(currIndex).outerHeight();
   
      $('.acc-btn h2').removeClass('acc-selected');
      $(this).find('h2').addClass('acc-selected');
      
      $('.acc-content').stop().animate({ height: 0 }, animTime);
      $('.acc-content').eq(currIndex).stop().animate({ height: targetHeight }, animTime);

      setTimeout(function(){ clickPolice = false; }, animTime);
    }
    
  });
  
});

