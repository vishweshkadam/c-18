var canvas = document.getElementById("myFirstCanvas");
ctx = canvas.getContext("2d");

ctx.beginPath();
ctx.strokeStyle = "grey";
ctx.lineWidth = 2;
ctx.rect(150, 143, 500, 250);
ctx.stroke(); 

ctx.beginPath();
ctx.strokeStyle = "blue";
ctx.lineWidth = 5;
ctx.arc(250, 220, 50, 0, 2 * Math.PI);
ctx.stroke(); 

ctx.beginPath();
ctx.strokeStyle = "black";
ctx.lineWidth = 5;
ctx.arc(375, 220, 50, 0, 2 * Math.PI);
ctx.stroke(); 

ctx.beginPath();
ctx.strokeStyle = "red";
ctx.lineWidth = 5;
ctx.arc(500, 220, 50, 0, 2 * Math.PI);
ctx.stroke();

ctx.beginPath();
ctx.strokeStyle = "yellow";
ctx.lineWidth = 5;
ctx.arc(314, 275, 50, 0, 2 * Math.PI);
ctx.stroke(); 

ctx.beginPath();
ctx.strokeStyle = "green";
ctx.lineWidth = 5;
ctx.arc(440, 275, 50, 0, 2 * Math.PI);
ctx.stroke(); 



