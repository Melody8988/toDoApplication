myApp.controller('MaterialController', function($mdDialog, $mdToast) {
    console.log('MaterialController');

    const vm = this;

    vm.showAlert = function(event) {
        console.log('Clicked!')
        $mdDialog.show(
            $mdDialog.alert()
            .parent(angular.element(document.querySelector('#popupContainer')))
            .title('Hi!!!')
            .textContent('You can say other things')
            .ariaLabel('Alert Dialog Demo')
            .ok('Got it!')
            .targetEvent(event)
        )
    }

    vm.showToast = function(event) {
        $mdToast.show(
            $mdToast.simple()
            .textContent('Hello!!!')
        );
    }
});