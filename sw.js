self.addEventListener('install', function(event) {
  console.log("Installing Web Worker");
});

self.addEventListener('fetch', function(event) {
  var init = {
    status: 200,
    statusText: "OK",
    headers: {'Content-Type': 'text/plain'}
  };

  var response = new Response("Goodbye World!", init);
  event.respondWith(
    response
  );
});
