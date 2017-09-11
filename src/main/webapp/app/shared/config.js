"use strict";
var http_1 = require("@angular/http");
/**
 * Created by Dreval Viacheslav on 10.12.2016.
 */
exports.basePath = '/menu';
exports.loginPath = "/spring_security_check";
exports.mealPath = '/profile/meals';
exports.profilePath = '/profile';
exports.registerPath = '/register';
exports.usersPath = '/admin/users';
exports.restaurantPath = '/admin/restaurants';
exports.i18nPath = '/i18n';
exports.headers = new http_1.Headers({
    'Content-Type': 'application/json'
});
exports.reqOptions = new http_1.RequestOptions({
    withCredentials: true
});
exports.reqOptionsJson = new http_1.RequestOptions({
    withCredentials: true,
    headers: exports.headers
});
//# sourceMappingURL=config.js.map