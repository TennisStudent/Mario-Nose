function preload() {
	world_start = loadSound("world_start.wav");
	jump = loadSound("jump.wav");
	coin = loadSound("coin.wav");
	game_over = loadSound("gameover.wav");
	mario_die = loadSound("mariodie.wav");
	kick = loadSound("kick.wav");
	setSprites();
	MarioAnimation();
}

function setup() {
	canvas = createCanvas(1240,336);
	canvas.parent('canvas');
	instializeInSetup(mario);

	video = createCapture(VIDEO);
	video.size(600, 300);

	video.parent('game_console');

	posenet = ml5.poseNet(video, modelLoaded);
	posenet.on('pose', gotPoses)
}
function modelLoaded()
{
	console.log("Posenet is initialized!")
}
function draw() {
	game()
}
function gotPoses(results)
{
	if(results.length > 0)
	{
		console.log(results);
		noseX = results[0].pose.nose.x;
		noseY = results[0].pose.nose.y;
		console.log("Nose X: " + noseX + " Nose Y: " + noseY);
	}
}







