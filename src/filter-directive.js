
angular.module('pchiwan.directives')
	.directive('filter', function () {

		return {
			template: 
				'<div class="adp-filter col-md-3 col-xs-4">' +
					'<div class="row adp-filter-header">' +
						'<h4>{{group.title}}<h4>' +
					'</div>' +
					'<div class="row adp-filter-content">' +
						'<div class="adp-filter-item" ng-repeat="filterItem in group.source">' +
							'<input type="checkbox" ng-model="filterItem.selected">' +
							'&nbsp;<span>{{filterItem.value}}&nbsp;({{filterItem.count}})</span>' +
						'</div>' +
					'</div>' +
				'</div>',
			restrict: 'E',
			replace: true
		};
	});