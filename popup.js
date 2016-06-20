
  chrome.tabs.executeScript(null, // 
       { file: "content.js" } ); // 
  document.addEventListener('load', function () {
  var divs = document.querySelectorAll('div'); // selects all divs
  for (var i = 0; i < divs.length; i++) { // 
    divs[i].addEventListener('click', click); // 
  }
});
