'use strict';
app.factory('notificationService', ['$http', function ($http) {
    /*Factory Variable to Expose limited Methods from the Service.*/
    var notificationServiceFactory = {};

    /*Private Method for POST Email*/
    var _createNotifications = function (model) {
        return $http.post('http://notificationapi.azurewebsites.net/' + 'api/Notification', model).then(function (results) {
            return results;
        });
    };

    /*Private Method for POST address*/
    var _createNotificationSMS = function (model) {
        return $http.post('http://notificationapi.azurewebsites.net' + 'api/Notification/SMS', model).then(function (results) {
            return results;
        });
    };

    notificationServiceFactory.createNotificationSMS = _createNotificationSMS;
    notificationServiceFactory.createNotifications = _createNotifications;

    return notificationServiceFactory;
}]);