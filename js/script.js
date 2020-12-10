// *************************** YOUR CODE BELOW *******************************
//******************TEST EARLY AND OFTEN USING console.log() ******************
//****************** SERIOUSLY TEST USING console.log()!!! ******************

//GLOBAL VARIABLES
/* global $ */

let userChoice;
let computerChoice;
let randomNumber = 0;

$("#rock").click(function() {
  $("#input").val("Rock");
});

$("#paper").click(function() {
  $("#input").val("Paper");
});

$("#scissors").click(function() {
  $("#input").val("Scissors");
});

$("#shoot").click(function() {
  let userChoice = $("#input").val();
  let randomNumber = Math.random();
  console.log(randomNumber);
  $("#result").text(userChoice);
});
