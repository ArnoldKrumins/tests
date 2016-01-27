var app = angular.module('wopd', []);

app.directive('copySettings', function () {

    return {
        restrict: 'E',
        scope: {
            buyer: '=',
            buyers: '='
        },
        template:   '<div class="copy-settings-container">' +
                        '<button Title="Copy settings from existing DSP" class="btn btn-secondary copy-settings-button" ng-click="toggleView()"><i class="fa fa-clone"></i></button>' +
                        '<div class="padding-10 shadow" ng-show="show">' +
                            '<select class="form-control" ng-model="dsp.Id">' +
                                '<option ng-repeat="dsp in loadNewDsps()" ng-value="dsp.Id">{{ dsp.Name }}</option>' +
                            '</select>' +
                            '<button class="btn btn-secondary" ng-click="copy()">Use</button><button class="btn btn-secondary" ng-click="toggleView()">Cancel</button>' +
                        '<div>' +
                    '</div>',

        link: function(scope, element, attrs) {

            scope.show = false;

            scope.loadNewDsps = function() {

                return _.filter(scope.buyers, function(buyer) {
                    return buyer.ApprovedCategories.length > 0 || buyer.RejectedCategories.length > 0;
                });

            };

            scope.toggleView = function() {
                scope.show = !scope.show;
            };

            scope.copy = function() {

                var selectedDsp = _.find(scope.buyers, { Id: parseInt(scope.dsp.Id, 10) });

                if (selectedDsp) {
                    scope.buyer.ApprovedCategories = selectedDsp.ApprovedCategories;
                    scope.buyer.RejectedCategories = selectedDsp.RejectedCategories;

                    scope.buyer.RtbCreativeAttributeIds = selectedDsp.RtbCreativeAttributeIds;

                    scope.buyer.OnlyRunPrivateDeals = selectedDsp.OnlyRunPrivateDeals;
                    scope.buyer.BidRequestSettings.IncludeSiteName = selectedDsp.BidRequestSettings.IncludeSiteName;
                    scope.buyer.BidRequestSettings.IncludePublisherName = selectedDsp.BidRequestSettings.IncludePublisherName;
                    scope.buyer.BidRequestSettings.IncludePageUrl = selectedDsp.BidRequestSettings.IncludePageUrl;
                    scope.buyer.BidRequestSettings.FixedPageUrl = selectedDsp.BidRequestSettings.FixedPageUrl;

                    scope.buyer.GeoFilterId = selectedDsp.GeoFilterId;

                    scope.$emit('buyer:updated', scope.buyer);
                }

            };

        }

    };

});