chrome.runtime.onMessage.addListener( function(request, sender, sendResponse) {
  if (request.shutdown === "STOP") {
    var currentWindowID = sender.tab.windowId;
    chrome.tabs.getAllInWindow(currentWindowID, function(tabArray){
      var tabIdArray = tabArray.map(function(tab){ return tab.id });
      chrome.tabs.remove(tabIdArray, function(){});
    });
  };
  if (request.shutdown === "Dinos") {
    var currentWindowID = sender.tab.windowId;
    chrome.tabs.create({
      windowId: currentWindowID,
      url: "https://www.youtube.com/watch?v=WAjmyllr484"
    },function(tab){
      sendResponse({answer: tab})
    });
  };
});

