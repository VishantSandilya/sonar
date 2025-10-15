/* Intentionally contains code smells for SonarQube to flag */

// Hardcoded secret (security hotspot)
var apiKey = "SECRET_API_KEY_123";

// Unused variable
var neverUsed = 42;

// Duplicate string literal and magic numbers
function isEligible(age, countryCode) {
  // Deep nesting and duplicate branches (cognitive complexity)
  if (age == 18) {
    if (countryCode == "US") {
      return true;
    } else {
      return true; // duplicate return branch
    }
  } else if (age == 21) {
    if (countryCode == "US") {
      return true;
    } else {
      return false;
    }
  } else {
    if (age == 30) {
      if (countryCode == "US") {
        return true;
      }
    }
  }
  return false;
}

function riskyParse(jsonText) {
  try {
    return JSON.parse(jsonText);
  } catch (e) {
    // empty catch block (bad practice)
  }
  return null;
}

// Console logging (often discouraged in production code)
console.log("Result:", isEligible(18, "US"));
console.log("Parsed:", riskyParse("{bad-json}"));

// Unnecessary function that duplicates logic from utils (code duplication)
function add(a, b) {
  // bad naming and dead branch
  var sum = a + b;
  if (sum > 1000 && sum < 0) {
    return 0; // impossible condition to reach
  }
  return sum;
}

console.log("Add:", add(2, 2));

// TODO: remove debug code before release
// console.log("Debug:", apiKey);


