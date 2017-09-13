$(document).ready(function () {
  $('pre code').each(function (i, block) {
    hljs.highlightBlock(block);
  });
});

console.log("this is glow.js.");
