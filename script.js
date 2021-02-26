const canvas = document.getElementById('canvas1');
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

///
//let size = 0;
let positionX = 100;
let positionY = 100;
let angle = 0;

function circleLogic() {

    ctx.fillStyle = 'red';
    ctx.strokeStyle = 'blue';
    ctx.lineWidth = 5;
    ctx.beginPath();
    ctx.arc(positionX, positionY, 20, 0, Math.PI * 2);
    ctx.closePath();
    ctx.fill();
    ctx.stroke();
}

///

function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    //size += 0.05;
    positionX += 5 * Math.sin(angle);//-1 to 1 sin function.
    positionY += 5 * Math.cos(angle);
    angle += 0.1;
    circleLogic();
    console.log(positionX + "----" + positionY);

    requestAnimationFrame(animate);
}

animate();