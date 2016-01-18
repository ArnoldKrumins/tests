/**
 * Created by arnoldkrumins on 18/01/2016.
 */

function getPageUrlIds(data,value){
    return _.map(_.map(data,value),function(d){
        return d.IncludePageUrl;
    });
}

describe("Four DSPs where URL Formats are the same", function() {

    it("contains three DSPs objects", function() {
        var data = fakeDataService.FourDSPs_AllURlFormatsTheSame()
        expect(data.length).toBe(4);
    });


    it("should be 1 as all 4 categories are the same", function() {

        var data = fakeDataService.FourDSPs_AllURlFormatsTheSame();
        var result = _.uniqWith(getPageUrlIds(data,'BidRequestSettings'),_.isEqual);
        expect(result.length).toBe(1);

        var thesame = dspDataValidator.ArePageURlsTheSame(data);
        expect(thesame).toBe(true);
    });


});


describe("Four DSPs where All URL Formats are different", function() {

    it("contains four DSPs objects", function() {
        var data = fakeDataService.FourDSPs_AllURLFormatsDifferent()
        expect(data.length).toBe(4);
    });


    it("should be 4 as all 4 categories are different", function() {

        var data = fakeDataService.FourDSPs_AllURLFormatsDifferent();
        var result = _.uniqWith(getPageUrlIds(data,'BidRequestSettings'),_.isEqual);
        expect(result.length).toBe(4);

        var thesame = dspDataValidator.ArePageURlsTheSame(data);
        expect(thesame).toBe(false);
    });


});


describe("Two DSPs where both are different", function() {

    it("contains two DSPs objects", function() {
        var data = fakeDataService.TwoDSPs_URLFormatsTwoDifferent()
        expect(data.length).toBe(2);
    });


    it("should be 2 as  2 categories are different", function() {

        var data = fakeDataService.TwoDSPs_URLFormatsTwoDifferent();
        var result = _.uniqWith(getPageUrlIds(data,'BidRequestSettings'),_.isEqual);
        expect(result.length).toBe(2);

        var thesame = dspDataValidator.ArePageURlsTheSame(data);
        expect(thesame).toBe(false);
    });


});