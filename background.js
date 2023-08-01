chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
    if (request.action === "deleteData") {
      chrome.browsingData.remove({}, { cookies: true, history: true }, function () {
        sendResponse({ message: "Données supprimées avec succès" });
      });
    }
    return true;
  });
  