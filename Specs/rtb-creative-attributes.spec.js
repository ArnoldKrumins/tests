/**
 * Created by arnoldkrumins on 17/01/2016.
 */

function getIds(data,value){
    return _.map(_.map(data,value));
}

describe("Three DSPs where Creative Attributes are the same", function() {

    it("contains three DSPs objects", function() {
        var data = categoryDataService.ThreeDSPs_AllCreateAttributesTheSame()
        expect(data.length).toBe(3);
    });


    it("should be 3 as all 3 categories are different", function() {

        var data = categoryDataService.ThreeDSPs_AllCreateAttributesTheSame();
        var result = _.uniqWith(getIds(data,'RtbCreativeAttributeIds'),_.isEqual);
        //var result = _.difference(getIds(data,'RtbCreativeAttributeIds'));
        expect(result.length).toBe(3);

        //var valid = dspDataValidator.AreAdCategoriesTheSame(data);
        //expect(valid).toBe(false);
    });


});



describe("Three DSPs where Creative Attributes all different", function() {

    it("contains three DSPs objects", function() {
        var data = categoryDataService.ThreeDSPs_AllCreateAttributesTheSame()
        expect(data.length).toBe(3);
    });


    it("should be 3 as all 3 categories are different", function() {

        var data = categoryDataService.ThreeDSPs_AllCreativeAttributesDifferent();
        var result = _.uniqWith(getIds(data,'RtbCreativeAttributeIds'),_.isEqual);
        //var result = _.difference(getIds(data,'RtbCreativeAttributeIds'));
        expect(result.length).toBe(3);

        //var valid = dspDataValidator.AreAdCategoriesTheSame(data);
        //expect(valid).toBe(false);
    });


});