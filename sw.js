importScripts("trapezoid.js")

var app = trapezoid();

app.get("/",function(req,res){
  res.send("you made it to root! ")
})

self.addEventListener('install', function(event,options) {
  console.log(event);
  console.log("Installing Service Worker");
});

self.addEventListener('fetch', function(event) {
  app.process(event);
});
