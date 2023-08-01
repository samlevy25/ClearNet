document.addEventListener("DOMContentLoaded", function () {
  var btnClearCookies = document.getElementById("btnClearCookies");
  var btnClearHistory = document.getElementById("btnClearHistory");
  var container = document.querySelector(".container"); // get reference to .container
  var blurOverlay = document.createElement("div");
  blurOverlay.classList.add("blur-overlay");
  var validationMessage = document.createElement("p");
  validationMessage.classList.add("validation-message");
  var closeButton = document.getElementById("closeButton");
  var linkClickable = document.getElementById("linkClickable");
  var infoButton = document.getElementById("infoButton");

  closeButton.addEventListener("click", function() {
    window.close();
  });

  infoButton.addEventListener("click", function() {
    window.location.href = "info.html";
  });

  linkClickable.addEventListener("click", function() {
    window.location.href = "history.html";
  });

  btnClearCookies.addEventListener("click", function () {
    clearCookies();
  });

  btnClearHistory.addEventListener("click", function () {
    clearHistory();
  });

  function clearCookies() {
    chrome.browsingData.removeCookies({}, function () {
      showMessage("Cookies cleared successfully.");
    });
  }

  function clearHistory() {
    chrome.browsingData.removeHistory({}, function () {
      showMessage("History cleared successfully.");
    });
  }

  function showMessage(message) {
    validationMessage.textContent = message;
    blurOverlay.appendChild(validationMessage);
    container.appendChild(blurOverlay); 
    setTimeout(function () {
      blurOverlay.remove();
    }, 2000);
  }
});
