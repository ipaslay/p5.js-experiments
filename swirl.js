var canW;
var canH;

function setup(){
    canW = displayWidth*2;
    canH= displayHeight*2;
    createCanvas(canW,canH);
    
    stroke(255,255,255);
    //strokeWeight(3);

    document.getElementById("ran").style.width=String(canW)+"px";
    document.getElementById("ran").value=String(fX);

	//noLoop();
}

 var center = (canW/2, canH/2);

var last_x;
var last_y;

var coe_s =0 ;
var s_direction=true;

var pY =0;
var pX =0;
var pL =0;
var pM =0;
var mk = 5.99;

var fX = 1;
 document.getElementById("ran").value=String(fX);
var fY = 1;

var fL =2;
var fM =1;

var powL=1;
var powM = 2;

function draw(){
    
    background(10,20,140);

    //for (var i=0; i<6; i+=0.63){
	//var x = (cos(i*fX))*750+canW/2;
        //var y = sin(i*fY)*750+canH/2;
	//last_x=canW/2;
	//last_y=canH/2;       
	for(var j=0; j <TWO_PI; j+=0.0025){

		var l = canW/2+cos(tan(j*mk))*cos(j*6)*(640);
		var m = canH/2+sin(tan(j*mk))*cos(j*6)*(640);
        

            line(l,m,last_x,last_y);
             
        last_x = l;
        last_y = m;

	//}
          
        pX +=0.0001;
        pY +=0.0001;
	mk+=0.005;
       
        //fX=document.getElementById("ran").value;

    }

    
}