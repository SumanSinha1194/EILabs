'use strict';
app.controller('homeController', ['$scope', '$rootScope', 'blogService', function ($scope, $rootScope, blogService) {

    $(document).ready(function () {
        $(this).scrollTop(0);
    });

    //this method will be called from the data-ng-init of the html declartion.
    $scope.blogSearch = function () {

        var filter = "?key=AIzaSyDE6cWwEqFMZfFSal9szOHJUo1zKKWP7VI";

        try {

            /*Passing api key in filter to use same service call for both list and detail page*/

            blogService.getBlogs(filter).then(function (results) {

                // $scope.blogList = results.data.items;


                $scope.blogList = $.map(results.data.items, function (itemx) {
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


    $scope.startSlider = function () {

        if ($('.rev_slider_wrapper #slider1').length) {
            jQuery("#slider1").revolution({
                sliderType: "standard",
                sliderLayout: "auto",
                dottedOverlay: "yes",
                delay: 5000,
                navigation: {
                    arrows: {
                        enable: true,
                        left: {
                            h_align: "left",
                            v_align: "center",
                            h_offset: 60,
                            v_offset: 0
                        },
                        right: {
                            h_align: "right",
                            v_align: "center",
                            h_offset: 60,
                            v_offset: 0
                        }

                    }
                },
                gridwidth: [1200, 940, 720, 480],
                gridheight: [550, 550, 550, 500],
                lazyType: "none",
                parallax: {
                    type: "mouse",
                    origo: "slidercenter",
                    speed: 2000,
                    levels: [2, 3, 4, 5, 6, 7, 12, 16, 10, 50],
                },
                shadow: 0,
                spinner: "off",
                stopLoop: "off",
                stopAfterLoops: -1,
                stopAtSlide: -1,
                shuffle: "off",
                autoHeight: "off",
                hideThumbsOnMobile: "off",
                hideSliderAtLimit: 0,
                hideCaptionAtLimit: 0,
                hideAllCaptionAtLilmit: 0,
                debugMode: false,
                fallbacks: {
                    simplifyAll: "off",
                    nextSlideOnWindowFocus: "off",
                    disableFocusListener: false,
                }
            });
        };

    }

    $scope.handlePreloader = function () {
        if ($('.preloader').length) {
            $('.preloader').delay(200).fadeOut(500);
        }
    }

    $scope.startSlider();
    $scope.handlePreloader();


}]);

//app.directive('owlCarousel', [function () {
//    return {
//        restrict: 'EA',
//        transclude: false,
//        scope: {
//            owlOptions: '='
//        },
//        link: function (scope, element, attrs) {
//            scope.initCarousel = function () {
//                $(element).owlCarousel(scope.owlOptions);
//            };
//        }
//    }
//}])
//app.directive('owlCarouselItem', [function () {
//    return function (scope) {
//        if (scope.$last) {
//            scope.initCarousel();
//        }
//    };
//}]);