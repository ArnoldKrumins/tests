/**
 * Created by akrumins on 23/01/2016.
 */

function conditionUnderTest(value){

   return (angular.isDefined(value) && value !== null) ? value.Id : null;
}

describe("Ensure when getting RTB data the publisher parameter value is handled correctly", function() {


    it("should be null as the value is null", function() {

        var value = null;
        var id = conditionUnderTest(value);
        expect(id).toBe(null);

    });


    it("should be null as the value is 'undefined'", function() {

        var value = undefined;
        var id = conditionUnderTest(value);
        expect(id).toBe(null);

    });


    it("should be id:1234 as the value is a valid 'Sub Publisher' parameter object", function() {

        var value =  {Id: 2273, PublisherType: 1, Name: 'Malaysiastylo.com_block Lazada'};
        var id = conditionUnderTest(value);
        expect(id).toBe(2273);

    });


    it("should be null as the value is a valid parameter object but parameter is null", function() {

        var value = {Id: null, PublisherType: 2, Name: "All"};
        var id = conditionUnderTest(value);
        expect(id).toBe(null);

    });


});