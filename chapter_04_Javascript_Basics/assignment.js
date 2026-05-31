let x=20;
if (x%2===0){
    console.log("Even");
}else{
    console.log("Odd");
}

let marks=70;
if (marks>=90){
    console.log("Grade A");
}else if (marks>=80){
    console.log("Grade B");
}else if (marks>=70){
    console.log("Grade C");
}else if (marks>=60){
    console.log("Grade D");
}else{
    console.log("Fail");
}

let leapyear=2026;
if ((leapyear % 4 === 0 && leapyear % 100 !== 0) || (leapyear % 400 === 0)) {
    console.log(leapyear + " is a leap year.");
} else {
    console.log(leapyear + " is not a leap year.");
}
