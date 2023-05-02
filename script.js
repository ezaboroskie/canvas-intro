var canvas = document.getElementById('main-canvas')

//sets canvas context to 2d
var ctx = canvas.getContext("2d");

//resizes canvas to fit view window
function resize(){
    ctx.canvas.width = window.innerWidth;
    ctx.canvas.height = window.innerHeight;
}
window.addEventListener("resize", resize);
resize()

document.addEventListener("mousemove", draw);
document.addEventListener("mousedown", setPosition);
document.addEventListener("mouseenter", setPosition);

// last known position 
var pos = { x: 0, y: 0 };

// sets draw position to be where the client clicks
function setPosition(e){
    pos.x = e.clientX;
    pos.y = e.clientY;
}

// if mouse is not clicked, do not go further
function draw(e) {
    if (e.buttons !== 1) return; 

    var color = 'black';
    ctx.beginPath(); // begin the drawing path
    
    // line properties
    ctx.lineWidth = 15; // width of line
    ctx.lineCap = "round"; // rounded end cap
    ctx.strokeStyle = color; // hex color of line

    // tracks the user's 
    ctx.moveTo(pos.x, pos.y); // from position
    setPosition(e);
    ctx.lineTo(pos.x, pos.y); // to position
 
    ctx.stroke(); // draw it!
}