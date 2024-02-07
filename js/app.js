
//start with 100 %
//die at 0%
//primary math
    //the game goal is to decrease value over time
        // if i press a button to feed - reset the timer back to 1 minute and add 1 point
        // If the button is not pressed decrease health, every 20 seconds if button is not pressed
     // first phase lets test out timers
     // https://www.shecodes.io/athena/52336-how-to-create-a-countdown-timer-in-javascript

     //do something after 10 seond timeer
    // function myFunction() {
    //     console.log('Hello'); 
    // }
    // setTimeout(myFunction, 10000);
//https://www.youtube.com/watch?v=x7WJEmxNlEs&t=301
// const myTimeout = setTimeout(myGreeting, 5000);


// function myGreeting() {
//   document.getElementById("demo").innerHTML = "Your 5 second timer has ran out!!"
// }

// function myStopFunction() {
//   clearTimeout(myTimeout);
//   myTimeout()
// }


// let start = document.querySelector('#start');
// let stop  = document.querySelector('#stop');

// start.addEventListener('click', function() {
// 	let timerId = setInterval(function() {
// 		console.log('!')
// 	}, 1000);
// });

// // Stopping the timer:
// stop.addEventListener('click', function() {
// 	clearInterval(timerId);
// });
//The greater than or equal ( >= ) operator returns true if the left operand is greater than or equal to the right operand, and false otherwise.

 // Decrease progress bar width gradually over 10 seconds
 let animation; // Variable to store animation ID

  // Function to start the progress bar animation
  document.getElementById('startButton').addEventListener('click', () => {
    const progressBarFill = document.getElementById('progressBar');
    progressBarFill.style.animationPlayState = 'running'; // Start the animation
  });

  // Function to stop the progress bar animation
  document.getElementById('stopButton').addEventListener('click', () => {
    const progressBarFill = document.getElementById('progressBar');
    progressBarFill.style.animationPlayState = 'paused'; // Pause the animation
  });