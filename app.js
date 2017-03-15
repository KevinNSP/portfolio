'use strict';

var projects = [];

function Projects (rawData) {
  this.title = rawData.title;
  this.details = rawData.details;
  this.background = rawDate.background;
  this.projectUrl = rawDate.projectUrl;
};

Article.prototype.toHtml = function() {
  var $newProject = $('project.template').clone();
};
