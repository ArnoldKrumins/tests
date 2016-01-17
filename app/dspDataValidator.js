/**
 * Created by arnoldkrumins on 17/01/2016.
 */
var dspDataValidator = function(){

    function getIds(data,value){
        return _.map(_.map(data,value),function(d){
            return _.map(d,'Id');
        });
    }

    return{

        AreAdCategoriesTheSame : function(data){
            var approved = _.uniqWith(getIds(data,'ApprovedCategories'),_.isEqual);
            var rejected = _.uniqWith(getIds(data,'RejectedCategories'),_.isEqual);
            return (approved.length + rejected.length === 2) ? true : false;
        }


    }

}();