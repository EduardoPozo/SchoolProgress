// File: SPAAjaxReader.js
// 91.461 Assignment 7: SinglePageApp
// Made By: Eduardo Pozo, UMass Lowell Computer Sceince
// Contact Info: eduardo_pozo@student.uml.edu
// Description: This file will use the ajax process to read a JSON file and 
// display in a div.  This is meant for a blog post.
// Created: 11/04/14
// Last modified: 11/16/14
  
// The following section is code provided by Dr.Heines.  Some alterations have been made to variable
// names but the code structure, and process was borrowed from him.

// load jQuery library from the Google Content Delivery Network (CDN)
// see http://encosia.com/3-reasons-why-you-should-let-google-host-jquery-for-you/
// however, note that you obviously must be online for this to work
// alternatively, you can download jQuery and store it locally from
// http://jquery.com/download/

//This variable will hold all date read from the JSON file
var blogPostInfo;

//do{
// Note to advanced students:
// Do *NOT* use the jQuery getJSON function here, because in this
// application the AJAX call has to be synchronous (that is, we need to
// wait for it to be done before continuing), and the getJSON function
// is always asynchronous.  Reference:
// http://stackoverflow.com/questions/2765411/is-it-possible-to-set-asyncfalse-to-getjson-call
// The other approach is to change the global jQuery ajaxSetup option,
// but this is controversial, as discussed on the referenced page.

jQuery.ajax({
  async: false,
  dataType: "json",
  url: "blog.json",
  success: function(data){
    blogPostInfo = data;
  }
});
//while();

// Once the document and its code is loaded, the placeContent function
// will execute.  The function and its code is below.
$(document).ready(function(){
  placeContent();
});
  //this function places all content from JSON to a content div
function placeContent(){
  var strContent = "";

  //create dyanamic content from JSON
  strContent += "<h1 class='title'>" + blogPostInfo.title + "</h1>";
  //loop through all the paragraphs and sentences for the content
  for ( var para = 0 ; para < blogPostInfo.text.paragraphs.length ; para++ ) {
    strContent += "<p class=\"firefox\">" ;
    for ( var sent = 0 ; sent < blogPostInfo.text.paragraphs[para].length ; sent++ ) {
      strContent += blogPostInfo.text.paragraphs[para][sent] + "&nbsp; " ;
    }
    strContent += "</p>" ;
  }
}