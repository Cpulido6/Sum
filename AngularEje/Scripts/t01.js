var app = angular.module("app", []);

app.controller('emp', ['$scope', '$http', function ($scope, $http) {
    $scope.a = 10;
    $scope.b = 20;

    $scope.doSum = function () {
        //$scope.sum = parseInt($scope.a) - parseInt($scope.b);
        $http({
            url: 'http://localhost:63246/Sum?a=' + $scope.a + '&b=' + $scope.b,
            method: 'GET'
        }).then(function (resp) {
            //exitoso
            debugger;
            $scope.sum = resp.data;
            }, function (resp) {
                //error
                alert("ERROR");

            });

    };


}])