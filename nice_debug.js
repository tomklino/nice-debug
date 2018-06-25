function getDebugLevel(symbol) {
  return process.env[symbol] || 0;
}

function makeDebugger(symbol) {
  return function(level, ...msgs) {
    if(getDebugLevel(symbol) >= level) {
      console.log(...msgs)
    }
  }
}

module.exports = makeDebugger;
