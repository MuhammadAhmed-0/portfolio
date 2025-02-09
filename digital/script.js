   // Set the countdown time (6 hours from the current time)
    var countDownDate = new Date().getTime() + (6 * 60 * 60 * 1000); // 6 hours from now

    // Update the countdown every 1 second
    var x = setInterval(function() {

      // Get the current date and time
      var now = new Date().getTime();

      // Find the distance between now and the count down date
      var distance = countDownDate - now;

      // Time calculations for hours, minutes, and seconds
      var hours = Math.floor(distance / (1000 * 60 * 60));
      var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      var seconds = Math.floor((distance % (1000 * 60)) / 1000);

      // Display the result in the respective elements
      document.getElementById("hours").textContent = hours.toString().padStart(2, "0");
      document.getElementById("minutes").textContent = minutes.toString().padStart(2, "0");
      document.getElementById("seconds").textContent = seconds.toString().padStart(2, "0");

      // Update the pricing hours section with the same timer
      document.getElementById("pricing-hours").textContent = hours.toString().padStart(2, "0");
      document.getElementById("pricing-minutes").textContent = minutes.toString().padStart(2, "0");
      document.getElementById("pricing-seconds").textContent = seconds.toString().padStart(2, "0");

      // If the countdown is finished, display the expired message
      if (distance < 0) {
        clearInterval(x); // Stop the timer
        document.getElementById("hours").textContent = "00";
        document.getElementById("minutes").textContent = "00";
        document.getElementById("seconds").textContent = "00";

        // Update the pricing timer section as well
        document.getElementById("pricing-hours").textContent = "00";
        document.getElementById("pricing-minutes").textContent = "00";
        document.getElementById("pricing-seconds").textContent = "00";

        // Display message when timer expires
        document.querySelector("h1").textContent = "The offer has expired.";
      }
    }, 1000);
  
