let myApp = angular.module('toDoApp', []);

myApp.controller('toDoController', ['$http', function($http){
    console.log('toDoController is loaded!');
    let self = this;
    self.toDoArray = [];

self.addToDo = function(newToDo){
    console.log('Inside addToDo:', newToDo)
    $http({
        method: 'POST',
        url: '/toDos',
        data: newToDo
    }).then(function(response){
        console.log('POST response: ', response);
        //self.getToDo();
    }).catch(function(error){
        console.log('Error in POST', error)
    })
}


}]);//end controller function