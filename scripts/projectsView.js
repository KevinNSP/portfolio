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

Projects.fetchAll = function() {
  if(localStorage.rawProjectData) {
    Projects.loadAll(JSON.parse(localStorage.rawProjectData));
    projectsView.initIndexPage();
  } else {
    $.getJSON('data/projectsData.json')
    .then(function(data) {
      localStorage.rawProjectData = JSON.stringify(data);
      Projects.loadAll(data);
      projectsView.initIndexPage();
    }, function(err) {
      console.error(err);
    });
  }
}
