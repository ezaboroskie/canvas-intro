var canvas = document.getElementById('canvas')

//sets canvas context to 2d
var context = canvas.getContext("2d");

function resize(){
    context.canvas.width = window.innerWidth;
    context.canvas.height = window.innerHeight;
}
window.addEventListener("resize", resize);
resize()

canvas.addEventListener("mousedown", startDraw);
canvas.addEventListener("mouseup", endDraw);
canvas.addEventListener("mousemove", draw);

document.body.addEventListener("touchstart", function (e) {
    if (e.target == canvas) {
      e.preventDefault();
    }
  }, false);
document.body.addEventListener("touchend", function (e) {
    if (e.target == canvas) {
      e.preventDefault();
    }
  }, false);
document.body.addEventListener("touchmove", function (e) {
    if (e.target == canvas) {
      e.preventDefault();
    }
  }, false);

function getMousePos(canvas, evt) {
    var rect = canvas.getBoundingClientRect(),
        scaleX = canvas.width / rect.width,
        scaleY = canvas.height / rect.height;

    return {
        x: (evt.clientX - rect.left) * scaleX,
        y: (evt.clientY - rect.top) * scaleY
    }
}

let drawing=false

function startDraw(e) {
    let { x, y } = getMousePos(canvas, e)
    drawing = true;
    if (e.type == "touchstart" || e.type == "mousedown"){
        buttonDown = true
    }
    if (e.type == "touchstart" || e.type == "touchmove") {
        x = e.touches[0].clientX;
        y = e.touches[0].clientY;
    }else{
        x = e.clientX;
        y = e.clientY;
    }
}

function endDraw(e) {
    drawing = false;
}

function draw(e) {
    if (!drawing) return;

    var color = 'black'

    let { x, y } = getMousePos(canvas, e);

    context.beginPath();
    context.lineWidth = 15; // width of line
    context.lineCap = "round"; // rounded end cap
    context.strokeStyle = color; // hex color of line
    context.moveTo(x, y);
    startDraw(e)
    context.lineTo(x, y);
    context.stroke();
   
}



