function loadgist(gistid, filename, filetype) {

$.ajax({
  url: 'https://api.github.com/gists/'+gistid,
  type: 'GET',
  dataType: 'jsonp'
}).success( function(gistdata) {
    var content = gistdata.data.files[filename].content;
    DoSomethingWith(content, filetype)
  }).error( function(e) {
  // ajax error
});
    
}

function DoSomethingWith(content, filetype) {
  if (filetype == 'html') {
    $('#article').append(content);
  }
  
  if (filetype == 'css') {
    $('#article').append('<style>' + content + '</style>');
  }
}

loadgist(8896256, "index.html", 'html');
loadgist(8896256, "style.css", 'css');