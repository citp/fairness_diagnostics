var data_parser = (function () {

    var data_files

    return {
        get_data_files: function(json_data) {

            var array = json_data.data;

            var result = [];
            var arrayLength = array.length;
            for (var i = 0; i < arrayLength; i++) {
                result.push({ 'file_name': array[i]['file_display_name'] });
            }

            return result;
        }
    };

})();



// Parse the JSON data
// fd_data: Fairness Diagnostics data
//function fd_data(json_data_format) {

   //var obj = JSON.parse(json_data_format);

   //this.file_name = obj.file_display_name;
   //this.file_path = obj.file_path;

   //this.score_attribute_list = obj.score_attributes;
   //this.group_attribute_list = obj.group_attributes;
   //this.outcome_attribute_list = obj.outcome_attributes;
   //this.x_vars_list = obj.x_vars_list;
//}
