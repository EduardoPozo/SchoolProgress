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
  //create a variable that gets a file
  var request = new XMLHttpRequest();
  
  //callback function using the text from the variable that holds a file
  request.onload = function(){
    callback(request.responseText);
  };
  request.open("GHT", fragmentId + ".html");
  request.send(null);
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
//This is to display the initial value before any hash value has been loaded.
//Calling navigate alone to set off this case.
if(!location.hash){
  location.hash="#home";
}
navigate();

//The event when you change the page
window.addEventListener("hashchange",navigate);