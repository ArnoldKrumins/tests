/**
 * Created by akrumins on 15/01/2016.
 */

beforeEach(function(){
   console.log('create');
});


function getIds(data,value){
    return _.map(_.map(data,value),function(d){
        return _.map(d,'Id');
    });
}


describe("Two DSPs where Accepted and Rejected Category count is the same by contents different", function() {

    it("contains two DSPs objects", function() {
        var data = fakeDataService.TwoDSPs_AllDataDifferent()
        expect(data.length).toBe(2);
    });


    it("should be 4 as all 4 categories are different", function() {

        var data = fakeDataService.TwoDSPs_AllDataDifferent();
        var approved = _.uniqWith(getIds(data,'ApprovedCategories'),_.isEqual);
        var rejected = _.uniqWith(getIds(data,'RejectedCategories'),_.isEqual);
        expect(approved.length + rejected.length).toBe(4);

        var thesame = dspDataValidator.AreAdCategoriesTheSame(data);
        expect(thesame).toBe(false);
    });


});



describe("Two DSPs where Accepted and Rejected Category Data are ALL different", function() {

    it("contains two DSPs objects", function() {
        var data = fakeDataService.TwoDSPs_AllDataDifferent()
        expect(data.length).toBe(2);
    });


    it("should be 4 as all 4 categories are different", function() {

        var data = fakeDataService.TwoDSPs_AllDataDifferent();
        var approved = _.uniqWith(getIds(data,'ApprovedCategories'),_.isEqual);
        var rejected = _.uniqWith(getIds(data,'RejectedCategories'),_.isEqual);
        expect(approved.length + rejected.length).toBe(4);

        var thesame = dspDataValidator.AreAdCategoriesTheSame(data);
        expect(thesame).toBe(false);

    });


});


describe("Three DSPs where Accepted and Rejected Category Data is the Same", function() {

    it("contains three rtb objects", function() {
        var data = fakeDataService.ThreeRTBs_AllDataTheSame()
        expect(data.length).toBe(3);
    });


    it("should be 2 as all 3 categories are the same", function() {
        var data = fakeDataService.ThreeRTBs_AllDataTheSame()
        var approved = _.uniqWith(getIds(data, 'ApprovedCategories'), _.isEqual);
        var rejected = _.uniqWith(getIds(data, 'RejectedCategories'), _.isEqual);
        expect(approved.length + rejected.length).toBe(2);

        var thesame = dspDataValidator.AreAdCategoriesTheSame(data);
        expect(thesame).toBe(true);

    });


});








