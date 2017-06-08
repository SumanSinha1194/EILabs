'use strict';
app.controller('contactController', ['$scope', '$rootScope', 'notificationService', 'errorService', function ($scope, $rootScope, notificationService, errorService) {

    $(document).ready(function () {
        $(this).scrollTop(0);
    });

    $scope.contact = {};
    $scope.message = "";
    $scope.success = false;
    $scope.error = false;

    $scope.sendEmail = function () {
        if ($scope.contact.Name && $scope.contact.Email && $scope.contact.Phone && $scope.contact.Nationality && $scope.contact.Message) {

            var adminEmailData = {
                FromName: $scope.contact.Name,
                FromEmail: $scope.contact.Email,
                Subject: "EILabs Query",
                Template: "8081e598-b7ad-4a0a-8ca9-f6cf7375ba0f",
                CCEmail: "bsentinal@eilabs.org ",
                BCCEmail: "bsentinal@eilabs.org ",
                body: "<p style='font-size:16px;font-family:Arial,Helvetica,sans-serif;text-align:center;'>Hi,<br/><br/> New query has been registered with details as below <br /><br/> Name: " + $scope.contact.Name + "<br/> Email ID: " + $scope.contact.Email + "<br/> Phone: " + $scope.contact.Phone + "<br/> Nationality: " + $scope.contact.Nationality + "<br /> Message: " + $scope.contact.Message + "</p>",
                ToEmail: "bsentinal@eilabs.org "
            }
            notificationService.createNotifications(adminEmailData).then(function (result) {

                var customerEmailData = {
                    FromName: "www.eilabs.org",
                    FromEmail: "bsentinal@eilabs.org ",
                    Subject: "EILabs Query",
                    Template: "8081e598-b7ad-4a0a-8ca9-f6cf7375ba0f",
                    CCEmail: $scope.contact.Email,
                    BCCEmail: $scope.contact.Email,
                    body: "<p style='font-size:16px;font-family:Arial,Helvetica,sans-serif;text-align:center;'> Hi " + $scope.contact.Name + ",  Congratulations!<br/><br/> Your query has been successfully submitted to us, we will get back to you soon<br /></p>",
                    ToEmail: $scope.contact.Email
                }

                notificationService.createNotifications(customerEmailData).then(function (res) {

                    $scope.error = false;
                    $scope.success = true;
                    $scope.message = "Your query has been successfully sent to Administrator";
                    $scope.contact = "";

                }, function (error) {
                    error.customMessage = "Error Inside : Controller-contactController || Method-notificationService";
                    errorService.logError(error).then(function (results) {
                        $log.info('Error successfully captured.');
                    }, function (error) {
                        $log.error(error);
                    });
                });

                $scope.contact = "";
            }, function (err) {
                err.customMessage = "Error Inside : Controller-contactController || Method-notificationService";
                errorService.logError(err).then(function (resul) {
                    $log.info('Error successfully captured.');
                }, function (error) {
                    $log.error(error);
                });
            });
        }
        else {
            $scope.message = "Please fill all the required fields";
            $scope.error = true;
        }

    }

}]);