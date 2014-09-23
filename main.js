window.addEventListener("load",function() {
	var board = new Geometry.Rectangle(0, 0, 50000, 50000);
	var viewport = new Geometry.Rectangle(0, 0, 1024, 768);
	var MAX_SIDE_SIZE = 105;
	var rectangles = [];
	var rTree = new RTree(9);
	var tmpRect;
	for (var i = 0; i < 1000000; i++) {
		var x = Math.random() * board.width;
		var y = Math.random() * board.height;
		var width = Math.random() * MAX_SIDE_SIZE;
		var height = Math.random() * MAX_SIDE_SIZE;

		tmpRect = new Geometry.Rectangle(x, y, width, height);
		rectangles.push(tmpRect);
		
		rTree.insert({ x: x, y: y, w: width, h: height }, tmpRect);
	}
	var getIntersectedRectagles = function (rectanglesArray, rect) {
		var i = 0;
		var len = rectanglesArray.length;
		var result = [];
		for (var i = 0; i < len; i++) {
			if (rectanglesArray[i].intersects(rect)) {
				result.push(rectanglesArray[i]);
			}
			;
		}
		return result;
	};


	var t0 = new Date().getTime();
	console.log(getIntersectedRectagles(rectangles, viewport));
	console.log('time: ', new Date().getTime() - t0, 'ms');
	var t1 = new Date().getTime();
	console.log(rTree.search({ x: viewport.x, y: viewport.y, w: viewport.width, h: viewport.height }));
	console.log('time: ', new Date().getTime() - t1, 'ms');
})