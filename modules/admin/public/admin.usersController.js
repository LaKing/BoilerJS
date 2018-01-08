(function() {

    app.controller('usersController', ['$scope', '$http', '$rootScope', 'socket', 'alertService', function($scope, $http, $rootScope, socket, alertService) {

        $http.get('/profile.json')
            .then(function(res) {
                $scope.forms = res.data;
            }, function errorCallback(response) {
                console.log("error", response);
                alert("Hálózati hiba! ?");
            });

        socket.emit('get-users', {});

        $scope.users = {};
        $scope.user = {};


        socket.on("users", function(users) {
            $scope.users = users;
        });
        $scope.jsoneditoroptions = {};
        $scope.jsoneditoroptions.mode = 'tree';
        $scope.toggle_jsoneditor = function() {
            if ($scope.jsoneditoroptions.mode === 'tree') $scope.jsoneditoroptions.mode = 'code';
            else $scope.jsoneditoroptions.mode = 'tree';
        };
        $scope.set = function(user) {
            $scope.user = user;
            $scope.list = false;
        };

        $scope.initView = function() {
            console.log("initView");
            $scope.list = true;
            $scope.item = true;
            $scope.editor = false;
            $scope.view = false;
        };
        $scope.initView();

        $scope.save_user_profile = function() {
            console.log('admin-save-user', $scope.user);
            socket.emit('admin-save-user', $scope.user);
        };

        $scope.delete_user = function() {
            console.log('admin-delete-user', $scope.user._id);
            socket.emit('admin-delete-user', $scope.user._id);
        };

    }]);

})();