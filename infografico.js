function setup(){
    let cnv = createCanvas(800, 410);
    cnv.id('mycanvas');
    background(255);
}

var tiled = 400/10;

var robo = 
{ 
    x :  tiled * 14,
    y :  tiled * 8  
}

function draw(){
    fill(255);
    for(var i=0; i<20; i++ )
        for(var j=0; j<10; j++ )
            rect(tiled*i, tiled*j, tiled, tiled);

    fill(0);
    rect(robo.x, robo.y, tiled, tiled);
}

