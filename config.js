/**
 * Created by 涅槃的F on 2017/1/21.
 */
angular.module('fApp').config(function ($stateProvider, $urlRouterProvider) {
    $stateProvider.state('home',{
        templateUrl:'index/home.html'
    });
    $stateProvider.state('article',{
        templateUrl:'index/article.html'
    });
    $stateProvider.state('tech',{
        templateUrl:'index/tech.html'
    });
    $stateProvider.state('music',{
        templateUrl:'index/music.html'
    });
    $stateProvider.state('movie',{
        templateUrl:'index/movie.html'
    });
    $stateProvider.state('mix',{
        templateUrl:'index/mix.html'
    });
});