'use strict';

// changes for pull request

var allProjects = [];

function Projects (projectOptions) {
  this.title = projectOptions.title;
  this.details = projectOptions.details;
  this.picture = projectOptions.picture;
  this.projectUrl = projectOptions.projectUrl;
}

Projects.prototype.toHtml = function() {
  var $newProject = $('project.template').clone().removeClass('template');

  $newProject.find(this.details);
  $newProject.find('h1').text(this.title);
  $newProject.find('.projectPic').text(this.picture);
  $newProject.find('a').text(this.projectURL);
  return $newProject;
};

console.log();

sourceData.forEach(function(ele) {
  allProjects.push(new Projects(ele));
});

console.log(allProjects);

allProjects.forEach(function(a){
  $('#articles').append(a.toHtml());
});