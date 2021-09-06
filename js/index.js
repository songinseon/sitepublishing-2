$("body").niceScroll({
  scrollspeed: 5
});

const swiper = new Swiper('.swiper-container', {
  // Optional parameters
  // direction: 'vertical',
  loop: true,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
  },
});

console.clear();

$('.btn-page').mouseenter(function() {
  let $this = $(this);
  $this.addClass('active');
});

$('.btn-page').mouseleave(function() {
  let $this = $(this);
  $this.removeClass('active');
});

$('.family-box').click(function() {
  let has = $('.family-box').hasClass('active');
  
  if ( has ) {
    $('.family-box').removeClass('active');
  }
  else {
    $('.family-box').addClass('active');
  }
})


// 탑버튼
$(function() {
	$(window).scroll(function() { 
		if ($(this).scrollTop() > 200) { 
			$('#topBtn').fadeIn(); } 
		else { $('#topBtn').fadeOut(); }
	}); 
	$("#topBtn").click(function() { 
   	$('html, body').animate({ scrollTop : 0  }, 300); 
    return false; });
});