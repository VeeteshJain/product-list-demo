(function(angular) {
    'use strict';
    var pdpApp = angular.module('pdpApp', ['ui.bootstrap']);
    pdpApp.controller('pdpAppCtrl', ['$scope', function($scope) {

        $scope.categories = ['New Arivals', 'Accesories', 'Bags', 'Dressed', 'Jackets', 'jewelry'];

        $scope.products = [{
            name: 'FLUTED HEM DRESS',
            category: 'Summer dress',
            sku: '89356',
            price: 39,
            colors: ['#222', '#6e8cd5', '#f56060', '#44c28d'],
            size: ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
            images: [
                'https://s3-us-west-2.amazonaws.com/s.cdpn.io/245657/1.jpg',
                'https://s3-us-west-2.amazonaws.com/s.cdpn.io/245657/2.jpg',
                'https://s3-us-west-2.amazonaws.com/s.cdpn.io/245657/3.jpg'
            ]
        }, {
            name: 'PLEAT PRINTED DRESS',
            category: 'Summer dress',
            sku: '12512',
            price: 55,
            colors: ['#222', '#6e8cd5', '#44c28d'],
            size: ['L', 'XL', 'XXL'],
            images: [
                'https://s3-us-west-2.amazonaws.com/s.cdpn.io/245657/2.jpg',
                'https://s3-us-west-2.amazonaws.com/s.cdpn.io/245657/1.jpg',
                'https://s3-us-west-2.amazonaws.com/s.cdpn.io/245657/3.jpg'
            ]
        }, {
            name: 'FLOWY SHIRT DRESS',
            category: 'Summer dress',
            sku: '986784',
            price: 30,
            colors: ['#6e8cd5', '#f56060', '#44c28d'],
            size: ['XS', 'S', 'M'],
            images: [
                'https://s3-us-west-2.amazonaws.com/s.cdpn.io/245657/3.jpg',
                'https://s3-us-west-2.amazonaws.com/s.cdpn.io/245657/2.jpg',
                'https://s3-us-west-2.amazonaws.com/s.cdpn.io/245657/1.jpg'
            ]
        }, {
            name: 'FLUTED HEM DRESS 021',
            category: 'Summer dress',
            sku: '893326',
            price: 39,
            colors: ['#222', '#6e8cd5', '#f56060', '#44c28d'],
            size: ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
            images: [
                'https://s3-us-west-2.amazonaws.com/s.cdpn.io/245657/1.jpg',
                'https://s3-us-west-2.amazonaws.com/s.cdpn.io/245657/2.jpg',
                'https://s3-us-west-2.amazonaws.com/s.cdpn.io/245657/3.jpg'
            ]
        }, {
            name: 'PLEAT PRINTED DRESS asdsaa',
            category: 'Summer dress',
            sku: '123122',
            price: 55,
            colors: ['#222', '#6e8cd5', '#44c28d'],
            size: ['L', 'XL', 'XXL'],
            images: [
                'https://s3-us-west-2.amazonaws.com/s.cdpn.io/245657/2.jpg',
                'https://s3-us-west-2.amazonaws.com/s.cdpn.io/245657/1.jpg',
                'https://s3-us-west-2.amazonaws.com/s.cdpn.io/245657/3.jpg'
            ]
        }, {
            name: 'FLOWY SHIRT DRESS wdaszda',
            category: 'Summer dress',
            sku: '98656754',
            price: 30,
            colors: ['#6e8cd5', '#f56060', '#44c28d'],
            size: ['XS', 'S', 'M'],
            images: [
                'https://s3-us-west-2.amazonaws.com/s.cdpn.io/245657/3.jpg',
                'https://s3-us-west-2.amazonaws.com/s.cdpn.io/245657/2.jpg',
                'https://s3-us-west-2.amazonaws.com/s.cdpn.io/245657/1.jpg'
            ]
        }];


        $scope.myCart = [];
        $scope.addToCart = function(product) {
            $scope.myCart.push(product);
        };
    }]);

    pdpApp.run(["$templateCache", function($templateCache) {
        $templateCache.put("template/carousel/carousel.html",
            "<div ng-mouseenter=\"pause()\" ng-mouseleave=\"play()\" class=\"carousel\" ng-swipe-right=\"prev()\" ng-swipe-left=\"next()\">\n" +
            "  <div class=\"carousel-inner\" ng-transclude></div>\n" +
            "  <a role=\"button\" href class=\"left carousel-control mini\" ng-click=\"prev()\" ng-show=\"slides.length > 1\">\n" +
            "    <span aria-hidden=\"true\" class=\"glyphicon glyphicon-chevron-left\"></span>\n" +
            "    <span class=\"sr-only\">previous</span>\n" +
            "  </a>\n" +
            "  <a role=\"button\" href class=\"right carousel-control mini\" ng-click=\"next()\" ng-show=\"slides.length > 1\">\n" +
            "    <span aria-hidden=\"true\" class=\"glyphicon glyphicon-chevron-right\"></span>\n" +
            "    <span class=\"sr-only\">next</span>\n" +
            "  </a>\n" +
            "</div>");
    }]);

}(angular));
