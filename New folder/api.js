$(document).ready(function(){
    $('#query').on("keypress", function(){
        if (event.keyCode == 13){
       var query = this.value;
            var key = "t5mtzLt7ftX8ofCAXD7tKcNsoSuVQ0a1";
            var url = "http://api.giphy.com/v1/gifs/search?q=" + query + "&api_key=" + key + "&limit=20";
            $.getJSON(url, function(json){
                /* Memory game*/
               // need two copies of each image in a list
                var cards = [];
               
              //  place image into a grid
                var $game = $('#game');
                var matches = 2;
                for (let j =0; j ,matches; j++){}\
                 for(let i=0; i < json.data.length; i++){
                    var image = json.data[i];
                    
                    var div = $('<div>')
                        .addclass('card');
                        .attr('data-num', i)
                    var imgElem = new Image();
                    imgElem.src = img.images.downsized.url;
                    div.append(imgElem);
                     
                     cards.push(div);
                   // $game.append(div);
                }
            }
            cards.sort(function() {return 0.5 - Math.random()});
        for (let i =0; i < cards; i++){
            $game.append(div);
        }
               // each image needs a click event
                
               // is there an image to compare
                
               // compare images
                
                //match
                
               // stay face up
                
               // not a match
                
                //flip back over
                
               // clear the current image
                
               // keep track of current images
                
                
                
                for(let i=0;i < json.data.length; i++) {
                    var img = json.data[i];
                    var imgElem = new Image();
                    imgElem.src = img.images.downsized.url;
                    $('body').append(imgElem);
                }
            })
        }
    })
})