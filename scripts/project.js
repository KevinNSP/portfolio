'use strict';


function Projects (projectOptions) {
  this.title = projectOptions.title;
  this.details = projectOptions.details;
  this.picture = projectOptions.picture;
  this.projectUrl = projectOptions.projectUrl;
}

Projects.all = [];

Projects.prototype.toHtml = function() {
  var templateRender = Handlebars.compile($('#projectsTemplate').text());
  return templateRender(this);
};

rawProjectData.forEach(function(ele) {
  Projects.all.push(new Projects(ele));
});

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
