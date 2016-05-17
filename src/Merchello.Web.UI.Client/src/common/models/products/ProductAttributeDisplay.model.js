    /**
     * @ngdoc model
     * @name ProductAttributeDisplay
     * @function
     *
     * @description
     * Represents a JS version of Merchello's ProductAttributeDisplay object
     */
    var ProductAttributeDisplay = function() {
        var self = this;
        self.key = '';
        self.optionKey = '';
        self.name = '';
        self.sku = '';
        self.sortOrder = 0;
    };

    angular.module('merchello.models').constant('ProductAttributeDisplay', ProductAttributeDisplay);
