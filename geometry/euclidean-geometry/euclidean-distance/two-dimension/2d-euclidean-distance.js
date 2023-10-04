/**
 *  In Eucledian distance the distance between two points is the square root 
    of the sum of the squares of the differences of their coordinates 
 * 
 * @param {number} x1 point 1 x coordinate
 * @param {number} y1 point 1 y coordinate
 * @param {number} x2 point 2 x coordinate
 * @param {number} y2 point 2 y coordinate
 * @returns {number} distance

 */
function eucledianDistance(x1, y1, x2, y2) {
	return Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));
}

let result = eucledianDistance(3, 4, 4, 3);
console.log(result); // 1.4142135623730951
