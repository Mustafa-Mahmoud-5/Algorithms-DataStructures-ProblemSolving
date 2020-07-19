// HackerLand University has the following grading policy:

// Every student receives a grade in the inclusive range from  0 to 100.
// Any  grade less than 40 is a failing grade.

// Sam is a professor at the university and likes to round each student's  according to these rules:

// If the difference between the grade  and the next multiple of 5 is less than 3 , round grade  up to the next multiple of 5.

// If the value of grade  is less than 38 , no rounding occurs as the result will still be a failing grade.

const gradingStudents = grades => {
	const roundedGrades = [];

	for (let i = 0; i < grades.length; i++) {
		const reminderTo5 = grades[i] % 5;

		if (grades[i] < 38) {
			// he failed. don`t modify
			roundedGrades.push(grades[i]);
		} else if (5 - reminderTo5 < 3) {
			// 5- reminderTo5 will be either 1 or 2, which is the number left to be 5

			// he has two points or less to get the next multiple of 5, modify him to the next multiple of 5
			roundedGrades.push(grades[i] + (5 - reminderTo5));
		} else {
			// if not any of the above cases, then push without modifications
			roundedGrades.push(grades[i]);
		}
	}

	return roundedGrades;
};

const grades = [ 73, 67, 38, 33 ];
console.log(gradingStudents(grades));
