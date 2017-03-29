'use strict';

(function(window) {

console.log('are we here?');

Projects.all = [];

function Projects (projectOptions) {
  this.title = projectOptions.title;
  this.details = projectOptions.details;
  this.picture = projectOptions.picture;
  this.projectUrl = projectOptions.projectUrl;
}

Projects.prototype.toHtml = function() {
  var templateRender = Handlebars.compile($('#projectsTemplate').text());
  return templateRender(this);
};

$.getJSON('../data/projectsData.json', function(response) {
  console.log('response this is the response', response);
  response.map(function(projectObject) {
    Projects.all.push(new Projects(projectObject))
  });
  Projects.all.map(function(project) {
    $('#projects').append(project.toHtml());
  })
})

})(window);
