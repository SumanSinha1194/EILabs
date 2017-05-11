'use strict';
app.factory('errorService', ['$http', 'EILabsWEB_ENDPOINT_URI', function ($http, EILabsWEB_ENDPOINT_URI) {

    var errorServiceFactory = {};

    /*Private Method for POST Files*/
    var _logError = function (model) {
        //return $http.post(EILabsWEB_ENDPOINT_URI + 'api/File/Upload', model, { headers: { "Content-Type": undefined } }).then(function (results) {
        //    return results;
        //});
    };

    errorServiceFactory.logError = _logError;

    return errorServiceFactory;
}]);