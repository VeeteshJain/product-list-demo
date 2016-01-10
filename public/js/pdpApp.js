(function(angular) {
    'use strict';
    var pdpApp = angular.module('pdpApp', []);
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
        }];
    }]);
}(angular));
