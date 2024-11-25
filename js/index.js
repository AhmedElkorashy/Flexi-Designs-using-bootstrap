/**
 * This is a self-invoking function that demonstrates variable scoping in JavaScript.
 * It logs the value of the `userName` variable to the console.
 *
 * @function
 * @name userNameLogger
 * @returns {undefined} This function does not return any value.
 *
 * @example
 * (function () {
 *   var userName = "momo";
 *   console.log(userName);
 * })();
 */
// (function () {
//   var userName = "momo";
//   console.log(userName);
// })();
// var usr = {
//   name: "ahmed",
//   age: 35,
// };
// usr["age"] = 5;

// console.log(usr["age"]);
var usr = "ahmed";
switch (usr) {
  case "ahmed":
    console.log("hello ahmed");
    break;
  case "mohamed":
    console.log("hello mohamed");
    break;
}
