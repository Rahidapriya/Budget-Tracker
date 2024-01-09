// Import NPM Package
var _ = require('underscore');

// Call appropriate function from the NPM package to solve the assignment
var languages = ["Java", "Javascript", "Typescript"];

/**
 * Print out the result if ["Java", "Javascript", "Typescript"] this array 
 * contains "Java"
 */
var checkJava = _.contains(languages, "Java");

// First Answer 
console.log("This array contains 'Java':", checkJava);

/**
 * Print out the result if ["Java", "Javascript", "Typescript"] this array 
 * contains "C++"
 */
var checkCpp = _.contains(languages, "C++");

// Second Answer
console.log("This array contains 'C++':", checkCpp);
