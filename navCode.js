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
function getContent(fragmentId, callback){
  //references to each state the site can be in
  var partials = {
    home: "Welcome to the home page.  This assignment required us to create a single page app.",
    about: "The assignment had us use the #value of pages to load the content of a new page.",
    contact: "If you have any questions about how the #value method works please email me at eduardo_pozo@student.uml.edu"
  };
  //Return the content
  callback(partials[fragmentId]);
}
//This function changes the active link of a page by cycling through until it finds the correct #value.
function setActiveLink(fragmentId){
  //instantiate all the variables needed
  var navbarDiv = document.getElementById("navbar"),
          links = navbarDiv.children,//get all the children and create an array
          i, link, pageName;
  for(i = 0; i < links.length; i++){
    link = links[i];
    //skip over the hash value and store the link in pageName
    pageName = link.getAttribute("href").substr[1];
    if(pageName === fragmentId){
      link.setAttribute("class", "active");
    }
    else{
      link.removeAttribute("class");
    }
  }
}
//uses fragmentId to display information based on current state
function navigate(){
  var contentDiv = document.getElementById("content");
  
  fragmentId = location.hash.substr(1);
  //uses send fragmentId and and a function that set content divs content
  getContent(fragmentId, function(content){
    contentDiv.innerHTML=content;
  });
  //sets the new active link
  setActiveLink(fragmentId);
}
//For the initial value before ay hash value is loaded.
if(!location.hash){
  location.hash="#home";
}
navigate();

window.addEventListener("hashchange",navigate);