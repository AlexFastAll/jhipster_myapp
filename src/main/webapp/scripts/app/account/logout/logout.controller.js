'use strict';

angular.module('myappApp')
    .controller('LogoutController', function (Auth) {
        Auth.logout();
    });
