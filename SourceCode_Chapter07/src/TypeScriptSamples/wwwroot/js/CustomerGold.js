System.register(["./CustomerBase"], function (exports_1, context_1) {
    "use strict";
    var __extends = (this && this.__extends) || function (d, b) {
        for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
    var __moduleName = context_1 && context_1.id;
    var CustomerBase_1, CustomerGold;
    return {
        setters: [
            function (CustomerBase_1_1) {
                CustomerBase_1 = CustomerBase_1_1;
            }
        ],
        execute: function () {
            CustomerGold = (function (_super) {
                __extends(CustomerGold, _super);
                function CustomerGold() {
                    var _this = _super.apply(this, arguments) || this;
                    _this.name = "Gold Customer";
                    _this.numberOfYearsCustomer = 15;
                    return _this;
                }
                CustomerGold.prototype.discountPercent = function () {
                    return .20;
                };
                return CustomerGold;
            }(CustomerBase_1.CustomerBase));
            exports_1("CustomerGold", CustomerGold);
        }
    };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ3VzdG9tZXJHb2xkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL0N1c3RvbWVyR29sZC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O1lBRUE7Z0JBQWtDLGdDQUFZO2dCQUE5QztvQkFBQSxrREFNQztvQkFMRyxVQUFJLEdBQUcsZUFBZSxDQUFDO29CQUN2QiwyQkFBcUIsR0FBRyxFQUFFLENBQUM7O2dCQUkvQixDQUFDO2dCQUhHLHNDQUFlLEdBQWY7b0JBQ0ksTUFBTSxDQUFDLEdBQUcsQ0FBQztnQkFDZixDQUFDO2dCQUNMLG1CQUFDO1lBQUQsQ0FBQyxBQU5ELENBQWtDLDJCQUFZLEdBTTdDOztRQUNELENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDdXN0b21lckJhc2UgfSBmcm9tIFwiLi9DdXN0b21lckJhc2VcIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBDdXN0b21lckdvbGQgZXh0ZW5kcyBDdXN0b21lckJhc2Uge1xyXG4gICAgbmFtZSA9IFwiR29sZCBDdXN0b21lclwiO1xyXG4gICAgbnVtYmVyT2ZZZWFyc0N1c3RvbWVyID0gMTU7XHJcbiAgICBkaXNjb3VudFBlcmNlbnQoKSB7XHJcbiAgICAgICAgcmV0dXJuIC4yMDtcclxuICAgIH1cclxufVxyXG4iXX0=