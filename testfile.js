const healthBarFill = document.getElementById("health-bar-fill");
  healthBarFill.style.animationDuration = "20s"; 
  healthBarFill.classList.remove("paused");
  void healthBarFill.offsetWidth; // Trigger reflow to restart animation
  healthBarFill.classList.add("paused");