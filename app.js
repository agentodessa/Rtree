var Geometry;
(function (Geometry) {
	var Rectangle = (function () {
		function Rectangle(x, y, width, height) {
			this.x = x;
			this.y = y;
			this.width = width;
			this.height = height;
		}
		Rectangle.prototype.intersects = function (rect) {
			if (this.x + this.width <=rect.x || this.y + this.height <= rect.y ||
					rect.x + rect.width <= this.x && rect.y + rect.height <= this.y) {
				return true;
			} else {
				return false;
			}
		};
		return Rectangle;
	})();
	Geometry.Rectangle = Rectangle;
})(Geometry || (Geometry = {}));




















//var board = new Geometry.Rectangle(0, 0, 1500, 1500);
//var viewport = new Geometry.Rectangle(0, 0, 1024, 1024);
//var MAX_SIDE_SIZE = 105;
//var rectangles = [];

//for (var i = 0; i < 1000000; i++) {
//	var x = Math.random() * board.width;
//	var y = Math.random() * board.height;
//	var width = Math.random() * MAX_SIDE_SIZE;
//	var height = Math.random() * MAX_SIDE_SIZE;
//	rectangles.push(new Geometry.Rectangle(x, y, width, height));
//}
//var getIntersectedRectagles = function (rectanglesArray, rect) {
//	var i = 0;
//	var len = rectanglesArray.length;
//	var result = [];
//	for (var i = 0; i < len; i++) {
//		if (rectanglesArray[i].intersects(rect)) {
//			result.push(rectanglesArray[i]);
//		}
//		;
//	}
//	return result;
//};
//var t0 = new Date().getTime();
//console.log(getIntersectedRectagles(rectangles, viewport));
//console.log('time: ', new Date().getTime() - t0, 'ms');
