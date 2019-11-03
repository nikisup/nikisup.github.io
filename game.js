const canavas = document.getElementById("game");
const ctx = canavas.getContext("2d");

// Get background image
const ground = new Image();
ground.src = "images/ground.png";

// Get food image
const foodImg = new Image();
foodImg.src = "images/food.png";

const bomb = new Image();
bomb.src = "images/bomb.png";

// Height and width box (1)
let box = 32;

// Keep score
let score = 0;

// Keep hp
let hp = 100;

// Object with draw food on x,y
let food = {
	// Round to int, range 1 - 18, draw in boxses
	x: Math.floor((Math.random() * 17 + 1)) * box,
	y: Math.floor((Math.random() * 15 + 3)) * box
};

let bombs = {
	x: Math.floor((Math.random() * 17 + 1)) * box,
	y: Math.floor((Math.random() * 15 + 3)) * box,	
	x1: Math.floor((Math.random() * 17 + 1)) * box,
	y1: Math.floor((Math.random() * 15 + 3)) * box,
	x2: Math.floor((Math.random() * 17 + 1)) * box,
	y2: Math.floor((Math.random() * 15 + 3)) * box,
	x3: Math.floor((Math.random() * 17 + 1)) * box,
	y3: Math.floor((Math.random() * 15 + 3)) * box,
	x4: Math.floor((Math.random() * 17 + 1)) * box,
	y4: Math.floor((Math.random() * 15 + 3)) * box,
	x5: Math.floor((Math.random() * 17 + 1)) * box,
	y5: Math.floor((Math.random() * 15 + 3)) * box,
	x6: Math.floor((Math.random() * 17 + 1)) * box,
	y6: Math.floor((Math.random() * 15 + 3)) * box,
	x7: Math.floor((Math.random() * 17 + 1)) * box,
	y7: Math.floor((Math.random() * 15 + 3)) * box,
};

// Snake
let snake = [];

snake[0] = {
	x: 9 * box,
	y: 10 * box
};

//Key listener
document.addEventListener("keydown", direction);

//What key pressed
let dir;

//Listen keybord
function direction (event) {
	if (event.keyCode == 65 && dir != "right")
		dir = "left";
	else if (event.keyCode == 87 && dir != "down") 
		dir = "up";
	else if (event.keyCode == 68 && dir != "left")
		dir = "right";
	else if (event.keyCode == 83 && dir != "up")
		dir = "down";
}

// If snake eat her tail
function eatTail (head, arr) {
	for (let i = 0; i < arr.length; i++) {
		if(head.x == arr[i].x && head.y == arr[i].y) {
			//alert("Game Over");
			clearInterval(game);
		}
	}
}

