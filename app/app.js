var fairnessDiagnosticsApp = angular.module('fairnessDiagnosticsApp', ['ngRoute']);

fairnessDiagnosticsApp.controller('TabsController', function TabsController($scope, $http) {
    $scope.tabs = [{
            link: '#!/group',
            label: 'Group Fairness'
        },
        {
            link: '#!/cond-group',
            label: 'Conditional Group Fairness'
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
        $scope.dataSource = DataSource(data.data);
        $scope.dataFiles = $scope.dataSource.get_data_files();
        $scope.selectedDataFile = $scope.dataFiles[0];
        $scope.updateFile();
    });

    $scope.updateFile = function() {
        $scope.scoreAttributes = $scope.dataSource.get_score_attributes($scope.selectedDataFile);
        $scope.selectedScoreAttribute = $scope.scoreAttributes[0];

        $scope.groupAttributes = $scope.dataSource.get_group_attributes($scope.selectedDataFile);
        $scope.selectedGroupAttribute = $scope.groupAttributes[0];

        $scope.outcomeAttributes = $scope.dataSource.get_outcome_attributes($scope.selectedDataFile);
        $scope.selectedOutcomeAttribute = $scope.outcomeAttributes[0];

        $scope.predictors = $scope.dataSource.get_predictors($scope.selectedDataFile);
    }

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
    when('/cond-group', {
        templateUrl: 'conditional_group_view/view.html',
        controller: 'CondGroupViewController'

    }).
    otherwise({
        redirectTo: '/group'
    });

}]);
