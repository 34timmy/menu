"use strict";
/**
 * Created by Dreval Viacheslav on 10.12.2016.
 */
var ErrorModel = (function () {
    function ErrorModel(summary, detail) {
        this.severity = 'error';
        this.summary = summary;
        this.detail = detail;
    }
    return ErrorModel;
}());
exports.ErrorModel = ErrorModel;
//# sourceMappingURL=error.model.js.map