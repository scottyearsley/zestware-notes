
var notesApp = angular.module('notesApp', []);

notesApp.controller('notesPanelController', ['$scope', 'noteService', function($scope, noteService) {

    $scope.notePanels = [];

    $scope.panelClick = function(event) {

        $scope.notePanels.push({
            content: 'Content here...',
            width: '400px',
            height: '300px',
            style: {
                width: '400px',
                height: '250px',
                left: event.clientX,
                top: event.clientY
            }
        })

    };

}]);
