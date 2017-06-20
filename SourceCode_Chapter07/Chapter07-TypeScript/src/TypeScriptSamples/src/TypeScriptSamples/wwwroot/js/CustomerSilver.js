System.register(["./CustomerBase"], function (exports_1, context_1) {
    "use strict";
    var __extends = (this && this.__extends) || function (d, b) {
        for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
    var __moduleName = context_1 && context_1.id;
    var CustomerBase_1, CustomerSilver;
    return {
        setters: [
            function (CustomerBase_1_1) {
                CustomerBase_1 = CustomerBase_1_1;
            }
        ],
        execute: function () {
            CustomerSilver = (function (_super) {
                __extends(CustomerSilver, _super);
                function CustomerSilver() {
                    var _this = _super.apply(this, arguments) || this;
                    _this.name = "Silver Customer";
                    _this.numberOfYearsCustomer = 10;
                    return _this;
                }
                return CustomerSilver;
            }(CustomerBase_1.CustomerBase));
            exports_1("CustomerSilver", CustomerSilver);
        }
    };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ3VzdG9tZXJTaWx2ZXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvQ3VzdG9tZXJTaWx2ZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztZQUVBO2dCQUFvQyxrQ0FBWTtnQkFBaEQ7b0JBQUEsa0RBR0M7b0JBRkcsVUFBSSxHQUFHLGlCQUFpQixDQUFDO29CQUN6QiwyQkFBcUIsR0FBRyxFQUFFLENBQUM7O2dCQUMvQixDQUFDO2dCQUFELHFCQUFDO1lBQUQsQ0FBQyxBQUhELENBQW9DLDJCQUFZLEdBRy9DOztRQUNELENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDdXN0b21lckJhc2UgfSBmcm9tIFwiLi9DdXN0b21lckJhc2VcIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBDdXN0b21lclNpbHZlciBleHRlbmRzIEN1c3RvbWVyQmFzZSB7XHJcbiAgICBuYW1lID0gXCJTaWx2ZXIgQ3VzdG9tZXJcIjtcclxuICAgIG51bWJlck9mWWVhcnNDdXN0b21lciA9IDEwO1xyXG59XHJcbiJdfQ==