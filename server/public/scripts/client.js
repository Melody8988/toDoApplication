let myApp = angular.module('toDoApp', []);

myApp.controller('toDoController', ['$http', function($http){
    console.log('toDoController is loaded!');
    let self = this;
    self.toDoArray = [];

//POST new task to SERVER

self.addToDo = function(newToDo){
    console.log('Inside addToDo:', newToDo)
    $http({
        method: 'POST',
        url: '/tasks',
        data: newToDo
    }).then(function(response){
        console.log('POST response: ', response);
        self.getToDo();
    }).catch(function(error){
        console.log('Error in POST', error)
    });
}

//GET new task from SERVER

    self.getToDo = function(){
        $http({
            method: 'GET',
            url: '/tasks'
        }).then(function(response){
            console.log('GET response:', response);
            self.toDoArray = response.data;
        }).catch(function(error){
            console.log('error in GET:', error);
        })
    }
    self.getToDo();

    //DELETE task 

    self.deleteToDo = function(taskId){
        $http({
            method: 'DELETE', 
            url: '/tasks/' + taskId
        }).then(function(response){
            console.log('can delete task!!');
            self.getToDo();
        }).catch(function(error){
            console.log('cannot delete', error);
        })
    }

}]);//end controller function