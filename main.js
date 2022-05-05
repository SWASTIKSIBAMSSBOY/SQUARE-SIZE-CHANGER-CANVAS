noseY=0;
noseX=0;
difference = 0;
rightWristX = 0;
leftWristX = 0;

function setup() 
{
  video = createCapture(VIDEO);
  video.size(530, 500);

  canvas = createCanvas(500, 500);
  canvas.position(560, 150);
  
  poseNet = ml5.poseNet(video, modelLoaded);
  poseNet.on('pose', gotPoses);
}

function modelLoaded()
{
	console.log(
		"%cMADE BY - SWASTIK SIBAM NAYAK",
		"color: white; background:linear-gradient(#E66465, #9198E5); padding: 1.2em; border-radius: 6px;"
	);
}

function draw() {
	background('#969A97');
	  document.getElementById("square_side").innerHTML = 
	  "Width And Height of a Square will be = " + difference +"px";
	  fill('#0afa86');
	  stroke('#fa0a66');
	  square(noseX, noseY, difference);
	}

function gotPoses(results)
{
  if(results.length > 0)
  {
    console.log(results);
    noseX = results[0].pose.nose.x;
    noseY = results[0].pose.nose.y;
    console.log("noseX = " + noseX +" noseY = " + noseY);

    leftWristX = results[0].pose.leftWrist.x;
    rightWristX = results[0].pose.rightWrist.x;
    difference = floor(leftWristX - rightWristX);

    console.log("leftWristX  = " + leftWristX  + 
    " rightWristX = "+ rightWristX + " difference = " + difference);
  }
}


