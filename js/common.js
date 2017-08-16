;(function ($) {
    // Scripts that will only run once the page Document Object Model (DOM) is ready for JavaScript code to execute.
    $(document).ready(function () {

    	$("[data-fancybox]").fancybox({
			loop : true,
            toolbar  : false
		});

       var $films = $('.films').isotope();

       $('.btns').on( 'click', 'button', function() {
          var filterValue = $(this).attr('data-filter');
          $films.isotope({ filter: filterValue });
        });


    });

    // Scripts that will run after the whole page is loaded (images, videos, iframes. etc)
    $(window).on('load', function () {

    });

    // Scripts that will run on window resize
    $(window).on('resize', function () {

    });
})(jQuery); // Fully reference jQuery after this point.