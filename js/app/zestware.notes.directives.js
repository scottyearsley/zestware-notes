var notesApp = angular.module('notesApp');

notesApp.directive('zestPreventBubble', function(){
	return {
		restrict: 'A',
		link: function(scope, element, attrs, ctrl) {
			element.on('click', function (e) {
            	e.stopPropagation();
        	});
		}
	};
});


notesApp.directive('zestNotePanel', function() {
	return {
		restrict: 'E',
		link: function(scope, element, attrs) {

		},
		templateUrl: 'partials/note-panel.html'
	}
});