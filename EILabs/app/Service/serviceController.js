'use strict';
app.controller('serviceController', ['$scope', '$rootScope', '$location', 'blogService', function ($scope, $rootScope, $location, blogService) {

    $(document).ready(function () {
        $(this).scrollTop(0);
    });

    $scope.getBlogs = function (label) {

        var filter = "?key=AIzaSyDE6cWwEqFMZfFSal9szOHJUo1zKKWP7VI";

        try {

            /*Passing api key in filter to use same service call for both list and detail page*/

            blogService.getBlogs(filter).then(function (results) {

                // $scope.blogList = results.data.items;
                $scope.dummy = [];
                $.each(results.data.items, function (idy, itemx) {

                    $.each(itemx.labels, function (idy, itemy) {
                        if (itemy.match(new RegExp(label))) {
                            $scope.dummy.push(itemx);
                        }
                    });

                });


                $scope.blogList = $.map($scope.dummy, function (itemx) {
                    //$scope.images = [];
                    //$(itemx.content).filter('img').each(function () {
                    //    images.push(img.src)
                    //});
                    //itemx.images = $scope.images;
                    //return itemx;
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

    if ($location.path() == "/corporate_personal") {
        $scope.getBlogs("Corporate and Personal Profiling");
    }
    else if ($location.path() == "/pr_promotions") {
        $scope.getBlogs("PR and Promotions");
    }
    else if ($location.path() == "/image_brand") {
        $scope.getBlogs("Image and Brand Consultancy");
    }
    else if ($location.path() == "/expression_expert") {
        $scope.getBlogs("Expression Expert");
    }

}]);