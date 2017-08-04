let cache = []

function updateCacheCount(cache) {
  document.querySelector('span.cacheCount').innerHTML = cache.length
}

function cacheMouseMovement(event) {
  cache.push({x: event.pageX, y: event.pageY, data: new Array(100000).join('x')})
  updateCacheCount(cache)
}

function cacheNewestMouseMovement(event) {
  var MAX_CACHE_SIZE = 100
  if (cache.length > MAX_CACHE_SIZE) {
    cache = []
  }
  cache.push({x: event.pageX, y: event.pageY, data: new Array(100000).join('x')});
  updateCacheCount(cache)
}

(function() {
  document.querySelector('.mouseTracker').addEventListener('mousemove', cacheMouseMovement);
  // document.querySelector('.mouseTracker').addEventListener('mousemove', cacheNewestMouseMovement);
}())
