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
  var $newProject = $('.projectTemplate').clone().removeClass('projectTemplate');

  // $newProject.find(this.details);
  $newProject.find('h1').text(this.title);
  $newProject.find('.projectPic').attr('src', this.picture);
  $newProject.find('.projectDesription').text(this.details);
  // $newProject.find('a').text(this.projectURL);
  return $newProject;
};

console.log();

rawProjectData.forEach(function(ele) {
  allProjects.push(new Projects(ele));
});

console.log(allProjects);

allProjects.forEach(function(a){
  $('#projects').append(a.toHtml());
});
