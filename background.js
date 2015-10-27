chrome.runtime.onMessage.addListener( function(request, sender, sendResponse) {
  if (request.shutdown) {
    var currentWindowID = sender.tab.windowId;
    chrome.tabs.getAllInWindow(currentWindowID, function(tabArray){
      var tabIdArray = tabArray.map(function(tab){ return tab.id });
      chrome.tabs.remove(tabIdArray, function(){});
    });
  };
});

