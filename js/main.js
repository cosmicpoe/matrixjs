$(document).ready(function() {

	var $determinantBtn = $('#determinant-btn');

	function determinant(m) {
		result = m[0][0] * m[1][1] * m[2][2] +
				 (m[0][1] * m[1][2] * m[2][0]) +
				 (m[0][2] * m[1][0] * m[2][1]) -
				 (m[0][2] * m[1][1] * m[2][0]) -
				 (m[0][1] * m[1][0] * m[2][2]) -
				 (m[0][0] * m[1][2] * m[2][1]);

		return result

	}

	function stringToMatrix(theString) {
		var matrix = [],
			matrix1d = theString.split(',');

		for (var i = 0; i < matrix1d.length; i++){
			var innerMatrix = [];
			matrix2d = matrix1d[i].split(' ');
			for (var j = 0; j < matrix2d.length; j++) {
				innerMatrix.push(parseInt(matrix2d[j]));
				matrix[i] = innerMatrix;
			};
		}
		return matrix;
	}

	$determinantBtn.click(function() {
		var $matrixInput = $('#matrix-input').val();
		var matrix = stringToMatrix($matrixInput);
		$('#determinant').text(determinant(matrix));

	});

});