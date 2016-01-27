//var app = angular.module("app", []);
//
//app.directive("ehSimple", function() {
//    return function(scope, element) {
//        element.addClass("plain");
//    }
//})
//
//
//
//describe("Hello world", function() {
//    var element;
//    var $scope;
//    beforeEach(module("app"))
//    beforeEach(inject(function($compile, $rootScope) {
//        $scope = $rootScope;
//        element = angular.element("<div eh-simple>{{2 + 2}}</div>");
//        $compile(element)($rootScope)
//    }))
//
//    it('should equal 4', function() {
//        $scope.$digest();
//        expect(element.html()).toBe("4");
//    })
//
//    describe("ehSimple", function() {
//        it("should add a class of plain", function() {
//            expect(element.hasClass("plain")).toBe(true);
//        })
//    })
//})


//describe('Copy Settings', function() {
//
//    // load the controller's module
//    beforeEach(module('wopd'));
//
//    var scope,
//        element;
//
//    // Initialize the controller and a mock scope
//    beforeEach(inject(function($compile, $rootScope) {
//        scope = $rootScope.$new();
//        scope.buyer = fakeDataService.OneBuyer();
//        scope.buyers = fakeDataService.Buyers();
//        //set our view html.
//        element = angular.element('<copy-settings buyer="buyer" buyers="buyers"></copy-settings>');
//        $compile(element)(scope);
//        scope.$digest();
//    }));
//
//    it('should return corrent number of buyer and buyers', function() {
//        //console.log(element.isolateScope());
//        expect(element.buyer.length).toBe(1);
//        expect(element.buyers.length).toBe(8);
//
//    });
//
//});

//http://stackoverflow.com/questions/21578762/isolatescope-returns-undefined-when-using-templateurl


it('should be defined', inject(function ($rootScope, $compile) {
    var scope = $rootScope.$new();
    //scope.buyer = fakeDataService.OneBuyer();
    //scope.buyers = fakeDataService.Buyers();

    //$httpBackend.expectGET('app/directives/deliverable-list-directive.tpl.html').respond();

    var $element = $compile('<copy-settings buyer="fakeDataService.OneBuyer()" buyers="fakeDataService.Buyers()"></copy-settings>')(scope);


    //console.log(scope.buyer.Id);
    expect($element).toBeDefined();


    scope = $element.isolateScope();
    expect(scope).toBeDefined();
    //expect(scope.label).toEqual('test');
    //expect(scope.deliverables instanceof Array).toEqual(true);
   // expect(scope.buyer.Id).toEqual(415);
   // expect(scope.deliverables[0]).toEqual({id: 123});
}));