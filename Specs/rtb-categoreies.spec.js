/**
 * Created by akrumins on 15/01/2016.
 */

beforeEach(function(){
   console.log('create');
});



describe("Two DSPs where Accepted and Rejected Category Data are ALL different", function() {

    it("contains two DSPs objects", function() {
        var data = categoryDataService.TwoDSPs_AllDataDifferent()
        expect(data.length).toBe(2);
    });


    it("should be 4 as all 4 categories are different", function() {
        var data = categoryDataService.TwoDSPs_AllDataDifferent()
        var accepted = _.uniqWith(_.map(data, 'ApprovedCategories'), _.isEqual);
        var rejected = _.uniqWith(_.map(data, 'RejectedCategories'), _.isEqual);

        expect(accepted.length + rejected.length).toBe(4);
    });


});


describe("Three DSPs where Accepted and Rejected Category Data is the Same", function() {

    it("contains three rtb objects", function() {
        var data = categoryDataService.ThreeRTBs_AllDataTheSame()
        expect(data.length).toBe(3);
    });


    it("should be 2 as all 3 categories are the same", function() {
        var data = categoryDataService.ThreeRTBs_AllDataTheSame()
        var accepted = _.uniqWith(_.map(data, 'ApprovedCategories'), _.isEqual);
        var rejected = _.uniqWith(_.map(data, 'RejectedCategories'), _.isEqual);

        expect(accepted.length + rejected.length).toBe(2);
    });


});



describe("Three DSPs where Accepted and Rejected Category Data is the Same", function() {

    it("contains three rtb objects", function() {
        var data = categoryDataService.ThreeRTBs_TwoTheSameOneDifferent()
        expect(data.length).toBe(3);
    });


    it("should be 2 as 1 is different from 3", function() {
        var data = categoryDataService.ThreeRTBs_TwoTheSameOneDifferent()
        var accepted = _.uniqWith(_.map(data, 'ApprovedCategories'), _.isEqual);
        var rejected = _.uniqWith(_.map(data, 'RejectedCategories'), _.isEqual);

        expect(accepted.length + rejected.length).toBe(3);
    });
});







