const tela = document.querySelector("canvas");
const pincel = tela.getContext("2d");

pincel.fillStyle = "lightgrey";
pincel.fillRect(0, 0, 500, 400);

pincel.fillStyle = "red";
pincel.fillRect(500, 0, 600, 400);
pincel.fillRect(0, 300, 600, 200);

pincel.fillStyle = "green";
pincel.fillRect(50, 50, 200, 200);
pincel.fillRect(250, 250, 50, 50);
pincel.fillRect(0, 0, 50, 50);
pincel.fillRect(250, 0, 50, 50);
pincel.fillRect(0, 250, 50, 50);

pincel.fillStyle = "yellow";
pincel.beginPath();
pincel.moveTo(300, 300);
pincel.lineTo(400, 100);
pincel.lineTo(500, 300);
pincel.fill();

pincel.fillStyle = "blue";
pincel.beginPath();
pincel.arc(400, 50, 50, 0, 2 * 3.14);
pincel.fill()