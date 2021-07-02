
importScripts('https://storage.googleapis.com/workbox-cdn/releases/5.1.2/workbox-sw.js');

// Note: Ignore the error that Glitch raises about workbox being undefined.
workbox.setConfig({
  debug: true,
});

workbox.precaching.precacheAndRoute([
  "https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-beta/css/bootstrap.min.css",
  "https://cdnjs.cloudflare.com/ajax/libs/babel-core/5.8.34/browser.min.js",
  "https://unpkg.com/react@16/umd/react.development.js",
  "https://unpkg.com/react-dom@16/umd/react-dom.development.js",
  "https://unpkg.com/react-router-dom@5.0.0/umd/react-router-dom.min.js",
]);

// Demonstrates using default cache
workbox.routing.registerRoute(
    new RegExp('.*\\.(?:js)'),
    new workbox.strategies.NetworkFirst(),
);

// Demonstrates a custom cache name for a route.
workbox.routing.registerRoute(
    new RegExp('.*\\.(?:png|jpg|jpeg|svg|gif)'),
    new workbox.strategies.CacheFirst({
      cacheName: 'image-cache',
      plugins: [
        new workbox.expiration.ExpirationPlugin({
          maxEntries: 3,
        }),
      ],
    }),
);
