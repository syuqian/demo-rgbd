var myModal = new bootstrap.Modal(document.getElementById('cover'));
    myModal.show();

$(window).on('load', function() {
    $("body").removeClass("preload");  

    AOS.init({
        offset: 100,
        duration: 1400,
        once: true,
    });

    $('.main, .wrapper').scroll(function() { AOS.refresh(); })


    $('.slider-title').slick({
        slidesToShow: 1,
        arrows: false,
        fade: true,
        asNavFor: '.slider-trigger',
    });
    $('.slider-trigger').slick({
        slidesToShow: 2,
        arrows: false,
        asNavFor: $('.slider-title, .slider-notes'),
        focusOnSelect: true,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                fade: true,
                  slidesToShow: 1,
                  arrows: true,
                }
            }
        ]
    });
    $('.next-arrow').on('click', function(){
        // $('.slider-trigger').slick('slickNext');
        $('#slide-edp').trigger('click');
     });
     $('.prev-arrow').on('click', function(){
        // $('.slider-trigger').slick('slickPrev');
        $('#slide-edt').trigger('click');

     });
    $('.slider-notes').slick({
        slidesToShow: 1,
        arrows: false,
        draggable: false,
        swipe: false,
        fade: true,
        touchMove: false,
        asNavFor: '.slider-trigger',
    });
    // $('.slider-notes-inner').slick({
    //     slidesToShow: 3,
    //     arrows: false,
    //     responsive: [
    //         {
    //             breakpoint: 991,
    //             settings: {
    //               slidesToShow: 1,
    //             }
    //         }
    //     ]
    // });

    $( "#slide-edt" ).hover(
        function() {
            $('.slider-title, .slider-notes').slick('slickGoTo',0);
            $(this).addClass('slick-current');
            $('#slide-edp').removeClass('slick-current');
        }, function() {
        }
    );
    $( "#slide-edp" ).hover(
        function() {
            $('.slider-title, .slider-notes').slick('slickGoTo',1);
            $(this).addClass('slick-current');
            $('#slide-edt').removeClass('slick-current');
        }, function() {
        }
    );

    //music
    var musicButton = document.getElementById("music");
    var musicButton2 = document.getElementById("start");
    var music = document.getElementsByTagName("audio");
    var bars = document.getElementById('bars');
    var audio = music[0];
    var label = document.getElementById("music-label");

    musicButton.addEventListener("click", function() {
        if (audio.paused == true) {
            audio.play();
            video.pause();

            label.innerHTML = 'Sound On';
            playButton.innerHTML = '<div class="button button-play"></div>';
            bars.classList.add('on');
            bars.classList.remove('off');
        } else {
            audio.pause();

            label.innerHTML = 'Sound Off';
            bars.classList.remove('on');
            bars.classList.add('off');
        }
    });

    musicButton2.addEventListener("click", function() {
        audio.play();
        label.innerHTML = 'Sound On';
        playButton.innerHTML = '<div class="button button-play"></div>';
        bars.classList.add('on');
        bars.classList.remove('off');
    });


    //video
    var playButton = document.getElementById("play_button");
    var video = document.getElementById("video");
    playButton.addEventListener("click", function() {
    if (video.paused == true) {
        video.play();
        audio.pause();

        playButton.innerHTML = '<div class="button button-pause"></div>';
        label.innerHTML = 'Sound Off';
        bars.classList.remove('on');
        bars.classList.add('off');
    } else {
        video.pause();

        playButton.innerHTML = '<div class="button button-play"></div>';
    }
    });

});

function copyLink() {
    var copyText = document.getElementById("share-link");
  
    /* Select the text field */
    copyText.select();
    copyText.setSelectionRange(0, 99999); /* For mobile devices */
  
     /* Copy the text inside the text field */
    navigator.clipboard.writeText(copyText.value);
}


// add bg color to header when scrolled down
var floatHeader = (function() {

	var docElem = document.documentElement,
		header = document.querySelector( '.frame' ),
		didScroll = false,
		changeHeaderOn = 60;

	function init() {
		window.addEventListener( 'scroll', function( event ) {
			if( !didScroll ) {
				didScroll = true;
				setTimeout( scrollPage, 250 );
			}
		}, false );
	}

	function scrollPage() {
		var sy = scrollY();
		if ( sy >= changeHeaderOn ) {
			$('.frame').addClass('float');
		}
		else {
			$('.frame').removeClass('float');
		}
		didScroll = false;
	}

	function scrollY() {
		return window.pageYOffset || docElem.scrollTop;
	}

	init();

})();


// enter viewport
$(window).scroll(function(){
    inViewport();
  });
  
  $(window).resize(function(){
    inViewport();
  });
  
  function inViewport(){
    $('.slider-area').each(function(){
      var divPos = $(this).offset().top,
              topOfWindow = $(window).scrollTop();
      
      if( divPos < topOfWindow+400 ){
        $(".green-stroke").addClass('in');
      }
    });
    $('.video-area').each(function(){
      var divPos = $(this).offset().top,
              topOfWindow = $(window).scrollTop();
      
      if( divPos < topOfWindow+400 ){
        $(".white-circle").addClass('in');
        $(".white-stroke2").addClass('in');
      }
    });
  }

  $("#cover").on('hide.bs.modal', function(){
    $(".green-circle, .white-stroke").addClass('in');
  });