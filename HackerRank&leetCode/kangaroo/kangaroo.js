// HINT: Math Equation knowledge is required to read this if you are viewing my github :)

//function description is in the image inside the same folder

// check if two kangaroos land on the same point after a constant amount of jumos or not

function kangaroo(x1, v1, x2, v2) {
	// x1 => the starting point of kangaro1
	// v1 => the distance the kangaro jumo with
	// x2 and v2 are the same but for kangaro2
	// the distance covered by kangaroo Will be frequency(f) * distance per time(d)
	// the end point of the kangaroo will be starting point(s) + distance
	// so if (fd1 + s1 = fd2 + s2), then the two kangaroos have the same endpoint
	// and in math, if two things have the same rule, we can make an equation to determine if they are equal or not by this rule

	// ( fd2 -fd1) = (s2 - s1)
	// f (d2-d1) = (s2 - s1)

	// in math:
	// 2x=3
	// 2x/2 = 3/2
	// x = 3/2

	// then:
	// f =  (d2-d1) / (s2-s1)

	// if the frequency is the same for the two kangaroos, then they met at one point after a constant (frequency) amount of jumps

	if (x2 > x1 && v2 > v1) return 'NO';

	if ((x2 - x1) % (v2 - v1) === 0) return 'YES';

	return 'NO';
}

console.log(kangaroo(0, 3, 4, 2));
