var mp3_url = null;

function logURL(requestDetails) {
    mp3_url = requestDetails.url;
    
    browser.tabs.executeScript({
	file : 'main.js'
    });
}

browser.webRequest.onHeadersReceived.addListener(
  logURL,
    {urls: ["http://radiooooo.com/", "http://*.radiooooo.com/media-server/links/*"]}
);

browser.runtime.onMessage.addListener(function (message) {
    console.log(message.fileName);
    browser.downloads.download({
	url : mp3_url,
	filename : message.fileName
    });
})

