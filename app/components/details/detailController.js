'use strict';

angular.module('eCommerce')
  .controller('DetailCtrl', function ($scope, $sce, DetailService, BASE_URI, $stateParams) {
    var details = this;
    

    DetailService.getFromURL( BASE_URI + '/eCommerce/details/' + $stateParams.id + '.json')
        .then(function(data) {
            $scope.details = data;
            $scope.htmlDescription = data.details; 
        })
        .catch(function(error) {
            //
        })
        .finally(function() {
            //
        });


    $scope.imageChanger = function(src) {
        $(".product-gallery figure img").attr("src", src);
    }


    $scope.getHtml = function(html){
        return $sce.trustAsHtml(html);
    };
  })

.filter('html', function($sce) {
    return function(val) {
        return $sce.trustAsHtml(val);
    };
});
