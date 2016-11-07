$(document).ready(function() {
  var video = $('#video-bg')[0];

  video.addEventListener('playing', function(){
    $('#customText').fadeOut();
  })
  video.addEventListener('pause', function(){
    $('#customText').fadeIn();
  })
});

