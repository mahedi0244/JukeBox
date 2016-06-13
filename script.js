
var playlist = new Array("music1.mp3", "music2.mp3", "music3.mp3", "music4.mp3","music5.mp3");
var count = 0;

$(document).ready(function(){
	
	$(".activate-modal").click(function(e){
	    e.preventDefault(); //dont follow the link
	    $(".modal-wrapper").show(); //show our modal
	    //add the .modal-on class to <body>
	    $("body").addClass("modal-on");   
  	});
	 $(".exit").click(function(e){
	    e.preventDefault();
		//basically the opposite of activate
	    $(".modal-wrapper").hide();
	    $("body").removeClass("modal-on");
	 });
	
  	var myJuke = new Jukebox();
  	$( "#play" ).click(function() {
 		myJuke.play();
	});
	$( "#pause" ).click(function() {
  		myJuke.pause();
	});
	$( "#stop" ).click(function() {
  		myJuke.stop();
	});
	
	$("#loadButton").click(function(e){
	    //e.preventDefault();
	    myJuke.load();
		//basically the opposite of activate
	    $(".modal-wrapper").hide();
	    $("body").removeClass("modal-on");
	 });
	
});

function Jukebox(){   
	var x = nextAudio();
	this.play = function() { 
    	x.play(); 
	} 
	this.pause = function(){
		x.pause();
	}
	this.stop = function(){
		x.pause();
		x.currentTime = 0;
	}
	this.load = function(){
		var path = document.getElementById("usrinput").value;
		audio = document.getElementById("myAudio");
		audio.src = path;
		document.getElementById("myh1").innerHTML = path;

	}
}

function nextAudio() { 
   	var audio = document.getElementById("myAudio");
	audio.src = playlist[count];
	document.getElementById("myh1").innerHTML = playlist[count];
	count = (count+1)%(playlist.length);

	return audio;
} 

function random() { 

	var position = Math.floor((Math.random() * playlist.length));
   	var audio = document.getElementById("myAudio");
	audio.src = playlist[position];
	document.getElementById("myh1").innerHTML = playlist[position];

	return audio;
} 








