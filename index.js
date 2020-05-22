function SuccessMessage(){
    alert("Your form was successfully sent, we'll be in touch soon");}
	
var currentfontsize = localStorage.getItem("currentfontsize");
if (currentfontsize === null) {
	currentfontsize = "1em";
	localStorage.setItem("currentfontsize", currentfontsize);
}

//Alert used to debug when page refresh was resetting the font size
//alert("running fontsize to " + currentfontsize);
document.body.style.fontSize = currentfontsize;

function doubletxt() {

	currentfontsize = "2em";
	document.body.style.fontSize = currentfontsize;
	//alert("font " + currentfontsize);
	localStorage.setItem("currentfontsize", currentfontsize);
}

function settxt() {
	currentfontsize = "1em";
	document.body.style.fontSize = currentfontsize;
	//Test for current font size being held in local storagez
	//alert("font " + currentfontsize);
	localStorage.setItem("currentfontsize", currentfontsize);
}

function halftxt() {
	currentfontsize = "0.5em";
	document.body.style.fontSize = currentfontsize;
	//Test for current font size being held in local storage
	//alert("font " + currentfontsize);
	localStorage.setItem("currentfontsize", currentfontsize);
}
//Check background colour in local storage. If null set to 'day'
var currentbg = localStorage.getItem("currentbg");
if (currentbg === null) {
//	alert("change background to day if null" + currentbg);
	currentbg = "#ffffff";
	document.body.style.color = "#000000";
	localStorage.setItem("currentbg", currentbg);
}

//Check document text colour in local storage. If null set it to black
var currenttextcolor = localStorage.getItem("currenttextcolor");
if (currenttextcolor === null) {
	currenttextcolor = "#000000";
	document.body.style.color = "#000000";
	localStorage.setItem("currenttextcolor", currenttextcolor);
}

document.body.style.backgroundColor = currentbg;
document.body.style.color = currenttextcolor;

//Night setting; black background and white text. Used in order be energy efficient and for those with visual problems

function darkbg() {
	currentbg = "#0D0D0D";
	currenttextcolor = "#ffffff";
	document.body.style.backgroundColor = currentbg;
	document.body.style.color = currenttextcolor;
	localStorage.setItem("currentbg", currentbg);
	localStorage.setItem("currenttextcolor", currenttextcolor);
}

function lightbg() {

	currentbg = "#ffffff";
	document.body.style.backgroundColor = "#ffffff";
	document.body.style.color = "#000000";
	currenttextcolor = "#000000";
	document.body.style.backgroundColor = currentbg;
	document.body.style.color = currenttextcolor;
	localStorage.setItem("currentbg", currentbg);
	localStorage.setItem("currenttextcolor", currenttextcolor);
}

//Randomly display product images on page refresh
    var images = ["LSDprint.png", "marilynprint.png", "sunsetprint.png", ];
    
//Randomly pick an image from those available and append to banner-load. CSS fades the image in
				  
 $('<img class="fade-in" src="media/images/' + images[Math.floor(Math.random() * images.length)] + '">').appendTo('#banner-load');


function enlargeImage(x) {
  x.style.width = "600px";
  x.style.height = "600px";
}

function thumbnail(x) {
  x.style.height = "200px";
  x.style.width = "200px";
}
