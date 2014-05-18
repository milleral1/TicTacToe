function firstCtrl($scope) {
	$scope.board = [
		[0,0,0],
		[0,0,0],
		[0,0,0]
	];
	$scope.count = 0;
	$scope.turn = function(cell, row, column) {
		// console.log('row: ' + row + ' column: ' + column);
		// console.log('cell: ' + cell);
		
		console.log(row + " " + column);
		console.log($scope.board[row][column]);
		if(cell != 0){}
		else {
			if($scope.count % 2 == 0)
			{
				$scope.board[row][column] = 1;
				console.log(row + " " + column);
			}
			else
			{
				$scope.board[row][column] = 2;
			}
			$scope.count++;
			if ($scope.check()) {
				$scope.board = [
				[0,0,0],
				[0,0,0],
				[0,0,0]
				];
			};
		};
	};
	$scope.check = function() {
		if($scope.board[0][0] == $scope.board[0][1] && $scope.board[0][0] == $scope.board[0][2] && $scope.board[0][0] != 0)
		{
			return true;

		}
		if($scope.board[1][0] == $scope.board[1][1] && $scope.board[1][0] == $scope.board[1][2] && $scope.board[1][0] != 0)
		{
			return true;

		}
		if($scope.board[2][0] == $scope.board[2][1] && $scope.board[2][0] == $scope.board[2][2] && $scope.board[2][0] != 0)
		{
			return true;

		}
		if($scope.board[0][0] == $scope.board[1][0] && $scope.board[0][0] == $scope.board[2][0] && $scope.board[0][0] != 0)
		{
			return true;

		}
		if($scope.board[0][1] == $scope.board[1][1] && $scope.board[0][1] == $scope.board[2][1] && $scope.board[0][1] != 0)
		{
			return true;

		}
		if($scope.board[0][2] == $scope.board[1][2] && $scope.board[0][2] == $scope.board[2][2] && $scope.board[0][2] != 0)
		{
			return true;

		}
		if($scope.board[0][0] == $scope.board[1][1] && $scope.board[0][0] == $scope.board[2][2] && $scope.board[0][0] != 0)
		{
			return true;

		}
		return false;
	};











};