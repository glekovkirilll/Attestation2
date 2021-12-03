var colors = [];
colors[0] = document.getElementById("red");
colors[1] = document.getElementById("orange");
colors[2] = document.getElementById("yellow");
colors[3] = document.getElementById("green");
colors[4] = document.getElementById("lightBlue");
colors[5] = document.getElementById("blue");
colors[6] = document.getElementById("purple");
colors[7] = document.getElementById("salmon");
colors[8] = document.getElementById("fuchia");
colors[9] = document.getElementById("black");

var list = document.getElementById("paletteList");
list.addEventListener("click", pickColor);

var canvas = document.getElementById("canvas");
var canvasContext = canvas.getContext("2d");
canvas.addEventListener("mousemove", drawOnCanvas);

var sizeBar = document.getElementById("myRange");

function pickColor(e){
	console.log(e.target.tagName);

	if(e.target.tagName=="LI"){
		if(e.target.id == "red"){
			targetColor="#DA2C06"
		}
		else if(e.target.id == "orange"){
			targetColor="#DA8A06"
		}
		else if(e.target.id == "yellow"){
			targetColor="#E8E815"
		}
		else if(e.target.id == "green"){
			targetColor="#88E815"
		}
		else if(e.target.id == "lightBlue"){
			targetColor="#15E8D8"
		}
		else if(e.target.id == "blue"){
			targetColor="#1538E8"			
		}
		else if(e.target.id == "purple"){
			targetColor="#8215E8"
		}
		else if(e.target.id == "salmon"){
			targetColor="#FFA07A"
		}
		else if(e.target.id == "fuchia"){
			targetColor="#FF00FF"
		}
		else if(e.target.id == "black"){
			targetColor="#000000"
		}


		for(var i = 0; i <= 9; i++){
			colors[i].style.height="50px";
			colors[i].style.width="50px";
			colors[i].style.border="0px solid white"
		}
			e.target.style.width = "70px";
			e.target.style.height = "70px";
		
	}
}


function drawOnCanvas(e){
	if(e.which==1){

		canvasContext.fillStyle=targetColor;
		canvasContext.beginPath();
		canvasContext.arc(e.offsetX, e.offsetY, sizeBar.value * 5, 0, Math.PI*2);
		canvasContext.fill();
		canvasContext.strokeStyle = 'rgba(0,0,0,0)';
	}
}