	var topbar = (function() {
	currentpos = $(window).scrollTop();

		var init = function() {
			animatetopbar();
		};

		var animatetopbar = function() {

			$(window).scroll(function() {
				if (currentpos < $(window).scrollTop() && currentpos > 74) {
					$('.header-wrapper').addClass('hideit');
          $('.sidebar').addClass('menuopen-scroll');
				} else {
					$('.header-wrapper').removeClass('hideit');
          $('.sidebar').removeClass('menuopen-scroll');
				}
				currentpos = $(window).scrollTop();

			});
		};


		return {
			init:init
		};

	}());
	
	
	
	
	
	
	.header-wrapper{
  position:fixed;
  top:0px;
  z-index:2 !important;
  min-height:74px;
  width: 100%;
  z-index:1;

  -webkit-transition: top 0.3s ease;
  -moz-transition: top 0.3s ease;
  -o-transition: top 0.3s ease;
  transition: top 0.3s ease;

  .row{
  	margin:0 auto;
  	max-width:1440px;
  	background-color: #fff;
  }
  &.hideit {
	   top:-74px;
  }
}
