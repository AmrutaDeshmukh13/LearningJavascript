let x = "global";

if (true) {
    // TDZ for block-scoped "x" starts here
     //.log(x);   // ReferenceError (NOT "global"!)
    let x = "block";     // TDZ ends
    console.log(x);      // "block"
}

console.log(x);