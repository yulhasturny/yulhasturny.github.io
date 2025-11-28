let number = 0;
let running = true;
let volumeIcon;
let iconSize;
let iconOffset;
let color1, color2
//image volume Icon
function preload() {
	volumeIcon = loadImage('volume_speaker_audio_sound_icon_219209.png');
}
//background
function setGradient(c1, c2) {
    noFill()
    for (var y = 0; y < height; y++) {
        var inter = map(y, 0, height, 0, 1);
        var c = lerpColor(c1, c2, inter)
        stroke(c)
        line(0, y, width, y);
	}
}

function setup() {
	createCanvas(windowWidth, windowHeight);
	textAlign(CENTER, CENTER);
	textSize(100);
	imageMode(CENTER);
    color1 = color(255,186,193)
    color2 = color(100,200,255)

iconSize = height * 0.1;
	iconOffset = iconSize * 1.5;
//adjust button 
	let button = createButton('adjust volume');
	button.position(width / 2 - 50, height / 2 + iconOffset);
	button.mousePressed(() => running = false);
	
}

function draw() {
	background(255);
	frameRate(10);
setGradient(color1, color2)
  
	image(volumeIcon, width / 2, height / 2 - iconOffset, iconSize, iconSize);
//random numbers run as long true 
	if (running) {
		number = floor(random(1, 101));
	}
noStroke()
	fill(150);
	text(number, width / 2, height / 2);

}