// if-else..
const age = 17;
if (age < 18) {
    console.log("Underage!!");
}
else {
    console.log("Have a great dayy:)");
}
// nested if else 
const grade = 64;
if (grade < 35) {
    console.log("Have a great dayy:)");
}
else if ((35 <= grade) && (grade <= 75)) {
    console.log("Average", +grade);
}
else {
    console.log("Excellent");
}
// for loop
let sum1 = 0;
for (let counter = 0; counter <= 10; counter++) {
    sum1 = sum1 + counter;
    console.log(sum1);
}
//do while
var iteration = 0;
do {
    console.log("iteration no:", +iteration);
    iteration++;
} while (iteration < 10);
const arr = [10, 20, 30, 40];
for (const index in arr) { //in for kys or indices and of for data 
    console.log(index);
    console.log(arr[index]);
}