// Function draw objects into canavas
function drawGame() {
	//Draw ground
	ctx.drawImage(ground, 0, 0);

	// Draw food
	ctx.drawImage(foodImg, food.x, food.y);

	ctx.fillStyle = "orange";
	ctx.fillRect(bombs.x, bombs.y, box, box);
	ctx.fillRect(bombs.x1, bombs.y1, box, box);
	ctx.fillRect(bombs.x2, bombs.y2, box, box);
	ctx.fillRect(bombs.x3, bombs.y3, box, box);
	ctx.fillRect(bombs.x4, bombs.y4, box, box);
	ctx.fillRect(bombs.x5, bombs.y5, box, box);
	ctx.fillRect(bombs.x6, bombs.y6, box, box);
	ctx.fillRect(bombs.x7, bombs.y7, box, box);
	// Draw snake
	for (let i = 0; i < snake.length; i++) {
		// Change color
		ctx.fillStyle = i == 0 ? "green" : "lightgreen";
		// Get context element
		ctx.fillRect(snake[i].x, snake[i].y, box, box);
	}

	// Draw score
	ctx.fillStyle = "white";
	ctx.font = "50px Arial";
	ctx.fillText('Score: ' + score, box * 2.5, box * 1.7);

	// Draw HP
	ctx.fillStyle = "white";
	ctx.font = "50px Arial";
	ctx.fillText('HP: ' + hp, box * 9.5, box * 1.7);

	// X snake
	let snakeX =snake[0].x;
	// Y snake
	let snakeY =snake[0].y;

	// Eat 
	if (snakeX == food.x && snakeY == food.y) {
		score++;
		food = {
			// Draw eat one more time
			x: Math.floor((Math.random() * 17 + 1)) * box,
			y: Math.floor((Math.random() * 15 + 3)) * box
		};		
	} else {
		snake.pop();
	}

	if (snakeX == bombs.x && snakeY == bombs.y) {
		hp = hp - 10;
		bombs = {
			x: Math.floor((Math.random() * 17 + 1)) * box,
			y: Math.floor((Math.random() * 15 + 3)) * box,
			x1: Math.floor((Math.random() * 17 + 1)) * box,
			y1: Math.floor((Math.random() * 15 + 3)) * box,
			x2: Math.floor((Math.random() * 17 + 1)) * box,
			y2: Math.floor((Math.random() * 15 + 3)) * box,
			x3: Math.floor((Math.random() * 17 + 1)) * box,
			y3: Math.floor((Math.random() * 15 + 3)) * box,
			x4: Math.floor((Math.random() * 17 + 1)) * box,
			y4: Math.floor((Math.random() * 15 + 3)) * box,
			x5: Math.floor((Math.random() * 17 + 1)) * box,
			y5: Math.floor((Math.random() * 15 + 3)) * box,
			x6: Math.floor((Math.random() * 17 + 1)) * box,
			y6: Math.floor((Math.random() * 15 + 3)) * box,
			x7: Math.floor((Math.random() * 17 + 1)) * box,
			y7: Math.floor((Math.random() * 15 + 3)) * box,
		}
	}
	else if (snakeX == bombs.x1 && snakeY == bombs.y1) {
		hp = hp - 10;
		bombs = {
			x1: Math.floor((Math.random() * 17 + 1)) * box,
			y1: Math.floor((Math.random() * 15 + 3)) * box,
			x2: Math.floor((Math.random() * 17 + 1)) * box,
			y2: Math.floor((Math.random() * 15 + 3)) * box,
			x3: Math.floor((Math.random() * 17 + 1)) * box,
			y3: Math.floor((Math.random() * 15 + 3)) * box,
			x4: Math.floor((Math.random() * 17 + 1)) * box,
			y4: Math.floor((Math.random() * 15 + 3)) * box,
			x5: Math.floor((Math.random() * 17 + 1)) * box,
			y5: Math.floor((Math.random() * 15 + 3)) * box,
			x6: Math.floor((Math.random() * 17 + 1)) * box,
			y6: Math.floor((Math.random() * 15 + 3)) * box,
			x7: Math.floor((Math.random() * 17 + 1)) * box,
			y7: Math.floor((Math.random() * 15 + 3)) * box,
		}
	}
	else if (snakeX == bombs.x2 && snakeY == bombs.y2) {
		hp = hp - 10;
		bombs = {
			x1: Math.floor((Math.random() * 17 + 1)) * box,
			y1: Math.floor((Math.random() * 15 + 3)) * box,
			x2: Math.floor((Math.random() * 17 + 1)) * box,
			y2: Math.floor((Math.random() * 15 + 3)) * box,
			x3: Math.floor((Math.random() * 17 + 1)) * box,
			y3: Math.floor((Math.random() * 15 + 3)) * box,
			x4: Math.floor((Math.random() * 17 + 1)) * box,
			y4: Math.floor((Math.random() * 15 + 3)) * box,
			x5: Math.floor((Math.random() * 17 + 1)) * box,
			y5: Math.floor((Math.random() * 15 + 3)) * box,
			x6: Math.floor((Math.random() * 17 + 1)) * box,
			y6: Math.floor((Math.random() * 15 + 3)) * box,
			x7: Math.floor((Math.random() * 17 + 1)) * box,
			y7: Math.floor((Math.random() * 15 + 3)) * box,
		}
	}
	else if (snakeX == bombs.x3 && snakeY == bombs.y3) {
		hp = hp - 10;
		bombs = {
			x1: Math.floor((Math.random() * 17 + 1)) * box,
			y1: Math.floor((Math.random() * 15 + 3)) * box,
			x2: Math.floor((Math.random() * 17 + 1)) * box,
			y2: Math.floor((Math.random() * 15 + 3)) * box,
			x3: Math.floor((Math.random() * 17 + 1)) * box,
			y3: Math.floor((Math.random() * 15 + 3)) * box,
			x4: Math.floor((Math.random() * 17 + 1)) * box,
			y4: Math.floor((Math.random() * 15 + 3)) * box,
			x5: Math.floor((Math.random() * 17 + 1)) * box,
			y5: Math.floor((Math.random() * 15 + 3)) * box,
			x6: Math.floor((Math.random() * 17 + 1)) * box,
			y6: Math.floor((Math.random() * 15 + 3)) * box,
			x7: Math.floor((Math.random() * 17 + 1)) * box,
			y7: Math.floor((Math.random() * 15 + 3)) * box,
		}
	}
	else if (snakeX == bombs.x4 && snakeY == bombs.y4) {
		hp = hp - 10;
		bombs = {
			x1: Math.floor((Math.random() * 17 + 1)) * box,
			y1: Math.floor((Math.random() * 15 + 3)) * box,
			x2: Math.floor((Math.random() * 17 + 1)) * box,
			y2: Math.floor((Math.random() * 15 + 3)) * box,
			x3: Math.floor((Math.random() * 17 + 1)) * box,
			y3: Math.floor((Math.random() * 15 + 3)) * box,
			x4: Math.floor((Math.random() * 17 + 1)) * box,
			y4: Math.floor((Math.random() * 15 + 3)) * box,
			x5: Math.floor((Math.random() * 17 + 1)) * box,
			y5: Math.floor((Math.random() * 15 + 3)) * box,
			x6: Math.floor((Math.random() * 17 + 1)) * box,
			y6: Math.floor((Math.random() * 15 + 3)) * box,
			x7: Math.floor((Math.random() * 17 + 1)) * box,
			y7: Math.floor((Math.random() * 15 + 3)) * box,
		}
	}
	else if (snakeX == bombs.x5 && snakeY == bombs.y5) {
		hp = hp - 10;
		bombs = {
			x1: Math.floor((Math.random() * 17 + 1)) * box,
			y1: Math.floor((Math.random() * 15 + 3)) * box,
			x2: Math.floor((Math.random() * 17 + 1)) * box,
			y2: Math.floor((Math.random() * 15 + 3)) * box,
			x3: Math.floor((Math.random() * 17 + 1)) * box,
			y3: Math.floor((Math.random() * 15 + 3)) * box,
			x4: Math.floor((Math.random() * 17 + 1)) * box,
			y4: Math.floor((Math.random() * 15 + 3)) * box,
			x5: Math.floor((Math.random() * 17 + 1)) * box,
			y5: Math.floor((Math.random() * 15 + 3)) * box,
			x6: Math.floor((Math.random() * 17 + 1)) * box,
			y6: Math.floor((Math.random() * 15 + 3)) * box,
			x7: Math.floor((Math.random() * 17 + 1)) * box,
			y7: Math.floor((Math.random() * 15 + 3)) * box,
		}
	}
	else if (snakeX == bombs.x6 && snakeY == bombs.y6) {
		hp = hp - 10;
		bombs = {
			x1: Math.floor((Math.random() * 17 + 1)) * box,
			y1: Math.floor((Math.random() * 15 + 3)) * box,
			x2: Math.floor((Math.random() * 17 + 1)) * box,
			y2: Math.floor((Math.random() * 15 + 3)) * box,
			x3: Math.floor((Math.random() * 17 + 1)) * box,
			y3: Math.floor((Math.random() * 15 + 3)) * box,
			x4: Math.floor((Math.random() * 17 + 1)) * box,
			y4: Math.floor((Math.random() * 15 + 3)) * box,
			x5: Math.floor((Math.random() * 17 + 1)) * box,
			y5: Math.floor((Math.random() * 15 + 3)) * box,
			x6: Math.floor((Math.random() * 17 + 1)) * box,
			y6: Math.floor((Math.random() * 15 + 3)) * box,
			x7: Math.floor((Math.random() * 17 + 1)) * box,
			y7: Math.floor((Math.random() * 15 + 3)) * box,
		}
	}

	if (hp == 50) {
		bombs = {
			x1: Math.floor((Math.random() * 17 + 1)) * box,
			y1: Math.floor((Math.random() * 15 + 3)) * box,
			x2: Math.floor((Math.random() * 17 + 1)) * box,
			y2: Math.floor((Math.random() * 15 + 3)) * box,
			x3: Math.floor((Math.random() * 17 + 1)) * box,
			y3: Math.floor((Math.random() * 15 + 3)) * box,
			x4: Math.floor((Math.random() * 17 + 1)) * box,
			y4: Math.floor((Math.random() * 15 + 3)) * box,
		}
	} 

	else if (hp == 30) {
		bombs = {
			x1: Math.floor((Math.random() * 17 + 1)) * box,
			y1: Math.floor((Math.random() * 15 + 3)) * box,
			x2: Math.floor((Math.random() * 17 + 1)) * box,
			y2: Math.floor((Math.random() * 15 + 3)) * box,
			x3: Math.floor((Math.random() * 17 + 1)) * box,
			y3: Math.floor((Math.random() * 15 + 3)) * box,
		}
	}

	else if (hp == 0) {
		clearInterval(game);
	}
	// Game over
	if (snakeX < box || snakeX > box * 17 ||
	 snakeY < 3 * box || snakeY > box * 17) {
	 	//alert("Game Over!");
		clearInterval(game);
	}

	// Move snake on key pressed
	if (dir == 'left') snakeX -= box;
	if (dir == 'right') snakeX += box;
	if (dir == 'up') snakeY -= box;
	if (dir == 'down') snakeY += box;

	//Object new head snake
	let newHead = {
		x: snakeX,
		y: snakeY
	};

	eatTail(newHead, snake);

	// Create
	snake.unshift(newHead);
}

// Set interval
let game = setInterval(drawGame, 100);
