angular.module('starter', ['ionic','ngCordova'])
.run(function($ionicPlatform,$rootScope) {
  $ionicPlatform.ready(function() {
    if(window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);
      $rootScope.checkPermission = function() {
        setLocationPermission = function() {
          cordova.plugins.diagnostic.requestLocationAuthorization(function(status) {
            switch (status) {
              case cordova.plugins.diagnostic.permissionStatus.NOT_REQUESTED:
              break;
              case cordova.plugins.diagnostic.permissionStatus.DENIED:
              break;
              case cordova.plugins.diagnostic.permissionStatus.GRANTED:
              break;
              case cordova.plugins.diagnostic.permissionStatus.GRANTED_WHEN_IN_USE:
              break;
            }
          }, function(error) {}, cordova.plugins.diagnostic.locationAuthorizationMode.ALWAYS);
        };
        cordova.plugins.diagnostic.getPermissionAuthorizationStatus(function(status) {
          switch (status) {
            case cordova.plugins.diagnostic.runtimePermissionStatus.GRANTED:
            break;
            case cordova.plugins.diagnostic.runtimePermissionStatus.NOT_REQUESTED:
            setLocationPermission();
            break;
            case cordova.plugins.diagnostic.runtimePermissionStatus.DENIED:
            setLocationPermission();
            break;
            case cordova.plugins.diagnostic.runtimePermissionStatus.DENIED_ALWAYS:
            setLocationPermission();
            break;
          }
        }, function(error) {}, cordova.plugins.diagnostic.runtimePermission.ACCESS_COARSE_LOCATION);
      };
      $rootScope.checkPermission();
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
})
.controller('appCtrl', function($scope,$cordovaGeolocation) {
});
