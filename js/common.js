
$(document).ready(function(){
    preventDefaultAnchor();
    scrollEvent_Tit('#main .scroll_event'); 
    
    $('body').addClass('active');
    $('h2.title').find('.text_ani').addClass('on');

    const tweescroll = KUTE.fromTo(
      '.scroll',
      {top:0, opacity:1},
      {top:100, opacity:0},
      { repeat:Infinity, easing:'easingCubicOut', duration:1500, yoyo:false}
    ).start();    

  $('.gnb li a').on('click', function(){
      $('html,body').animate({scrollTop:$(this.hash).offset().top}, 500);
  });

  $('.gnbM_btn').on('click', function() {
    if($(this).hasClass('active')){
      $(this).removeClass('active');
      $('#header').removeClass('white');
      $('#header nav').slideUp(200);
    }else{
      $(this).addClass('active');      
      $('#header').addClass('white'); 
      $('#header nav').slideDown(200);
    }
  });
   
});

function funLoad(){
	var Cheight = $(window).height();
	$('#intro').css({'height':Cheight+'px'});
	$('#detail').css({'margin-top':Cheight+'px'});
}

window.onload = funLoad;
window.onresize = funLoad;

$(window).scroll(function() {	
  scrollEvent_Tit('#main .scroll_event');
  var scrollTop = $(window).scrollTop();
  if (scrollTop > 0){
    $('#header').addClass('fixed');
  }else{
    $('#header').removeClass('fixed');
  }  
});

function scrollEvent_Tit(selector) {
      
  $(selector).each(function() {
      var $selector = $(this);
      var start = $selector.offset().top - $(window).innerHeight();
      var end = $selector.offset().top + $selector.innerHeight();
      var scrollAmt = $(document).scrollTop();        
      
      if (scrollAmt < start) {            
         
      } else if (scrollAmt > end) {
         
      } else {
          if( $selector.hasClass('on') === false) {
              
          }
          $selector.addClass('on');
      }  
  });     
}

function preventDefaultAnchor() {
  $(document).on('click', 'a[href="#"]', function(e) {
    e.preventDefault();
  });
}



