'use strict';

function Projects (projectOptions) {
  this.title = projectOptions.title;
  this.details = projectOptions.details;
  this.picture = projectOptions.picture;
  this.projectUrl = projectOptions.projectUrl;
}

const projects = [];

Projects.prototype.toHtml = function() {
  var templateRender = Handlebars.compile($('#projectsTemplate').text());
  return templateRender(this);
};

$.getJSON('/data/projectsData.json', function(response) {
  response.forEach(function(projectObject) {
    projects.push(new Projects(projectObject))
  });
  projects.forEach(function(project) {
    $('#projects').append(project.toHtml());
  })
})
