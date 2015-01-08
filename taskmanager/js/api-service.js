angular
.module('App')
.factory('$apiService', function($q, $http, $rootScope) {

  var config = null;

  var host = "http://edu.mast.tsukuba.ac.jp:8080/~s1011385/wp/db/"

  // sends GET request
  var getAll = function(params) {
    return $http.get(host+'getall.rb').then(function(response) {
      return response.data;
    });
  };

  var postList = function(params) {
    return $http.get(host+'postlist.rb', {params: params}).then(function(response) {
      return response.data;
    });
  };
  var updateList = function(params) {
    return $http.get(host+'updatelist.rb', {params: params}).then(function(response) {
      return response.data;
    });
  };
  var deleteList = function(params) {
    return $http.get(host+'deletelist.rb', {params: params}).then(function(response) {
      return response.data;
    });
  };

  var postTask = function(params) {
    return $http.get(host+'posttask.rb', {params: params}).then(function(response) {
      return response.data;
    });
  };

  var updateTask = function(params) {
    return $http.get(host+'updatetask.rb', {params: params}).then(function(response) {
      return response.data;
    });
  };

  var deleteTask = function(params) {
    return $http.get(host+'deletetask.rb', {params: params}).then(function(response) {
      return response.data;
    });
  };


  return {

    getAll: getAll,

    postList: postList,
    updateList: updateList,
    deleteList: deleteList,

    postTask: postTask,
    updateTask: updateTask,
    deleteTask: deleteTask

  };
});

