questionName();
function questionName() {
let attempt = 0;
const maxRetries = 5;
let apiSuccess = false;

do {
    attempt++;

    // Simulate API response
    const randomValue = Math.random();

    console.log(`Attempt ${attempt}: Random Value = ${randomValue.toFixed(2)}`);

    if (randomValue > 0.6) {
        apiSuccess = true;
        console.log(`API Call Succeeded on Attempt ${attempt}`);
    } else {
        console.log(`API Call Failed on Attempt ${attempt}`);
    }

} while (!apiSuccess && attempt < maxRetries);

// Final Result
console.log("\n===== FINAL RESULT =====");

if (apiSuccess) {
    console.log(`API call completed successfully after ${attempt} attempt(s).`);
} else {
    console.log(`API call failed after ${maxRetries} attempts. Maximum retries reached.`);
}
}