/* Check The Exam

Instructions

The first input array is the key to the correct answers to an exam, like ["a", "a", "b", "d"]. 
The second one  contains a student's submitted answers.

The two arrays are not empty and are the same length. Return the score for this array of answers, giving +4 
for each correct answer, -1 for each incorrect answer, and +0 for each blank answer, represented as an 
empty string (in C the space character is used).

If the score < 0, return 0.

For example:

checkExam(["a", "a", "b", "b"], ["a", "c", "b", "d"]) → 6
checkExam(["a", "a", "c", "b"], ["a", "a", "b",  ""]) → 7
checkExam(["a", "a", "b", "c"], ["a", "a", "b", "c"]) → 16
checkExam(["b", "c", "b", "a"], ["",  "a", "a", "c"]) → 0

*/

// Solution

// Start with a score of 0
// loop through the array1 of 'correct answers'
// if a value in (array1)'correct answers' MATCH a value in (array2)'student's submitted answers' THEN add 4 to the score
// if a value in (array1)'correct answers' DOES NOT MATCH a value in (array2)'student's submitted answers' AND is not an empty string THEN Deduct 1 point from the score
//if a value in  in (array2)'student's submitted answers' is blank Then add 0 to the score
// if the overall score is negative number THEN Return 0 as the score

function checkExam(array1, array2) {
 // good luck
}
