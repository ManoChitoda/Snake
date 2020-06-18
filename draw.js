const canvas = document.querySelector(".canvas");
const ctx = canvas.getContext("2d");
const scale = 10;
const rows = canvas.height / scale;
const columns = canvas.width / scale;
var snake;

// setting up the canvas
(function setup () {
	snake = new Snake();
	fruit = new Fruit();

	fruit.pickLocation(); // pick the location of the fruit

	window.setInterval(() =>{
		ctx.clearRect(0, 0, canvas.width, canvas.height);
		fruit.draw();
		snake.update();
		snake.draw();

		// Pick new location for the fruit
		// if the snake ate the fruit
		if (snake.eat(fruit)) {
			fruit.pickLocation();
		}
		snake.checkCollision();
		document.querySelector('.score').innerText = snake.total;
	},250);
}());

window.addEventListener('keydown', ((evt) => {
	const direction = evt.key.replace('Arrow','');
	snake.changeDirection(direction);
}));