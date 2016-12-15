importScripts("https://cdn.rawgit.com/sigiljs/trapezoid/master/trapezoid.js")

var files = [
  "index.html"
];

var app = trapezoid();
app.precache(files);
app.run("todo-v1");
