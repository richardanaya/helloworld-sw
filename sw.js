importScripts("sw.files.js")
importScripts("https://cdn.rawgit.com/sigiljs/trapezoid/master/trapezoid.js")

var app = trapezoid();
app.precache(files);
app.run("todo-v1");
