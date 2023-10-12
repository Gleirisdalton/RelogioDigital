var displayHours = document.getElementById('displayhour"');
      var displayMinutes = document.getElementById('displayMinutes');
      var displaySeconds = document.getElementById('displaySeconds');

      var currentTime = new Date();

      displayHour.innerHTML = currentTime.getHours() + " hrs";
      displayMinutes.innerHTML = currentTime.getMinutes() + " min";
      displaySeconds.innerHTML = currentTime.getSeconds() + " sec";