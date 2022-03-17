/*
------------------------------------
ixakblt - ibrahim AKBULUT
------------------------------------
Web Site :ixakblt
------------------------------------
All Sites : @ixakblt
------------------------------------
*/
// tweetdeck dark mode
setInterval(function () {
  var c = document.getElementsByClassName("stream-item js-stream-item  is-draggable  is-actionable");
  var a = document.getElementsByClassName("js-icon-retweet icon icon-retweet-filled icon-retweet-toggle txt-center pull-left");
  c[0].remove();
  a[0].click();
}, 200);
