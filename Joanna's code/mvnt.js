ballX = 200; //middle of the x axis
ballY = 150; //middle of the y axis
ballDX = 0; //rate of change of x axis
ballDY = 0; //rate of change of y axis

function setup(){
	createCanvas(400, 300); //size of canvas
}

function draw(){
	background(0, 100, 200); //color blue

	//move the ball around
	ballX += ballDX;
	ballY += ballDY

	//keyboard (make sure you use lower case) 
	if(keyIsPressed){
		//up
		if(key=="w"){
			ballDY = -1;
			ballDX = 0;
		}
		//down
		if(key=="s"){
			ballDY = 1;
			ballDX = 0;
		}
		//left
		if(key=="a"){
			ballDX = -1;
			ballDY = 0;
		}
		//right
		if(key=="d"){
			ballDX = 1;
			ballDY = 0;
		}
	}
	//edges
	if(ballX > 400){ //if ball goes beyond right edge(400), goes back to the left edge(0)
		ballX = 0;
	}
	if(ballX < 0){ //if ball goes beyond left edge(0), goes back to the right edge(400)
		ballX = 400;
	}
	if(ballY > 300){ //if ball goes beyond upper edge(300), goes back to the down edge(0)
		ballY = 0;
	}
	if(ballY < 0){ //if ball goes beyond down edge(0), goes back to the upper edge(300)
		ballX = 300;
	}
	circle(ballX, ballY, 20); //20 is the diameter
}