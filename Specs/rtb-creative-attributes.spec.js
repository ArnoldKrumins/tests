/**
 * Created by arnoldkrumins on 17/01/2016.
 */

function getIds(data,value){
    return _.map(data,value);
}

describe("Three DSPs where Creative Attributes are the same", function() {

    it("contains three DSPs objects", function() {
        var data = categoryDataService.ThreeDSPs_AllCreateAttributesTheSame()
        expect(data.length).toBe(3);
    });


    it("should be 1 as all 3 categories are the same", function() {

        var data = categoryDataService.ThreeDSPs_AllCreateAttributesTheSame();
        var result = _.uniqWith(getIds(data,'RtbCreativeAttributeIds'),_.isEqual);
        expect(result.length).toBe(1);

        var thesame = dspDataValidator.AreCreativeAttributesTheSame(data);
        expect(thesame).toBe(true);
    });


});



describe("Three DSPs where one Creative Attributes is different", function() {

    it("contains three DSPs objects", function() {
        var data = categoryDataService.ThreeDSPs_AllCreativeAttributesDifferent()
        expect(data.length).toBe(3);
    });


    it("should be 3 as all 3 categories are different", function() {

        var data = categoryDataService.ThreeDSPs_AllCreativeAttributesDifferent();
        var result = _.uniqWith(getIds(data,'RtbCreativeAttributeIds'),_.isEqual);
        expect(result.length).toBe(3);

        var thesame = dspDataValidator.AreCreativeAttributesTheSame(data);
        expect(thesame).toBe(false);
    });


});



describe("Five DSPs where Creative Attributes all different", function() {

    it("contains five DSPs objects", function() {
        var data = categoryDataService.FiveDSPs_FourCreativesTheSameOneDifferent()
        expect(data.length).toBe(5);
    });


    it("should be 2 as 1 is different from 5 categories", function() {

        var data = categoryDataService.FiveDSPs_FourCreativesTheSameOneDifferent();
        var result = _.uniqWith(getIds(data,'RtbCreativeAttributeIds'),_.isEqual);
        expect(result.length).toBe(2);

        var thesame = dspDataValidator.AreCreativeAttributesTheSame(data);
        expect(thesame).toBe(false);
    });


});