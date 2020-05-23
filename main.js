let canvas = document.getElementById("snake");
let context = canvas.getContext("2d");
let box = 32; // tamanho de cada quadradinho e o canvas tera 16 quadradinhos de 32 px cada
let snake = [];

snake[0]={
	x: 8 * box,
	y: 8 * box		
}

let direction = "right";

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

/*Var velocidade = document.getElementById("dificuldade");
function setSpeed(){
	if (dificuldade.value=1){
	
	}
}

//passar o parametro no lugar da velocidade set interval
*/

function iniciarJogo(){
	
	criarBG();
	criarCobrinha();	
	
	let snakex = snake[0].x;
	let snakey = snake[0].y;
	
	if(direction =="right") snakex += box;
	if(direction =="left") snakex -= box;
	if(direction =="up") snakey += box;
	if(direction =="down") snakey -= box;
	
	snake.pop();
	
	let newHead = {
		x: snakex,
		y: snakey
			
	}
	
	snake.unshift(newHwad);
}

let jogo = setInterval(iniciarJogo, 100);
// BG = background
//cobrinha e uma array de coordenadas, onde adicionamos no inicio e removemos no fim para que se movimente.