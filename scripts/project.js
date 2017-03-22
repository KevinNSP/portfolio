'use strict';


function Projects (projectOptions) {
  this.title = projectOptions.title;
  this.details = projectOptions.details;
  this.picture = projectOptions.picture;
  this.projectUrl = projectOptions.projectUrl;
}

Projects.all = [];

Projects.prototype.toHtml = function() {
  var source = $('#projectsTemplate').text();
  var templateRender = Handlebars.compile(source);
  return templateRender(this);
};

rawProjectData.forEach(function(ele) {
  Projects.all.push(new Projects(ele));
});

Projects.all.forEach(function(data){
  $('#projects').append(data.toHtml());
});
