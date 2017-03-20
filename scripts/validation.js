(function(window) {
    'use strict';
    var App = window.App || {};
    var Validation = {
        isCompanyEmail: function(email) {
            return /.+@bignerdranch\.com$/.test(email);
        },
        isDecafValid: function(order, strength) {
            return !(order.includes('decaf') && (strength > 20));
        }
    };
    App.Validation = Validation;
    window.App = App;
})(window);
