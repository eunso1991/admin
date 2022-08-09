
$(document).ready(function(){
  alert('이 페이지는 취업 지원을 위한 비상업적 포트폴리오 용도로 사용됨을 알려드립니다.');
  //preventDefaultAnchor();    
    
	$(".menuOpen_btn").click(function(){
		$("#wrapper").addClass('on');		
	});
	
	$(".menuClose_btn").click(function(){
		$("#wrapper").removeClass('on');		
	});

  $(".subMenu_1depth>li.on").find('.subMenu_2depth').show();

  $(".subMenu_1depth>li>a").click(function(e){
    e.preventDefault();	

		if($(this).parent('li').hasClass("on")){
			$(this).parent('li').removeClass("on");
			$(this).parent('li').find('.subMenu_2depth').stop().slideUp(200);
			$(this).parent('li').siblings('li').removeClass('borderNo');

		} else{
			
			$(this).parent('li').addClass("on");
			$(this).parent('li').find('.subMenu_2depth').stop().slideDown();			
			$(this).parent('li').siblings('li').find('.subMenu_2depth').stop().slideUp();
			$(this).parent('li').siblings('li').removeClass('borderNo');
			$(this).parent('li').siblings('li').removeClass("on");
			$(this).parent('li').prev('li').addClass('borderNo');		
		}
	});	

  //검색상태 버튼
	$('.stateBtn_line button').on('click',function(){
		$('.stateBtn_line button').removeClass('on');
		$(this).addClass('on');
	});

  $(document).on("click",".upload_list .icon_delete",function(){
		$(this).parent('li').remove();
	});

  //파일 첨부
	$('.fileName').val('선택한 파일이 없습니다');    
	var uploadFile = $('.uploadBtn');
	uploadFile.on('change', function(){
		if(window.FileReader){
			var filename = $(this)[0].files[0].name;
		} else {
			var filename = $(this).val().split('/').pop().split('\\').pop();
		}
		$(this).siblings('.fileName').val(filename);
		if($('.fileBox').hasClass('student') === true){
			$("#saveBtn").unbind('click');
			$('#saveBtn').on("click",function(){
				setThis($(this));
			});
		}else{
			setThis($(this));
		}
	});	

	function setThis(a){
		$saveBtn = $(a);
		$filename = $('.fileName').val();	
		$saveBtn.parents('div').siblings('.upload_list').append('<li><a href="#" download="">'+ $filename +'</a><button class="icon_delete hide_txt">삭제</button></li>');
	}

  
   
});


function preventDefaultAnchor() {
  $(document).on('click', 'a[href="#"]', function(e) {
    e.preventDefault();
  });
}



