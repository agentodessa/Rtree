var Geometry;
(function(Geometry) {
	var Rectangle = (function() {
		function Rectangle(x, y, width, height) {
			this.x = x;
			this.y = y;
			this.width = width;
			this.height = height;
		}

		Rectangle.prototype.intersects = function(rect) {

			if ((rect.x <= this.x && this.x <= (rect.width + rect.x)) &&
				(rect.y <= this.y && this.y <=(rect.height + rect.y))) {
				return true;
			} else {
				return false;
			}
		};
		return Rectangle;
	})();
	Geometry.Rectangle = Rectangle;
})(Geometry || (Geometry = {}));