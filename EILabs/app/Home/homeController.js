'use strict';
app.controller('homeController', ['$scope', '$rootScope', function ($scope, $rootScope) {

    $(document).ready(function () {
        $(this).scrollTop(0);
    });

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

    $scope.handlePreloader = function() {
        if($('.preloader').length){
            $('.preloader').delay(200).fadeOut(500);
        }
    }

    $scope.startSlider();
    $scope.handlePreloader();


}]);