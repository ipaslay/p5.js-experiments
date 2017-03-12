var canW;
var canH;
var triangle_p;

function setup(){
    canW = displayHeight;
    canH= displayHeight;
    createCanvas(canW,canH);
    
    stroke(255,255,255);
    //strokeWeight(2);
	noFill();
   
	noLoop();

    triangle_p = [[canW/2,0,0,canH,canW,canH]];

    
        for (var n=0;n<10000;n++){
    var x1 = (triangle_p[n][0]-triangle_p[n][2])/2+triangle_p[n][2];
    var x2 = (triangle_p[n][4]-triangle_p[n][2])/2+triangle_p[n][2];
    var x3 = (triangle_p[n][4]-triangle_p[n][0])/2+triangle_p[n][0];
    var y1 = (triangle_p[n][3]-triangle_p[n][1])/2+triangle_p[n][1];
    var y2 = (triangle_p[n][5]-triangle_p[n][3])/2+triangle_p[n][3];
    var y3 = (triangle_p[n][5]-triangle_p[n][1])/2+triangle_p[n][1];
        //triangle_p.push([x1,y1,x2,y2,x3,y3]);
        triangle_p.push([triangle_p[n][0],triangle_p[n][1],x1,y1,x3,y3]);
        triangle_p.push([x1,y1,triangle_p[n][2],triangle_p[n][3],x2,y2]);
        triangle_p.push([x3,y3,x2,y2,triangle_p[n][4],triangle_p[n][5]]);
    }    
}

function draw(){
    
    background(190,10,0);
    //background(10,20,140);
    
    for (var n=0;n<triangle_p.length;n++){
    triangle(triangle_p[n][0],triangle_p[n][1],triangle_p[n][2],triangle_p[n][3],triangle_p[n][4],triangle_p[n][5]);
}
}


