console.log('CSS FTW!')

const {matches:prefers_reduced} = 
  window.matchMedia('(prefers-reduced-motion:reduce)')

if (prefers_reduced)
  document.querySelectorAll('video').forEach(node =>
    node.pause())
