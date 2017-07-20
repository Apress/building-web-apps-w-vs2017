System.register([], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var CustomerBase;
    return {
        setters: [],
        execute: function () {
            CustomerBase = (function () {
                function CustomerBase() {
                    this.name = "Customer Base";
                    this.numberOfYearsCustomer = 0;
                }
                CustomerBase.prototype.discountPercent = function () {
                    return .01 * this.numberOfYearsCustomer;
                };
                return CustomerBase;
            }());
            exports_1("CustomerBase", CustomerBase);
        }
    };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ3VzdG9tZXJCYXNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL0N1c3RvbWVyQmFzZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7O1lBRUE7Z0JBQUE7b0JBQ0ksU0FBSSxHQUFHLGVBQWUsQ0FBQztvQkFDdkIsMEJBQXFCLEdBQUcsQ0FBQyxDQUFDO2dCQUk5QixDQUFDO2dCQUhHLHNDQUFlLEdBQWY7b0JBQ0ksTUFBTSxDQUFDLEdBQUcsR0FBRyxJQUFJLENBQUMscUJBQXFCLENBQUM7Z0JBQzVDLENBQUM7Z0JBQ0wsbUJBQUM7WUFBRCxDQUFDLEFBTkQsSUFNQzs7UUFHRCxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSUN1c3RvbWVyIH0gZnJvbSBcIi4vSUN1c3RvbWVyXCI7XHJcblxyXG5leHBvcnQgYWJzdHJhY3QgY2xhc3MgQ3VzdG9tZXJCYXNlIGltcGxlbWVudHMgSUN1c3RvbWVyIHtcclxuICAgIG5hbWUgPSBcIkN1c3RvbWVyIEJhc2VcIjtcclxuICAgIG51bWJlck9mWWVhcnNDdXN0b21lciA9IDA7XHJcbiAgICBkaXNjb3VudFBlcmNlbnQoKSB7XHJcbiAgICAgICAgcmV0dXJuIC4wMSAqIHRoaXMubnVtYmVyT2ZZZWFyc0N1c3RvbWVyO1xyXG4gICAgfVxyXG59XHJcblxyXG5cclxuIl19