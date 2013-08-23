var snake = (function(lib){
	lib.Snake = (function(){

		function getRandomInt (min, max) {
		    return Math.floor(Math.random() * (max - min + 1)) + min;
		}

		function Snake(){
			this.snakeBody = [[0,0,1], [0,1,1], [0,2,1]];
			// this.foodLoc = [getRandomInt(0,9), getRandomInt(0,9)];
			this.foodLoc = [0, 3];
		}

		Snake.prototype.move = function (dir) {
			var body = this.snakeBody;
			var head = body.length - 1;
			if (dir === 1){
				body.push([body[head][0], body[head][1] + 1, 1]);
			} else if (dir === 3){
				body.push([body[head][0], body[head][1] - 1, 3]);
			} else if (dir === 0){
				body.push([body[head][0] - 1, body[head][1], 0]);
			} else if (dir === 2){
				body.push([body[head][0] + 1, body[head][1], 2]);
			}
			var headLoc = [body[head][0], body[head][1]];
			if (headLoc.toString() == this.foodLoc.toString()){
				this.foodLoc = [getRandomInt(0,9), getRandomInt(0,9)];
			} else {
				body.shift(body[0]);
			}
		}

		Snake.prototype.step = function () {
			this.move(this.snakeBody[this.snakeBody.length - 1][2]);
		}

		Snake.prototype.lose = function () {
			var body = this.snakeBody;
			var head = body.length - 1;
			var headLoc = [body[head][0], body[head][1]];
			var headless = body.slice(0, body.length - 2);
			if (this.hitWall()){
				return true;
			}
			for (i = 0; i < headless.length; i++){
				if ([headless[i][0], headless[i][1]].toString() === headLoc.toString()){
					return true;
				}
			};
			return false;
		}

		Snake.prototype.hitWall = function () {
			var body = this.snakeBody;
			var head = body.length - 1;
			if (body[head][0] > 9 || body[head][0] < 0 ||
					body[head][1] > 9 || body[head][1] < 0 ){
						return true;
			}
			return false;
		}
		return Snake;
	});
	return lib;
})(snake || {});