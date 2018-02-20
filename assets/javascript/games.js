

$(document).ready(function () {

  var computerRandomNumber = 0;
  var crystalRandomNumber = 0;
  var userScore = 0;
  var crystalOneRandomNumber = 0;
  var crystalTwoRandomNumber = 0;
  var crystalThreeRandomNumber = 0;
  var crystalFourRandomNumber = 0;
  var userWin = 0;
  var userLose = 0;



  function blinker() {
    $('.blink_me').fadeOut(500);
    $('.blink_me').fadeIn(500);
  }
  setInterval(blinker, 1000);


  // this function generate random number between min - max numbers
  function randomIntFromInterval(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }

  // this function generate random number between 1 to 12 for Crystal One 
  function createCrystalsRandomNumbers() {
    crystalOneRandomNumber = randomIntFromInterval(1, 12);
    console.log(crystalOneRandomNumber);
    // this function generate random number between 1 to 12 for Crystal Two 
    crystalTwoRandomNumber = randomIntFromInterval(1, 12);
    console.log(crystalTwoRandomNumber);
    // this function generate random number between 1 to 12 for Crystal Three 
    crystalThreeRandomNumber = randomIntFromInterval(1, 12);
    console.log(crystalThreeRandomNumber);
    // this function generate random number between 1 to 12 for Crystal Four 
    crystalFourRandomNumber = randomIntFromInterval(1, 12);
    console.log(crystalFourRandomNumber);
  }

  // this function to initialize the values and reset the app
  function initializeThis() {
    computerRandomNumber = 0;
    crystalRandomNumber = 0;
    userScore = 0;
    crystalOneRandomNumber = 0;
    crystalTwoRandomNumber = 0;
    crystalThreeRandomNumber = 0;
    crystalFourRandomNumber = 0;
    


    $("#randomNumber, #totalScore").empty();

    // Generate the Computer random number
    computerRandomNumber = randomIntFromInterval(19, 120);
    // Generate the random numbers for each crystal
    createCrystalsRandomNumbers();

    console.log("Computer Random number is = " + computerRandomNumber);
    $("#randomNumber").text(computerRandomNumber);

  }

  function checkScore() {

    if (userScore === computerRandomNumber) {
      userWin++;
      $("#wins").text(userWin);

      $("h2:first").replaceWith("<h2 class=\"text-center, blink_me\">You Won!</h2>").delay(3000);
      initializeThis();
    }
    else if (userScore > computerRandomNumber) {
      userLose++;
      $("#losses").text(userLose);
      $("h2:first").replaceWith("<h2 class=\"text-center, blink_me\">You Lost!</h2>").delay(3000);

      initializeThis();
    }
  }

  initializeThis();

  // Add an on click listener to Crystals
  $("#crystal1").on("click", function () {
    $("h2:first").replaceWith("<h2></h2>");
    userScore = userScore + crystalOneRandomNumber;
    console.log(userScore);
    $("#totalScore").text(userScore);
    checkScore();
  });

  $("#crystal2").on("click", function () {
    $("h2:first").replaceWith("<h2></h2>");
    userScore = userScore + crystalTwoRandomNumber;
    console.log(userScore);
    $("#totalScore").text(userScore);
    checkScore();
  });

  $("#crystal3").on("click", function () {
    $("h2:first").replaceWith("<h2></h2>");
    userScore = userScore + crystalThreeRandomNumber;
    console.log(userScore);
    $("#totalScore").text(userScore);
    checkScore();
  });

  $("#crystal4").on("click", function () {
    $("h2:first").replaceWith("<h2></h2>");
    userScore = userScore + crystalFourRandomNumber;
    console.log(userScore);
    $("#totalScore").text(userScore);
    checkScore();
  });

});

