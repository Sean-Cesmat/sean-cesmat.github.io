$(document).ready(function() {
//   $("#jf-lightgallery").lightGallery();
//   $("#whitecap-lightgallery").lightGallery();

  const bobaiLightbox = GLightbox({
    videosWidth: '1500px',
    elements: [
      {
        href: 'images/projects/best-of-business-ai/best-of-business-ai-1.webp',
        type: 'image',
      },
      {
        href: 'images/projects/best-of-business-ai/best-of-business-ai-2.webp',
        type: 'image',
      },
      {
        href: 'images/projects/best-of-business-ai/best-of-business-ai-3.webp',
        type: 'image',
      },
      {
        href: 'images/projects/best-of-business-ai/best-of-business-ai.mp4',
        type: 'video',
        source: 'local', // HTML5 video
        html5Video: {
          source: [
            { src: 'video/demo.mp4', type: 'video/mp4' }
          ],
          attributes: {
            controls: true
          }
        }
      }
    ]
  });

   $("#bobai-gallery-btn").on("click", function(e) {
    e.preventDefault();
    // Simulate a click on the first gallery item
    bobaiLightbox.open();
  });
  const thePursuitOfLightbox = GLightbox({
    videosWidth: '1500px',
    elements: [
      {
        href: 'images/projects/the-pursuit-of/the-pursuit-of_.mp4',
        type: 'video',
        source: 'local', // HTML5 video
        html5Video: {
          source: [
            { src: 'video/demo.mp4', type: 'video/mp4' }
          ],
          attributes: {
            controls: true
          }
        }
      }
    ]
  });

   $("#the-pursuit-of-gallery-btn").on("click", function(e) {
    e.preventDefault();
    // Simulate a click on the first gallery item
    thePursuitOfLightbox.open();
  });
  const triviewLightbox = GLightbox({
    videosWidth: '1500px',
    elements: [
        { href: 'images/projects/triview/triview00_MainDash.webp', type: 'image' },
        { href: 'images/projects/triview/triview01_LoanToValue.webp', type: 'image' },
        { href: 'images/projects/triview/triview02_Payments.webp', type: 'image' },
        { href: 'images/projects/triview/triview03_Maps.webp', type: 'image' },
        { href: 'images/projects/triview/triview04_CovenantsAndKeyDates.webp', type: 'image' },
        { href: 'images/projects/triview/triview05_PropertyByType.webp', type: 'image' },
        { href: 'images/projects/triview/triview06_IncomeComparison.webp', type: 'image' },
        { href: 'images/projects/triview/triview07_PropertyTurnover.webp', type: 'image' },
        { href: 'images/projects/triview/triview08_MaturitiesOutlook.webp', type: 'image' },
        { href: 'images/projects/triview/triview09_Occupancy.webp', type: 'image' },
        { href: 'images/projects/triview/triview10_PropertiesByValue.webp', type: 'image' },
        { href: 'images/projects/triview/triview11_Property.webp', type: 'image' },
        { href: 'images/projects/triview/triview12_PropertyMap.webp', type: 'image' },
        { href: 'images/projects/triview/triview13_Contact.webp', type: 'image' },
        { href: 'images/projects/triview/triview14_AllPropertiesList.webp', type: 'image' },
        { href: 'images/projects/triview/triview15_UPBbyproperty.webp', type: 'image' },
        { href: 'images/projects/triview/triview16_Map.webp', type: 'image' },
        { href: 'images/projects/triview/triview17_ConstructionDraw.webp', type: 'image' },
        { href: 'images/projects/triview/triview18_DealConstruction.webp', type: 'image' },
        { href: 'images/projects/triview/triview19_InterestRates.webp', type: 'image' },
        { href: 'images/projects/triview/triview20_PositionTurnover.webp', type: 'image' },
        { href: 'images/projects/triview/triview21_MaturingPositions.webp', type: 'image' },
        { href: 'images/projects/triview/triview22_RentRolls.webp', type: 'image' },
        { href: 'images/projects/triview/triview23_Rollover.webp', type: 'image' },
        { href: 'images/projects/triview/triview24_DebtYield.webp', type: 'image' },
        { href: 'images/projects/triview/triview25_AllDeals.webp', type: 'image' },
        { href: 'images/projects/triview/triview26_Deal.webp', type: 'image' },
        { href: 'images/projects/triview/triview27_DealTurnover.webp', type: 'image' },
        { href: 'images/projects/triview/triview28_Performance.webp', type: 'image' },
        { href: 'images/projects/triview/triview29_TotalLenderControlledFunds.webp', type: 'image' },
        { href: 'images/projects/triview/triview30_TotalReserves.webp', type: 'image' },
        { href: 'images/projects/triview/triview31_Alerts.webp', type: 'image' }
    ]
  });

   $("#triview-gallery-btn").on("click", function(e) {
    e.preventDefault();
    // Simulate a click on the first gallery item
    triviewLightbox.open();
  });

  $('.sidenav a').each(function() {
    // add tabindex to -1 to all links in sidenav
    $(this).attr('tabindex', '-1');
});

  $('.sidenav').sidenav({
       edge: 'right', // Choose the horizontal origin
       onOpenStart: function(el) {
         // Remove tabindex from all links in sidenav
         $('.sidenav a').each(function() {
           $(this).removeAttr('tabindex');
         });
       },
       onCloseEnd: function(el) {
         // Add tabindex to -1 to all links in sidenav
         $('.sidenav a').each(function() {
           $(this).attr('tabindex', '-1');
         });
       }
     }
   );

  $('.tooltipped').tooltip();

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

  jQuery('#year').text(new Date().getFullYear());

});
