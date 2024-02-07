// Tamagotchi object
const tomaEl = {
  name: "Toma",
  hunger: 50,
  happiness: 50,
  energy: 50,
  feed: function() {
    this.hunger -= 10;
    this.happiness += 5;
    this.updateDisplay();
  },
  play: function() {
    this.hunger += 5;
    this.happiness += 10;
    this.energy -= 10;
    this.updateDisplay();
  },
  rest: function() {
    this.energy += 20;
    this.hunger += 10;
    this.updateDisplay();
  },
  updateDisplay: function() {
    document.getElementById("name").innerText = this.name;
    document.getElementById("hunger").innerText = this.hunger;
    document.getElementById("happiness").innerText = this.happiness;
    document.getElementById("energy").innerText = this.energy;

    // Update overall health
    const health = Math.round((this.hunger + this.happiness + this.energy) / 3);
    document.getElementById("health-bar-fill").style.width = health + "%";
  }
};

// Event listeners for buttons
document.getElementById("Feed-Button").addEventListener("click", () => {
  tomaEl.feed();
});

document.getElementById("Play-Button").addEventListener("click", () => {
  tomaEl.play();
});

document.getElementById("Rest-Button").addEventListener("click", () => {
  tomaEl.rest();
});

// Initial display
tomaEl.updateDisplay();
