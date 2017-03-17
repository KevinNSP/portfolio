'use strict';

var projectsView = [];

// projectsView.populateFilters = function() {
//   $('article').not('.template').each(function() {
//     var authorName, category, optionTag;
//     authorName = $(this).find('address a').text();
//     optionTag = '<option value="' + authorName + '">' + authorName + '</option>';
//     $('#author-filter').append(optionTag);
//     category = $(this).attr('data-category');
//     optionTag = '<option value="' + category + '">' + category + '</option>';
//     if ($('#category-filter option[value="' + category + '"]').length === 0) {
//       $('#category-filter').append(optionTag);
//     }
//   });
// };

projectsView.handleMainNav = function () {
  $('.navbar').on('click', 'a[href="#about"]', function() {
    console.log(this);
    $('.projectsContent, .aboutMeContent').hide();
    $('.aboutMeContent').fadeIn('slow');
  });
  $('.main-nav .tab:first').click();
};

projectsView.handleMainNav();
