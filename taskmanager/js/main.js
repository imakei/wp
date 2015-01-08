angular.module('App', [])
.controller('MainController', ['$scope', '$filter', '$apiService', '$q',function ($scope, $filter, $apiService, $q) {
  $scope.lists = [];
  $scope.newListName = '';
  $scope.modalTaskNew = {
    list: '',
    name: '',
    detail: ''
  };
  $scope.modalTaskEdit = '';
  $scope.modalFlag = '';
  $scope.modalFormNew = '';
  $scope.modalFormEdit = '';


  var where = $filter('filter');



  $scope.addList = function(){

    $apiService.postList({
      name: $scope.newListName
    }).then(function(data) {
      $scope.getAll();
    });

    $scope.newListName = '';
  };

  $scope.deleteList = function(currentList){
    console.log(currentList);
    $apiService.deleteList({
      id: currentList.id
    }).then(function(data) {
      $scope.getAll();
    });
  };

  $scope.showModalNew = function(currentList){
    $scope.modalFlag = 'is_open';
    $scope.modalFormNew = 'is_open';
    $scope.modalFormEdit = '';
    $scope.modalTaskNew = {
      list: currentList,
      name: '',
      detail: ''
    };
    console.log(currentList);
  };

  $scope.showModalEdit = function(currentTask){
    $scope.modalFlag = 'is_open';
    $scope.modalFormNew = '';
    $scope.modalFormEdit = 'is_open';
    $scope.modalTaskEdit = currentTask;
  };

  $scope.addTask = function(){
    $apiService.postTask({
      list_id: $scope.modalTaskNew.list.id,
      name: $scope.modalTaskNew.name,
      detail: $scope.modalTaskNew.detail
    }).then(function(data) {
      $scope.getAll();
    });

    $scope.modalFlag = '';
    $scope.modalFormNew = '';
  };

  $scope.editTask = function(){
    $apiService.updateTask({
      id: $scope.modalTaskEdit.id,
      list_id: $scope.modalTaskEdit.list_id,
      name: $scope.modalTaskEdit.name,
      detail: $scope.modalTaskEdit.detail
    }).then(function(data) {
      $scope.getAll();
    });

    $scope.modalFlag = '';
    $scope.modalFormEdit = '';

  };

  $scope.deleteTask = function(currentTask){
    $apiService.deleteTask({
      id: currentTask.id
    }).then(function(data) {
      $scope.getAll();
    });
  };

$scope.getAll = function(){
  $apiService
  .getAll()
  .then(function(data) {
    $scope.lists = data.list
  })
  ;
};

  $scope.getAll();

}]);
