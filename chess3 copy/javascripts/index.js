window.addEventListener("load", function () {
    "use strict";

    var abChess = new AbChess("chessboard");
    abChess.setFEN();
});

/*var tag = document.createElement('script');
tag.src = "http://www.youtube.com/iframe_api";
var firstTagScript = document.getElementsByTagName('script')[0];
firstTagScript.parentNode.insertBefore(tag, firstTagScript);
	
var player;
function onYouTubeIframeAPIReady() {
	player = new YT.Player('player', {
		events: {
		    'onReady': onPlayerReady,
		}
	});
}

function onPlayerReady(event) {
document.getElementById("play").addEventListener("click", function() {
	player.playVideo();
});
document.getElementById("stop").addEventListener("click", function() {
	player.stopVideo()
});
document.getElementById('jump').addEventListener('click', function() {
	if (player && player.getCurrentTime) {
		player.seekTo( player.getCurrentTime() + 5 );
	}
});

function onYoutubeIframeAPIReady(){
	console.log("ready");
	var p = new YTPlayer('king', {
		videoId: "nWNW6PuYqd8"
		width: 560,
		height: 315,
		playerVars: {
			controls: 0,
			modestbranding: 1,
			showinfo: 0
		},

		events: {
			'onReady: onPlayerReady'
		}
	})


function onIframeAPIReady(){
	console.log("ready");
	var p = new YTPlayer('chess1', {
		videoId: "I8ZWpTT_5IA"
		width: 560,
		height: 315,
		playerVars: {
			controls: 0,
			modestbranding: 1,
			showinfo: 0
		},

		events: {
			'onReady: onPlayerReady'
		}
	})



}*/