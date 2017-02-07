//score array
var scores = [82, 71, 95, 55, 98, 69, 72, 78, 84, 64, 58, 87];
console.log("Student Grades:", scores);

//How many of each grade?
// A score of 50-60 is an F
// A score of 61-70 is a D
// A score of 71-80 is a C
// A score of 81-90 is a B
// A score of 91-100 is an A
// Start with array of random scores in your JavaScript

// var scores = [82, 71, 95, 55, 98, 69, 72, 78, 84, 64, 58, 87];
// Use console.log to output the following criteria:

// How many of each grade?

var A = 0;
var B = 0;
var C = 0;
var D = 0;
var F = 0;

for (var i = 0; i < scores.length; i++) {
	if(scores[i] >= 91) {
		A = A+1;
	} else if(scores[i] >= 81) {
		B = B+1;
	} else if(scores[i] >= 71) {
		C = C+1;
	} else if(scores[i] >= 61) {
		D = D+1;
	} else {
		F = F+1;
	}
}


console.log("There are: ", A, " A's");
console.log("There are: ", B, " B's");		
console.log("There are: ", C, " C's");
console.log("There are: ", D, " D's");
console.log("There are: ", F, " F's");

//What is the lowest grade?
scores.sort();
console.log("The lowest grade is: ", scores[0]);
//What is the highest grade?
console.log("The highest grade is: ", scores.slice(-1)[0]);