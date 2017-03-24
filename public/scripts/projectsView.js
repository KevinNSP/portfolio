'use strict';

var projectsView = [];

projectsView.handleMainNav = function () {
  $('#aboutButton').on('click', function() {
    $('.mainContent').hide();
    $('#about').fadeIn();
  });
  $('#projectsButton').on('click', function() {
    $('.mainContent').hide();
    $('#projects').fadeIn();
  });
  $('#homeButton').on('click', function() {
    $('.mainContent').fadeIn();
  });
};

// Projects.loadAll() = function() {
//   localStorage.rawData() {}
//     Projects.loadAll(JSON.parse(localStorage.rawData));
//     projectsView.
//   }
// }

projectsView.handleMainNav()
