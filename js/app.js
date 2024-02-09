const tomaEl = {
  name: "Toma!", // String
  weight: 0, // Number
  happiness: 0, //Number
  energy: 0,  //Number
  timer: 10, // Number
  buttonsEnabled: true, //Boolean // enable buttons when we start
  feedButton: function() {  // when the feed button is pressed, this will change the value
    if (this.buttonsEnabled) {     // this function will not work if the time has ran out.   
      this.weight += 10;
      this.happiness += 1;
      this.energy -= 10;
      this.updateDisplay();// this will paint the screen with the new information.
    }
  },
  playButton: function() {
    if (this.buttonsEnabled) {
      this.weight -= 10;
      this.happiness += 10;
      this.energy += 10;
      this.updateDisplay();
    }
  },
  restButton: function() {
    if (this.buttonsEnabled) {
      this.energy += 2;
      this.weight += 1;
      this.happiness += 5;
      this.updateDisplay();
    }
  }, 

  updateDisplay: function() {
    document.getElementById("name").innerText = this.name;//paint to screen the name
    document.getElementById("weight").innerText = this.weight;//paint to screen the weight
    document.getElementById("happiness").innerText = this.happiness;//paint to screen the happy
    document.getElementById("energy").innerText = this.energy;//paint to screen the energy
    document.getElementById("timer").innerText = this.timer; //paint to screen the what is  left on time
  
    // Update the score
    const total = this.weight + this.happiness + this.energy;
    document.getElementById("finalScore").innerText = total;

    // if the timer is less than or equal 0 disable the buttons
    if (this.timer <= 0) {
      this.buttonsEnabled = false;
    }
  }
}; // Closing tomaEl object

// Timer Function 
function startTimer(durationInSeconds) {
  let timer = durationInSeconds;
  const intervalId = setInterval(() => {
    tomaEl.timer = timer;     
    if (--timer < 0) { // if we ran out of time then disable 
      clearInterval(intervalId);
      tomaEl.buttonsEnabled = false; // if we ran out of time then disable 
    }
    tomaEl.updateDisplay(); // paint the screen every second
  }, 1000); //10,000 milliseconds is 10 seconds, the game will only run for 10 minutes
}

// Event listener for the button.. 
// i had to use bind for the buttons to work, google and trial and error
document.getElementById("feedButton").addEventListener("click", tomaEl.feedButton.bind(tomaEl));
document.getElementById("playButton").addEventListener("click", tomaEl.playButton.bind(tomaEl));
document.getElementById("restButton").addEventListener("click", tomaEl.restButton.bind(tomaEl));

// Start the timer, this initiates the funtion startTimer
startTimer(tomaEl.timer);

// Initial display
tomaEl.updateDisplay();
