chrome.history.search({ text: "", maxResults: 100 }, function(data) {
    var historyList = document.getElementById("historyList");
  
    data.forEach(function(page) {
      var listItem = document.createElement("li");
  
      var dateSpan = document.createElement("span");
      dateSpan.classList.add("date");
      dateSpan.textContent = formatDate(page.lastVisitTime);
      listItem.appendChild(dateSpan);
  

      var separatorSpan = document.createElement("span");
      separatorSpan.textContent = " - ";
      listItem.appendChild(separatorSpan);
  
      var titleSpan = document.createElement("span");
      titleSpan.classList.add("title");
      titleSpan.textContent = page.title;
      listItem.appendChild(titleSpan);
  
      historyList.appendChild(listItem);
    });
  });

function formatDate(timestamp) {
  var date = new Date(timestamp);
  var options = { year: "numeric", month: "long", day: "numeric" };
  return date.toLocaleDateString("en-IL", options);
}

document.querySelector(".arrow").addEventListener("click", function () {
  history.back();
});
