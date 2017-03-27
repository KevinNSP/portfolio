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

projectsView.handleMainNav()
