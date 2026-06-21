// Input

const isPresent = true;
const isDisplayed = true;
const isEnabled = false;
questionName(isPresent, isDisplayed, isEnabled);
function questionName(isPresent, isDisplayed, isEnabled) {
let status = "";
let action = "";

// Determine Status
if (isPresent === true && isDisplayed === true && isEnabled === true) {
    status = "READY";
    action = "Element is ready for interaction.";
} 
else if (isPresent === true && isDisplayed === true && isEnabled === false) {
    status = "DISABLED";
    action = "Element is visible but disabled. Wait for enable state or check preconditions.";
} 
else if (isPresent === true && isDisplayed === false) {
    status = "HIDDEN";
    action = "Element exists but is hidden. Check visibility conditions.";
} 
else if (isPresent === false) {
    status = "NOT FOUND";
    action = "Element not found. Verify locator or page state.";
}

// Severity using Ternary Operator
const severity = (isPresent === false)
    ? "CRITICAL"
    : (isDisplayed === false || isEnabled === false)
        ? "WARNING"
        : "OK";

// Output
console.log(`Status: ${status}`);
console.log(`Severity: ${severity}`);
console.log(`Action: ${action}`);
}