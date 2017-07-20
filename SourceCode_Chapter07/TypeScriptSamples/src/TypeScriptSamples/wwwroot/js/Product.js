System.register([], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var Product;
    return {
        setters: [],
        execute: function () {
            Product = (function () {
                function Product(nameValue, basePriceValue) {
                    this.name = "";
                    this.basePrice = 0.0;
                    this.name = nameValue;
                    this.basePrice = basePriceValue;
                }
                Product.prototype.currentPrice = function (customer) {
                    var discount = this.basePrice * customer.discountPercent();
                    return this.basePrice - discount;
                };
                return Product;
            }());
            exports_1("Product", Product);
        }
    };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUHJvZHVjdC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9Qcm9kdWN0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7WUFHQTtnQkFLSSxpQkFBWSxTQUFpQixFQUFFLGNBQXNCO29CQUhyRCxTQUFJLEdBQUcsRUFBRSxDQUFDO29CQUNGLGNBQVMsR0FBRyxHQUFHLENBQUM7b0JBR3BCLElBQUksQ0FBQyxJQUFJLEdBQUcsU0FBUyxDQUFDO29CQUN0QixJQUFJLENBQUMsU0FBUyxHQUFHLGNBQWMsQ0FBQztnQkFDcEMsQ0FBQztnQkFFRCw4QkFBWSxHQUFaLFVBQWEsUUFBbUI7b0JBQzVCLElBQUksUUFBUSxHQUFHLElBQUksQ0FBQyxTQUFTLEdBQUcsUUFBUSxDQUFDLGVBQWUsRUFBRSxDQUFDO29CQUMzRCxNQUFNLENBQUMsSUFBSSxDQUFDLFNBQVMsR0FBRyxRQUFRLENBQUM7Z0JBQ3JDLENBQUM7Z0JBQ0wsY0FBQztZQUFELENBQUMsQUFkRCxJQWNDOztRQUdELENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJUHJvZHVjdCB9IGZyb20gXCIuL0lQcm9kdWN0XCI7XHJcbmltcG9ydCB7IElDdXN0b21lciB9IGZyb20gXCIuL0lDdXN0b21lclwiO1xyXG5cclxuZXhwb3J0IGNsYXNzIFByb2R1Y3QgaW1wbGVtZW50cyBJUHJvZHVjdCB7XHJcblxyXG4gICAgbmFtZSA9IFwiXCI7XHJcbiAgICBwcml2YXRlIGJhc2VQcmljZSA9IDAuMDtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcihuYW1lVmFsdWU6IHN0cmluZywgYmFzZVByaWNlVmFsdWU6IG51bWJlcikge1xyXG4gICAgICAgIHRoaXMubmFtZSA9IG5hbWVWYWx1ZTtcclxuICAgICAgICB0aGlzLmJhc2VQcmljZSA9IGJhc2VQcmljZVZhbHVlO1xyXG4gICAgfVxyXG5cclxuICAgIGN1cnJlbnRQcmljZShjdXN0b21lcjogSUN1c3RvbWVyKSB7XHJcbiAgICAgICAgbGV0IGRpc2NvdW50ID0gdGhpcy5iYXNlUHJpY2UgKiBjdXN0b21lci5kaXNjb3VudFBlcmNlbnQoKTtcclxuICAgICAgICByZXR1cm4gdGhpcy5iYXNlUHJpY2UgLSBkaXNjb3VudDtcclxuICAgIH1cclxufVxyXG5cclxuXHJcbiJdfQ==