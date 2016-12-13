importScripts("https://cdn.rawgit.com/sigiljs/trapezoid/master/trapezoid.js")

var app = trapzoid();

app.get("/",function(req,res){
  res.send("you made it to root! ")
})

self.addEventListener('install', function(event) {
  console.log("Installing Web Worker");
});

self.addEventListener('fetch', function(event) {
  app.process(event);
});
