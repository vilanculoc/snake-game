let canvas = document.getElementById("snake");
let context = canvas.getContext("2d");
let box = 32; // tamanho de cada quadradinho e o canvas tera 16 quadradinhos de 32 px cada
let snake = [];

snake[0]={
	x: 8 * box,
	y: 8 * box		
}

let direction = "right";

let food = {
		x: Math.floor(Math.random() *15 +1) *box,
		y: Math.floor(Math.random() *15 +1) *box
}

function criarBG(){
	
	context.fillStyle = "black";
	context.fillRect(0, 0, 16 * box, 16 *box);
		
}


function criarCobrinha (){
    for(i = 0; i < snake.length; i++){
        context.fillStyle = "gray";
        context.fillRect(snake[i].x, snake[i].y, box, box);
    }
}


function criarComida(){
        context.fillStyle = "red";
        context.fillRect(food.x, food.y, box, box);
	
}

// definir as accoes realizadas pelas teclas de direccao do key board
document.addEventListener('keydown',update);

function update(event){
	if(event.keyCode ==37 && direction != "right") direction ="left";  
	if(event.keyCode ==38 && direction != "down") direction ="up";		
	if(event.keyCode ==39 && direction != "left") direction ="right";
	if(event.keyCode ==40 && direction != "up") direction ="down";
}

/*Var velocidade = document.getElementById("dificuldade");
function setSpeed(){
	if (dificuldade.value=1){
	
	}
}

//passar o parametro no lugar da velocidade set interval
*/

function iniciarJogo(){
	if(snake[0].x > 15*box && direction =="right") snake[0].x = 0;
	if(snake[0].x < 0 && direction =="left") snake[0].x =16*box;
	if(snake[0].y > 15*box && direction =="down") snake[0].y =0;
	if(snake[0].x < 0 && direction =="up") snake[0].y = 16 * box;
	
	criarBG();
	criarCobrinha();	
	criarComida();
	
	let snakex = snake[0].x;
	let snakey = snake[0].y;
	
	if(direction =="right")snakex += box;
	if(direction =="left") snakex -= box;
	if(direction =="up") snakey -= box;
	if(direction =="down") snakey += box;
	
	if(snakex != food.x || snakey != food.y){
		snake.pop();	
		
	}
	
	else{
		food.x = Math.floor(Math.random() *15 +1) *box,
		food.y = Math.floor(Math.random() *15 +1) *box
	}
	
	let newHead = {
		x: snakex,
		y: snakey
			
	}
	
	snake.unshift(newHead);
}

let jogo = setInterval(iniciarJogo, 200);
// BG = background
//cobrinha e uma array de coordenadas, onde adicionamos no inicio e removemos no fim para que se movimente.