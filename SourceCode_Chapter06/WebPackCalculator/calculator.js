module.exports = (function() {
    function Calculator() {}
    Calculator.prototype.add = function(left, right) {
        return left + right;    
    };
    
    return Calculator;
})();