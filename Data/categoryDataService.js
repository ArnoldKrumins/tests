/**
 * Created by akrumins on 15/01/2016.
 */
var categoryDataService = function (){

    TwoDSPs_AllDataDifferent = function(){
        return [
            {
                "Id": 412,
                "Name": "Sociomantic",
                "NoUserMatchingThreshold": 0,
                "UserMatchingThreshold": 0,
                "CanAuctionTypeBeSet": false,
                "AuctionType": 2,
                "GeoFilterId": null,
                "SiteProtection": null,
                "OnlyRunPrivateDeals": false,
                "ApprovedCategories": [
                    {
                        "Id": 1,
                        "ParentId": null,
                        "Category": "Arts and Entertainment",
                        "Selected": false,
                        "$$hashKey": "object:30"
                    },
                    {
                        "Id": 2,
                        "ParentId": 1,
                        "Category": "Arts and Entertainment/Animation and Comics",
                        "Selected": false,
                        "$$hashKey": "object:31"
                    },
                    {
                        "Id": 3,
                        "ParentId": 1,
                        "Category": "Arts and Entertainment/Architecture",
                        "Selected": false,
                        "$$hashKey": "object:32"
                    },
                    {
                        "Id": 4,
                        "ParentId": 1,
                        "Category": "Arts and Entertainment/Awards",
                        "Selected": false,
                        "$$hashKey": "object:33"
                    },
                    {
                        "Id": 5,
                        "ParentId": 1,
                        "Category": "Arts and Entertainment/Celebrities and Entertainment News",
                        "Selected": false,
                        "$$hashKey": "object:34"
                    },
                    {
                        "Id": 6,
                        "ParentId": 1,
                        "Category": "Arts and Entertainment/Fashion and Modeling",
                        "Selected": false,
                        "$$hashKey": "object:35"
                    },
                    {
                        "Id": 7,
                        "ParentId": 1,
                        "Category": "Arts and Entertainment/Humor",
                        "Selected": false,
                        "$$hashKey": "object:36"
                    },
                    {
                        "Id": 8,
                        "ParentId": 1,
                        "Category": "Arts and Entertainment/Movies",
                        "Selected": false,
                        "$$hashKey": "object:37"
                    },
                    {
                        "Id": 9,
                        "ParentId": 1,
                        "Category": "Arts and Entertainment/Music and Audio",
                        "Selected": false,
                        "$$hashKey": "object:38"
                    },
                    {
                        "Id": 10,
                        "ParentId": 1,
                        "Category": "Arts and Entertainment/Performing Arts",
                        "Selected": false,
                        "$$hashKey": "object:39"
                    },
                    {
                        "Id": 11,
                        "ParentId": 1,
                        "Category": "Arts and Entertainment/Photography",
                        "Selected": false,
                        "$$hashKey": "object:40"
                    },
                    {
                        "Id": 12,
                        "ParentId": 1,
                        "Category": "Arts and Entertainment/TV and Video",
                        "Selected": false,
                        "$$hashKey": "object:41"
                    },
                    {
                        "Id": 13,
                        "ParentId": 1,
                        "Category": "Arts and Entertainment/Visual Arts and Design",
                        "Selected": false,
                        "$$hashKey": "object:42"
                    },
                    {
                        "Id": 14,
                        "ParentId": 1,
                        "Category": "Arts and Entertainment/Web Design",
                        "Selected": false,
                        "$$hashKey": "object:43"
                    }
                ],
                "RejectedCategories": [
                    {
                        "Id": 246,
                        "ParentId": null,
                        "Category": "Adult",
                        "Selected": false,
                        "$$hashKey": "object:275"
                    }
                ],
                "BidRequestSettings": {
                    "Id": 195,
                    "IncludeSiteId": true,
                    "IncludeSiteName": false,
                    "IncludePublisherName": true,
                    "IncludeSiteContentCategories": false,
                    "IncludePageContentCategories": false,
                    "IncludeIpAddress": true,
                    "IncludeUserAgentString": true,
                    "IncludeCountry": true,
                    "FixedPageUrl": "",
                    "IncludePageUrl": 0
                },
                "RtbCreativeAttributeIds": [],
                "Selected": true,
                "$$hashKey": "object:792"
            },
            {
                "Id": 415,
                "Name": "DoubleClick Bid Manager",
                "NoUserMatchingThreshold": 0,
                "UserMatchingThreshold": 0,
                "CanAuctionTypeBeSet": false,
                "AuctionType": 2,
                "GeoFilterId": null,
                "SiteProtection": null,
                "OnlyRunPrivateDeals": false,
                "ApprovedCategories": [],
                "RejectedCategories": [
                    {
                        "Id": 246,
                        "ParentId": null,
                        "Category": "Adult",
                        "Selected": false,
                        "$$hashKey": "object:3070"
                    },
                    {
                        "Id": 175,
                        "ParentId": 168,
                        "Category": "Recreation and Hobbies/Nudism",
                        "Selected": false,
                        "$$hashKey": "object:204"
                    }
                ],
                "BidRequestSettings": {
                    "Id": 198,
                    "IncludeSiteId": true,
                    "IncludeSiteName": false,
                    "IncludePublisherName": true,
                    "IncludeSiteContentCategories": false,
                    "IncludePageContentCategories": false,
                    "IncludeIpAddress": true,
                    "IncludeUserAgentString": true,
                    "IncludeCountry": true,
                    "FixedPageUrl": null,
                    "IncludePageUrl": 0
                },
                "RtbCreativeAttributeIds": [],
                "Selected": true,
                "$$hashKey": "object:793"
            }
        ]
    }


    ThreeRTBs_AllDataTheSame = function(){
     return  [
            {
                "Id": 412,
                "Name": "Sociomantic",
                "NoUserMatchingThreshold": 0,
                "UserMatchingThreshold": 0,
                "CanAuctionTypeBeSet": false,
                "AuctionType": 2,
                "GeoFilterId": null,
                "SiteProtection": null,
                "OnlyRunPrivateDeals": false,
                "ApprovedCategories": [],
                "RejectedCategories": [
                    {
                        "Id": 246,
                        "ParentId": null,
                        "Category": "Adult",
                        "Selected": false
                    }
                ],
                "BidRequestSettings": {
                    "Id": 195,
                    "IncludeSiteId": true,
                    "IncludeSiteName": false,
                    "IncludePublisherName": true,
                    "IncludeSiteContentCategories": false,
                    "IncludePageContentCategories": false,
                    "IncludeIpAddress": true,
                    "IncludeUserAgentString": true,
                    "IncludeCountry": true,
                    "FixedPageUrl": "",
                    "IncludePageUrl": 0
                },
                "RtbCreativeAttributeIds": [],
                "Selected": true,
                "$$hashKey": "object:792"
            },
            {
                "Id": 415,
                "Name": "DoubleClick Bid Manager",
                "NoUserMatchingThreshold": 0,
                "UserMatchingThreshold": 0,
                "CanAuctionTypeBeSet": false,
                "AuctionType": 2,
                "GeoFilterId": null,
                "SiteProtection": null,
                "OnlyRunPrivateDeals": false,
                "ApprovedCategories": [],
                "RejectedCategories": [
                    {
                        "Id": 246,
                        "ParentId": null,
                        "Category": "Adult",
                        "Selected": false
                    }
                ],
                "BidRequestSettings": {
                    "Id": 198,
                    "IncludeSiteId": true,
                    "IncludeSiteName": false,
                    "IncludePublisherName": true,
                    "IncludeSiteContentCategories": false,
                    "IncludePageContentCategories": false,
                    "IncludeIpAddress": true,
                    "IncludeUserAgentString": true,
                    "IncludeCountry": true,
                    "FixedPageUrl": null,
                    "IncludePageUrl": 0
                },
                "RtbCreativeAttributeIds": [],
                "Selected": true,
                "$$hashKey": "object:793"
            },
            {
                "Id": 416,
                "Name": "AdPilot",
                "NoUserMatchingThreshold": 0,
                "UserMatchingThreshold": 0,
                "CanAuctionTypeBeSet": false,
                "AuctionType": 2,
                "GeoFilterId": null,
                "SiteProtection": null,
                "OnlyRunPrivateDeals": false,
                "ApprovedCategories": [],
                "RejectedCategories": [
                    {
                        "Id": 246,
                        "ParentId": null,
                        "Category": "Adult",
                        "Selected": false
                    }
                ],
                "BidRequestSettings": {
                    "Id": 199,
                    "IncludeSiteId": true,
                    "IncludeSiteName": false,
                    "IncludePublisherName": true,
                    "IncludeSiteContentCategories": false,
                    "IncludePageContentCategories": false,
                    "IncludeIpAddress": true,
                    "IncludeUserAgentString": true,
                    "IncludeCountry": true,
                    "FixedPageUrl": null,
                    "IncludePageUrl": 0
                },
                "RtbCreativeAttributeIds": [],
                "Selected": true,
                "$$hashKey": "object:794"
            }
        ]
    }

    ThreeRTBs_TwoTheSameOneDifferent = function(){
       return  [
            {
                "Id": 412,
                "Name": "Sociomantic",
                "NoUserMatchingThreshold": 0,
                "UserMatchingThreshold": 0,
                "CanAuctionTypeBeSet": false,
                "AuctionType": 2,
                "GeoFilterId": null,
                "SiteProtection": null,
                "OnlyRunPrivateDeals": false,
                "ApprovedCategories": [],
                "RejectedCategories": [
                    {
                        "Id": 246,
                        "ParentId": null,
                        "Category": "Adult",
                        "Selected": false
                    }
                ],
                "BidRequestSettings": {
                    "Id": 195,
                    "IncludeSiteId": true,
                    "IncludeSiteName": false,
                    "IncludePublisherName": true,
                    "IncludeSiteContentCategories": false,
                    "IncludePageContentCategories": false,
                    "IncludeIpAddress": true,
                    "IncludeUserAgentString": true,
                    "IncludeCountry": true,
                    "FixedPageUrl": "",
                    "IncludePageUrl": 0
                },
                "RtbCreativeAttributeIds": [],
                "Selected": true,
                "$$hashKey": "object:792"
            },
            {
                "Id": 415,
                "Name": "DoubleClick Bid Manager",
                "NoUserMatchingThreshold": 0,
                "UserMatchingThreshold": 0,
                "CanAuctionTypeBeSet": false,
                "AuctionType": 2,
                "GeoFilterId": null,
                "SiteProtection": null,
                "OnlyRunPrivateDeals": false,
                "ApprovedCategories": [],
                "RejectedCategories": [
                    {
                        "Id": 246,
                        "ParentId": null,
                        "Category": "Adult",
                        "Selected": false
                    }
                ],
                "BidRequestSettings": {
                    "Id": 198,
                    "IncludeSiteId": true,
                    "IncludeSiteName": false,
                    "IncludePublisherName": true,
                    "IncludeSiteContentCategories": false,
                    "IncludePageContentCategories": false,
                    "IncludeIpAddress": true,
                    "IncludeUserAgentString": true,
                    "IncludeCountry": true,
                    "FixedPageUrl": null,
                    "IncludePageUrl": 0
                },
                "RtbCreativeAttributeIds": [],
                "Selected": true,
                "$$hashKey": "object:793"
            },
            {
                "Id": 1806,
                "Name": "SmartyAds",
                "NoUserMatchingThreshold": 0,
                "UserMatchingThreshold": 0,
                "CanAuctionTypeBeSet": false,
                "AuctionType": 2,
                "GeoFilterId": null,
                "SiteProtection": null,
                "OnlyRunPrivateDeals": false,
                "ApprovedCategories": [],
                "RejectedCategories": [],
                "BidRequestSettings": {
                    "Id": 1594,
                    "IncludeSiteId": true,
                    "IncludeSiteName": true,
                    "IncludePublisherName": true,
                    "IncludeSiteContentCategories": true,
                    "IncludePageContentCategories": true,
                    "IncludeIpAddress": true,
                    "IncludeUserAgentString": true,
                    "IncludeCountry": true,
                    "FixedPageUrl": null,
                    "IncludePageUrl": 1
                },
                "RtbCreativeAttributeIds": [],
                "Selected": true,
                "$$hashKey": "object:800"
            }
        ]
    }



    return{
        TwoDSPs_AllDataDifferent:TwoDSPs_AllDataDifferent,
        ThreeRTBs_AllDataTheSame:ThreeRTBs_AllDataTheSame,
        ThreeRTBs_TwoTheSameOneDifferent:ThreeRTBs_TwoTheSameOneDifferent
    }

}();