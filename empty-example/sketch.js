var x= new Array(100);
var y= new Array(100);
var xDirection= new Array(100);
var yDirection= new Array(100);
var notZero=1;
var corner=0;
var startTime;
var currentTime;


var kubai=10;

function setup() {
	createCanvas(windowWidth,windowHeight);
	createRect();
	startTime=Date.now();
}



function draw() {

background(51);




for(var i=1; i<=kubai; i++){

	fill(230, 230, 230);
	rect(x[i], y[i],60,60);
	textSize(20);
	fill(255, 255, 255);
	currentTime=Date.now();
	text('Hit Corner: '+corner, 10, 30);
	text(' Current second: ' + (currentTime-startTime)/1000, 5, 50);
fill(6, 0, 124);
	text('DVD', x[i]+10, y[i]+35);

	move(i);
	cornerCounter(i);

	}
}





function createRect(){
	for(var i=1; i<=kubai; i++){
	x[i]=random(0,windowWidth-61);
	y[i]=random(0,windowHeight-61);


	xDirection[i]= Math.random() < 0.5 ? 2 : -2;
	yDirection[i]=Math.random() < 0.5 ? 2 : -2;
	}
}

function move(i){
	
x[i]=x[i]+xDirection[i];
    y[i]=y[i]+yDirection[i];

  if(x[i]>=windowWidth-60){
  	xDirection[i]=-xDirection[i];

  } 
  if (x[i]<=0){
  	xDirection[i]=-xDirection[i];

  }

  if(y[i]>=windowHeight-60){
  	yDirection[i]=-yDirection[i];

  } 
  if (y[i]<=0){
  	yDirection[i]=-yDirection[i];

	  }

}

function cornerCounter(i){

	  if(x[i]<=0&&y[i]<=0){
	  	corner++;
	  	console.log(corner);
	  	console.log(x[i]-60);
	  	console.log(y[i]-60);

	  }

	  if(x[i]<=0&&y[i]>=windowHeight-60){
	  	corner++;
	  	console.log(corner);
	  	console.log(x[i]-60);
	  	console.log(y[i]-60);
	  }

	  if(x[i]>=windowWidth-60&&y[i]>=windowHeight-60){
	  	corner++;
	  	console.log(corner);
	  	console.log(x[i]-60);
	  	console.log(y[i]-60);
	  }

	  if(x[i]>=windowWidth-60&&y[i]<=0){
	  	corner++;
	  	console.log(corner);
	  	console.log(x[i]-60);
	  	console.log(y[i]-60);
	  }

}


function windowResized(){
	resizeCanvas(windowWidth,windowHeight);
}

