System.register(["./CustomerBase"], function (exports_1, context_1) {
    "use strict";
    var __extends = (this && this.__extends) || function (d, b) {
        for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
    var __moduleName = context_1 && context_1.id;
    var CustomerBase_1, CustomerAnonymous;
    return {
        setters: [
            function (CustomerBase_1_1) {
                CustomerBase_1 = CustomerBase_1_1;
            }
        ],
        execute: function () {
            CustomerAnonymous = (function (_super) {
                __extends(CustomerAnonymous, _super);
                function CustomerAnonymous() {
                    var _this = _super.apply(this, arguments) || this;
                    _this.name = "Valued Customer";
                    return _this;
                }
                return CustomerAnonymous;
            }(CustomerBase_1.CustomerBase));
            exports_1("CustomerAnonymous", CustomerAnonymous);
        }
    };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ3VzdG9tZXJBbm9ueW1vdXMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvQ3VzdG9tZXJBbm9ueW1vdXMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztZQUVBO2dCQUF1QyxxQ0FBWTtnQkFBbkQ7b0JBQUEsa0RBRUM7b0JBREcsVUFBSSxHQUFHLGlCQUFpQixDQUFDOztnQkFDN0IsQ0FBQztnQkFBRCx3QkFBQztZQUFELENBQUMsQUFGRCxDQUF1QywyQkFBWSxHQUVsRDs7UUFDRCxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ3VzdG9tZXJCYXNlIH0gZnJvbSBcIi4vQ3VzdG9tZXJCYXNlXCI7XHJcblxyXG5leHBvcnQgY2xhc3MgQ3VzdG9tZXJBbm9ueW1vdXMgZXh0ZW5kcyBDdXN0b21lckJhc2Uge1xyXG4gICAgbmFtZSA9IFwiVmFsdWVkIEN1c3RvbWVyXCI7XHJcbn1cclxuIl19