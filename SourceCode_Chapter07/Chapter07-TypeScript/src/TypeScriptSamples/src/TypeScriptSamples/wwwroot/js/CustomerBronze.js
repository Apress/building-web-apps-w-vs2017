System.register(["./CustomerBase"], function (exports_1, context_1) {
    "use strict";
    var __extends = (this && this.__extends) || function (d, b) {
        for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
    var __moduleName = context_1 && context_1.id;
    var CustomerBase_1, CustomerBronze;
    return {
        setters: [
            function (CustomerBase_1_1) {
                CustomerBase_1 = CustomerBase_1_1;
            }
        ],
        execute: function () {
            CustomerBronze = (function (_super) {
                __extends(CustomerBronze, _super);
                function CustomerBronze() {
                    var _this = _super.apply(this, arguments) || this;
                    _this.name = "Bronze Customer";
                    _this.numberOfYearsCustomer = 5;
                    return _this;
                }
                return CustomerBronze;
            }(CustomerBase_1.CustomerBase));
            exports_1("CustomerBronze", CustomerBronze);
        }
    };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ3VzdG9tZXJCcm9uemUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvQ3VzdG9tZXJCcm9uemUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztZQUVBO2dCQUFvQyxrQ0FBWTtnQkFBaEQ7b0JBQUEsa0RBR0M7b0JBRkcsVUFBSSxHQUFHLGlCQUFpQixDQUFDO29CQUN6QiwyQkFBcUIsR0FBRyxDQUFDLENBQUM7O2dCQUM5QixDQUFDO2dCQUFELHFCQUFDO1lBQUQsQ0FBQyxBQUhELENBQW9DLDJCQUFZLEdBRy9DOztRQUNELENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDdXN0b21lckJhc2UgfSBmcm9tIFwiLi9DdXN0b21lckJhc2VcIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBDdXN0b21lckJyb256ZSBleHRlbmRzIEN1c3RvbWVyQmFzZSB7XHJcbiAgICBuYW1lID0gXCJCcm9uemUgQ3VzdG9tZXJcIjtcclxuICAgIG51bWJlck9mWWVhcnNDdXN0b21lciA9IDU7XHJcbn1cclxuIl19