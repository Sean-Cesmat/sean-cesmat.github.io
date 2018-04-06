$(document).ready(function() {
  $("#jf-lightgallery").lightGallery();
  $("#whitecap-lightgallery").lightGallery();

  $('.sidenav').sidenav({
       edge: 'right', // Choose the horizontal origin
     }
   );

  jQuery('.skillbar').each(function(){
 		jQuery(this).find('.skillbar-bar').animate({
 			width:jQuery(this).attr('data-percent')
 		},6000);
 	});

  $('.scrollspy').scrollSpy();


  if (jQuery(window).width() < 992) {
    jQuery('.swap2').each(function () {
      if (!jQuery(this).text().match(/^\s*jQuery/)) {
        jQuery(this).insertBefore(jQuery(this).prev('.swap1'));
      }
    });
  }
  jQuery(window).resize(function() {
    if (jQuery(window).width() < 992) {
      jQuery('.swap2').each(function () {
          if (!jQuery(this).text().match(/^\s*jQuery/)) {
              jQuery(this).insertBefore(jQuery(this).prev('.swap1'));
          }
      });
    }
    else {
      jQuery('.swap1').each(function () {
          if (!jQuery(this).text().match(/^\s*jQuery/)) {
              jQuery(this).insertBefore(jQuery(this).prev('.swap2'));
          }
      });
    }
  });

});
