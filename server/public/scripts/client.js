let myApp = angular.module('toDoApp', []);

myApp.controller('toDoController', ['$http', function($http){
    console.log('toDoController is loaded!');
    let self = this;
    self.toDoArray = [];

    //UPDATE 

self.changeStatus = function(taskId, updatedStatus){
    updatedStatus = !updatedStatus;
    console.log('new status will be', updatedStatus);
    console.log(status);
    $http({
        method: 'PUT', 
        url: '/tasks/' + taskId,
        data: {status: updatedStatus}
    }).then(function(response){
        console.log('completion status changed!');
        self.getToDo();
    }).catch(function(error){
        console.log('could not update *sad face', error);
    })
}

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