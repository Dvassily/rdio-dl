var filename = document.getElementsByClassName('song__artist')[0].innerHTML + '-' + document.getElementsByClassName('song__title')[0].innerHTML + '.mp3';

if (document.getElementById('dl-button') === null) {
    document.getElementsByClassName('social_links_icons')[0].innerHTML += '<button id="dl-button">Download</button>';
}

document.getElementById('dl-button').addEventListener("click", function() {
    browser.runtime.sendMessage({
	fileName : filename
    });
});

