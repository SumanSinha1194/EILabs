'use strict';
app.controller('blogController', ['$scope', '$rootScope', '$location', 'blogService', 'errorService', function ($scope, $rootScope, $location, blogService, errorService) {

    $(document).ready(function () {
        $(this).scrollTop(0);
    });
    $scope.blogList = [];
    $scope.blogDetail = {};


    //this method will be called from the data-ng-init of the html declartion.
    $scope.blogSearch = function () {

        /*Passing api key and blogid in filter to use same service call for both list and detail page*/
        if ($location.search().blogid) {

            var filter = "/" + $location.search().blogid + "?key=AIzaSyDE6cWwEqFMZfFSal9szOHJUo1zKKWP7VI";

        }
        else {

            var filter = "?key=AIzaSyDE6cWwEqFMZfFSal9szOHJUo1zKKWP7VI";

        }


        try {
            /*service call to get blogs*/

            blogService.getBlogs(filter).then(function (results) {

                // for detail screen passing data into blogDetail object
                if ($location.search().blogid) {
                    // formatting data for html page
                    var div = document.createElement('div');
                    div.innerHTML = results.data.content;
                    delete div.style;
                    var firstImage = div.getElementsByTagName('img')[0];
                    var rawImgSrc = firstImage ? firstImage.getAttribute("src") : "";
                    results.data.imgUrl = rawImgSrc;
                    var str;
                    str = div.innerText.toString();
                    // str = str.replace(/[\n\r]/g, '');
                    // str = str.replace(/\s+/g, ' ').trim();
                    results.data.plainText = str;
                    // formatted data
                    $scope.blogDetail = results.data;
                }
                    // for list passing data into blogList array
                else {
                    // formatting data for html page

                    $scope.blogList = $.map(results.data.items, function (itemx) {

                        var div = document.createElement('div');
                        div.innerHTML = itemx.content;
                        delete div.style;
                        var firstImage = div.getElementsByTagName('img')[0]
                        //var imgSrc = firstImage ? firstImage.src : "";
                        // or, if you want the unresolved src, as it appears in the original HTML:
                        var rawImgSrc = firstImage ? firstImage.getAttribute("src") : "";
                        itemx.imgUrl = rawImgSrc;
                        var str;
                        str = div.innerText.toString();
                        str = str.replace(/[\n\r]/g, '');
                        str = str.replace(/\s+/g, ' ').trim();
                        itemx.plainText = str;
                        return itemx;
                    });

                }

            }, function (error) {
                alert(error);
            });
        }
        catch (error) {

            errorService.logError(error).then(function (results) {
                $log.info($rootScope.ErrorMessages[1002]);
            }, function (error) {
                $log.error(error);
            });
        }
    }


}]);

app.filter('rawHtml', ['$sce', function ($sce) {
    return function (val) {
        return $sce.trustAsHtml(val);
    };
}]);

app.filter('characters', function () {
    return function (input, chars, breakOnWord) {
        if (isNaN(chars)) return input;
        if (chars <= 0) return '';
        if (input && input.length > chars) {
            input = input.substring(0, chars);

            if (!breakOnWord) {
                var lastspace = input.lastIndexOf(' ');
                //get last space
                if (lastspace !== -1) {
                    input = input.substr(0, lastspace);
                }
            } else {
                while (input.charAt(input.length - 1) === ' ') {
                    input = input.substr(0, input.length - 1);
                }
            }
            return input + '…';
        }
        return input;
    };
})