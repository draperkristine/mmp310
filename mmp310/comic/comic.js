
var Answer;
var Answer2;
var img1 = "spongehappy.jpg";
var img2 = "spongecop.jpg";
var img3 = "Tweety_Bird.gif";
var img4 = "bettyboo.jpg";
var img5 = "popeye.jpg";
var submit;
$('#submit').click(function() {

	if($('#answer').val()== "Secret"){

		console.log("true");
	} 
	else{
		console.log("try again");
	}

	if($('#answer2').val() == "EMPTY"){
		console.log("true");
	}
	else{
		console.log("try again");
	}

	if(Answer,Answer2 == true){



		var slides = [{

			image:"popeye.jpg";
			caption:"hey Tweety";
		},
		{
			image:"popeye.jpg"
			caption:"are you crazy?";

		},
		{
			image:"Tweety_Bird.gif":
			caption:"no why?";
		},
		{
			image:"popeye.jpg";
			caption:"your talking to yourself";
		},
		{
			image:"no. i'm not talking to myself because i;m crazy, i'm talking to myself because it's the only intelligent conversation i can get around here sometimes";
		}
		]

		var converse = "hey Tweety" + img3 + "Hello popeye" + "Have you seen betty boo she was to meet me but she never showed 	";
		var converse2 = img5 + "no haven't seen her"  + "you need to be careful tweety" + img3 +"why"; 
		var converse3 =  img5 + "spongecop is in one of his moods" + img2 + "hey no standing around especially you tweety hate 	birds always pooping on things";
		var converse4 =  "get out of my sight before I call tom tweety" +img3 + "well excuse me what got his holes all sour"; 
		var converse5 =  img5 + "his lady friend just left him" + img3 + "who?" + img5 + "bettyboo" + img4 + "bo bo dee doo";

	}
});