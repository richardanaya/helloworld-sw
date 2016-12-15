importScripts("https://cdn.rawgit.com/sigiljs/trapezoid/master/trapezoid.js")

var files = [
  "index.html",
  "todo.css",
  "x-todo-app.html",
  "lib/kamea.min.js",
  "lib/sigil.min.js",
  "lib/pouchdb.min.js",
  "lib/webcomponents-lite.min.js"
];

var app = trapezoid();
app.precache(files);
app.run("todo-v1");
