/**
 * Created by arnoldkrumins on 17/01/2016.
 */
var dspDataValidator = function(){

    function getAdCategoryIds(data,value){
        return _.map(_.map(data,value),function(d){
            return _.map(d,'Id');
        });
    }

    return{

        AreAdCategoriesTheSame : function(data){
            var approved = _.uniqWith(getAdCategoryIds(data,'ApprovedCategories'),_.isEqual);
            var rejected = _.uniqWith(getAdCategoryIds(data,'RejectedCategories'),_.isEqual);
            return (approved.length + rejected.length === 2) ? true : false;
        },


        AreCreativeAttributesTheSame : function(){
            var result = _.uniqWith(getIds(data,'RtbCreativeAttributeIds'),_.isEqual);
        }

    }

}();