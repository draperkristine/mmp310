/*
var tag = document.createElement('script');
tag.src = "http://www.youtube.com/iframe_api";
var firstTagScript = document.getElementsByTagName('script')[0];
firstTagScript.parentNode.insertBefore(tag, firstTagScript);
	

window.onYoutubeIframeAPIReady=function(){
	console.log("ready");
	var p = new YTPlayer('king', {
		videoId: 'I8ZWpTT_5IA?',
		width: 560,
		height: 315,
		playerVars: {
			controls: 0,
			modestbranding: 1,
			showinfo: 0
		},

		events: {
			onReady: onPlayerReady()
		}
	});

}

function onPlayerReady(event){

    var player = event.target;
    var parent = event.target.a.parentNode;
    var a = document.createElement('a');
    a.textContent = "A";
    a.onclick = function() {
        player.pauseVideo();
    };
    parent.appendChild(a);
    var b = document.createElement('b');
    b.textContent = "B";
    b.onclick = function() {
    player.playVideo();
        };
    parent.appendChild(b);	
}
*/

// 2. This code loads the IFrame Player API code asynchronously.
      var tag = document.createElement('script');

      tag.src = "https://www.youtube.com/iframe_api";
      var firstScriptTag = document.getElementsByTagName('script')[0];
      firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

      // 3. This function creates an <iframe> (and YouTube player)
      //    after the API code downloads.
      var player;
      function onYouTubeIframeAPIReady() {
        player = new YT.Player('player', {
          height: '390',
          width: '640',
          videoId: 'M7lc1UVf-VE',
          events: {
            'onReady': onPlayerReady,
            'onStateChange': onPlayerStateChange
          }
        });
      }

      // 4. The API will call this function when the video player is ready.
      function onPlayerReady(event) {
        var player = event.target;
        var parent = event.target.a.parentNode;
        var a = document.createElement('a');
        a.textContent = "A";
        a.onclick = function() {
            player.pauseVideo();
        };
        parent.appendChild(a);
        var b = document.createElement('b');
        b.textContent = "B";
        b.onclick = function() {
        player.playVideo();
            };
        parent.appendChild(b);  

        event.target.playVideo();


      }

      // 5. The API calls this function when the player's state changes.
      //    The function indicates that when playing a video (state=1),
      //    the player should play for six seconds and then stop.
      var done = false;
      function onPlayerStateChange(event) {
        if (event.data == YT.PlayerState.PLAYING && !done) {
          setTimeout(stopVideo, 6000);
          done = true;
        }
      }
      function stopVideo() {
        player.stopVideo();
      }










