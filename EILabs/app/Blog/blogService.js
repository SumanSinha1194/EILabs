'use strict';
app.factory('blogService', ['$http', function ($http) {
    /*Factory Variable to Expose limited Methods from the Service.*/
    var blogServiceFactory = {};

    /*Private Method for GET Blogs*/
    var _getBlogs = function (filter) {
        if (!filter)
            filter = "";
        return $http.get('https://www.googleapis.com/blogger/v3/blogs/2997582255772423410/posts' + filter).then(function (results) {
            return results;
        });
    };



    /*Exposing the private Methods with the Factory Variable.*/
    blogServiceFactory.getBlogs = _getBlogs;

    return blogServiceFactory;
}]);