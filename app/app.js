var fairnessDiagnosticsApp = angular.module('fairnessDiagnosticsApp', ['ngRoute']);

fairnessDiagnosticsApp.controller('TabsController', function TabsController($scope, $http) {
    $scope.tabs = [{
            link: '#!/group',
            label: 'Group Fairness'
        },
        {
            link: '#!/individual',
            label: 'Individual Fairness'
        }
    ];

    $scope.selectedTab = $scope.tabs[0];
    $scope.setSelectedTab = function(tab) {
        $scope.selectedTab = tab;
    }

    $scope.tabClass = function(tab) {
        if ($scope.selectedTab == tab) {
            return "active";
        } else {
            return "";
        }
    }

    $http.get('data_config.json').then(function (data) {
        $scope.data_files = data_parser.get_data_files(data);
    });

});

fairnessDiagnosticsApp.config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {

    $locationProvider.hashPrefix('!');

    $routeProvider.when('/group', {
        templateUrl: 'group_view/view.html',
        controller: 'GroupViewController'
    }).
    when('/individual', {
        templateUrl: 'individual_view/view.html',
        controller: 'IndividualViewController'
    }).
    otherwise({
        redirectTo: '/group'
    });

}]);
