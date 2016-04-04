'use strict';

angular.module('eCommerce')
  .controller('HomeCtrl', function (HomeService, BASE_URI) {
    var home = this;
    home.title = 'Doom';

    HomeService.getFromURL( BASE_URI + '/eCommerce/pageData.json')
        .then(function(data) {
            home.records = data.records;
        })
        .catch(function(error) {
            //
        })
        .finally(function() {
            //
        })

  })
;
