'use strict';

var allProjects = [];

function Projects (projectOptions) {
  this.title = projectOptions.title;
  this.details = projectOptions.details;
  this.picture = projectOptions.picture;
  this.projectUrl = projectOptions.projectUrl;
}

Projects.prototype.toHtml = function() {
  var source = $('#projectsTemplate').text();
  var templateRender = Handlebars.compile(source);
  return templateRender(this);
};

rawProjectData.forEach(function(ele) {
  allProjects.push(new Projects(ele));
});

allProjects.forEach(function(data){
  $('#projects').append(data.toHtml());
});
