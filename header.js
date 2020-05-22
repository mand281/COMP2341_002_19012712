//Header.js controlls the scolling header image using canvas 


//Variables used
var img = new Image();
img.src = 'media/images/PBA_banner_1048x214.png';
var CanvasXSize = 1048;
var CanvasYSize = 214;
// slow scroll, increase speed by using a lower number
var speed = 25; 
//scale the image to crop the header
var scale = 1.2;
var y = -4.5;
var dx = 0.75;
var imgW;
var imgH;
var x = 0;
var clearX;
var clearY;
var ctx;

//set height and width to calculate scroll rate
img.onload = function() {
    imgW = img.width * scale;
    imgH = img.height * scale;
    
    if (imgW > CanvasXSize) {
        x = CanvasXSize - imgW;
    }
    if (imgW > CanvasXSize) {
        // if image width is greater than canvas width
        clearX = imgW;
    } else {
        clearX = CanvasXSize;
    }
    if (imgH > CanvasYSize) {
        // image height larger than canvas
        clearY = imgH;
    } else {
        clearY = CanvasYSize;
    }
    
//Context defined
    ctx = document.getElementById('canvas').getContext('2d');
//rate of refresh set by draw function and speed
    return setInterval(draw, speed);
}

function draw() {
    ctx.clearRect(0, 0, clearX, clearY); // clear the canvas
    
// scroll if the image is less than the canvas size

    if (imgW <= CanvasXSize) {
        if (x > CanvasXSize) {
            x = -imgW + x;
        }
        if (x > 0) {
            ctx.drawImage(img, -imgW + x, y, imgW, imgH);
        }
        // draw additional image2
        if (x - imgW > 0) {
            ctx.drawImage(img, -imgW * 2 + x, y, imgW, imgH);
        }
    }


    else {
		//if image is greater than the canvas Size
        // reset, start from beginning
        if (x > (CanvasXSize)) {
            x = CanvasXSize - imgW;
        }
        // draw aditional image
        if (x > (CanvasXSize-imgW)) {
            ctx.drawImage(img, x - imgW + 1, y, imgW, imgH);
        }
    }
	
//draw image
    ctx.drawImage(img, x, y,imgW, imgH);

//calculate amount to move
    x += dx;
}