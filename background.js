function logURL(requestDetails) {
    browser.tabs.executeScript({
	code : 'var request = ' + JSON.stringify(requestDetails)
    }, function() {
	browser.tabs.executeScript({
	    file : 'main.js'
	});
    });
}

browser.webRequest.onHeadersReceived.addListener(
  logURL,
    {urls: ["http://radiooooo.com/", "http://*.radiooooo.com/media-server/links/*"]}
);
