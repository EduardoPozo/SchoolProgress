/*File: navCode.js 
  Author: Eduardo Pozo UMass Lowell Computer Science Major
  Contact Info: eduardo_pozo@student.uml.edu
  Description: This file will handle changing the page using #values.  This code
  was taken Curran Kelleher's coding examples.  His examples can be found
  here...https://github.com/curran/screencasts/blob/gh-pages/navigation/examples/examples.json
  I've slightly modified it by adding an if statement for the #blog case where an
  Ajax function has been used to read a json and posted here. innerHTML cannot be
  used to insert a script tag which I had in previous versions.
  Created: 11/05/2014
  Last Modified: 12/10/2014*/

// Gets the appropriate content for the given fragment identifier.
function getContent(fragmentId, callback) {
// Create a new AJAX request for fetching the partial HTML file.
  var request = new XMLHttpRequest();
// Call the callback with the content loaded from the file.
  request.onload = function () {
    callback(request.responseText);
  };
// Fetch the partial HTML file for the given fragment id.
  request.open("GET", fragmentId + ".html");
  request.send(null);
}
// Sets the "active" class on the active navigation link.
function setActiveLink(fragmentId) {
  var navbarDiv = document.getElementById("navbar"),
          links = navbarDiv.children,
          i, link, pageName;
  for (i = 0; i < links.length; i++) {
    link = links[i];
    pageName = link.getAttribute("href").substr(1);
    if (pageName === fragmentId) {
      link.setAttribute("class", "active");
    } else {
      link.removeAttribute("class");
    }
  }
}
// Updates dynamic content based on the fragment identifier.
function navigate() {
// Get a reference to the "content" div.
  var contentDiv = document.getElementById("content"),
// Isolate the fragment identifier using substr.
// This gets rid of the "#" character.
          fragmentId = location.hash.substr(1);
// Set the "content" div innerHTML based on the fragment identifier.
  getContent(fragmentId, function (content) {
    contentDiv.innerHTML = content;
    if(fragmentId==="blog"){
      contentDiv.innerHTML = strContent;
    }
  });
// Toggle the "active" class on the link currently navigated to.
  setActiveLink(fragmentId);
}
// If no fragment identifier is provided,
if (!location.hash) {
// default to #home.
  location.hash = "#home";
}
// Navigate once to the initial fragment identifier.
navigate();
// Navigate whenever the fragment identifier value changes.
window.addEventListener("hashchange", navigate);