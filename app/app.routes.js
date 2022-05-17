angular.module('appModule')
  .config(function ($stateProvider, $urlRouterProvider, $locationProvider) {
    $locationProvider.html5Mode({
      enabled: true,
      requireBase: false,
    });
    $stateProvider
      .state({
        name: 'app',
        url: '/',
        templateUrl: './pages/home-page/home-page.html',
        controller: 'homeController',
        controllerAs: 'homePageVm',
      })
      .state({
        name: 'team-performance',
        url: '/team-performance',
        template: '<v-performance-page></v-performance-page>',
      })
      .state({
        name: 'not-found',
        url: '/not-found',
        template: '<v-not-found></v-not-found>',
      });
    $urlRouterProvider.otherwise('/not-found');
  });
