function DataSource(json_data) {

    var result = {};

    var _json_data_length = json_data.length;
    var _data_files = [];
    var _score_attributes = {};
    var _group_attributes = {};
    var _outcome_attributes = {};
    var _predictors = {};

    for (var i = 0; i < _json_data_length; i++) {
        _data_files.push({ 'file_display_name': json_data[i]['file_display_name'],
                           'file_path': json_data[i]['file_path']
                        });

        _score_attributes[json_data[i]['file_display_name']] = json_data[i].score_attributes;
        _group_attributes[json_data[i]['file_display_name']] = json_data[i].group_attributes;
        _outcome_attributes[json_data[i]['file_display_name']] = json_data[i].outcome_attributes;
        _predictors[json_data[i]['file_display_name']] = json_data[i].predictors;
    }

    result.get_data_files = function() {
        return _data_files;
    }

    result.get_score_attributes = function(data_file) {
        return _score_attributes[data_file.file_display_name];
    }

    result.get_group_attributes = function(data_file) {
        return _group_attributes[data_file.file_display_name];
    }

    result.get_outcome_attributes = function(data_file) {
        return _outcome_attributes[data_file.file_display_name];
    }

    result.get_predictors = function(data_file) {
        return _predictors[data_file.file_display_name];
    }

    return result;

}
