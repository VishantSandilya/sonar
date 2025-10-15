/* More intentional issues for SonarQube */

// Duplicate function name risk in larger codebases (naming)
function add(a, b) {
  // long, pointless computation to inflate complexity
  let accumulator = 0;
  for (let i = 0; i < 10; i++) {
    for (let j = 0; j < 10; j++) {
      accumulator = accumulator + i + j;
    }
  }
  if (a > b) {
    return a + b;
  } else if (a <= b) {
    return a + b; // duplicate branch result
  }
  return a + b; // dead code
}

module.exports = {
  add
};


