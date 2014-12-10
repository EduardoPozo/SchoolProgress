/* 
 File: AssignmentFiveSS.css 
 Author: Eduardo Pozo UMass Lowell Computer Science Major
 Contact Info: eduardo_pozo@student.uml.edu
 Description: This file will handle changing the page using #values.  This code
 was imitated from Curran Kelleher's coding examples.  His examples can be found
 here...https://github.com/curran/screencasts/blob/gh-pages/navigation/examples/examples.json
 Created: 11/05/2014
 Last Modified: 11/05/2014
 */
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
  });
  //If blog file is loaded read the json file here and post it
  if(fragmentId === blog){
    AJAXReader();
  }
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

//Specifically made for the blog file to read the json file.  Otherwise innerHTMl
//won't accept the script tag I wanted to insert to load the ajax reader file.
function AJAXReader(){
  var content = "";
  //reads the JSon file, this AJAX set up was borrowed from Jesse Heines.
  //His sample code can be found here
  jQuery.ajax({
    async: false,
    dataType: "json",
    url: "blog.json",
    success: function(data){
      blogPostInfo = data;
    }
  });

  content += "<h1>" + blogPostInfo.title + "</h1>";
  //loop through all the paragraphs and sentences for the content
  for ( var para = 0 ; para < blogPostInfo.text.paragraphs.length ; para++ ) {
    content += "<p class=\"firefox\">" ;
    for ( var sent = 0 ; sent < blogPostInfo.text.paragraphs[para].length ; sent++ ) {
      content += blogPostInfo.text.paragraphs[para][sent] + "&nbsp; " ;
    }
    content += "</p>" ;
  }
  //return the info from the JSON into the content div
  contentDiv.innerHTML = content;
  //This is where Jesse Heine's code ends
}