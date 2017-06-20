System.register(["./CustomerBronze", "./CustomerGold", "./CustomerSilver", "./CustomerAnonymous", "./Product"], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var CustomerBronze_1, CustomerGold_1, CustomerSilver_1, CustomerAnonymous_1, Product_1, IndexVm, indexVmInstance;
    return {
        setters: [
            function (CustomerBronze_1_1) {
                CustomerBronze_1 = CustomerBronze_1_1;
            },
            function (CustomerGold_1_1) {
                CustomerGold_1 = CustomerGold_1_1;
            },
            function (CustomerSilver_1_1) {
                CustomerSilver_1 = CustomerSilver_1_1;
            },
            function (CustomerAnonymous_1_1) {
                CustomerAnonymous_1 = CustomerAnonymous_1_1;
            },
            function (Product_1_1) {
                Product_1 = Product_1_1;
            }
        ],
        execute: function () {
            IndexVm = (function () {
                function IndexVm() {
                    this.currentCustomer = new CustomerAnonymous_1.CustomerAnonymous();
                    this.productList = new Array(0);
                }
                IndexVm.prototype.loginBronze = function () {
                    this.currentCustomer = new CustomerBronze_1.CustomerBronze();
                    this.setWelcomeMsg();
                    this.displayProducts();
                };
                IndexVm.prototype.loginSilver = function () {
                    this.currentCustomer = new CustomerSilver_1.CustomerSilver();
                    this.setWelcomeMsg();
                    this.displayProducts();
                };
                IndexVm.prototype.loginGold = function () {
                    this.currentCustomer = new CustomerGold_1.CustomerGold();
                    this.setWelcomeMsg();
                    this.displayProducts();
                };
                IndexVm.prototype.displayProducts = function () {
                    var _this = this;
                    this.loadProducts();
                    var htmlToDisplay = "<th>Product Name</th><th>Price</th>";
                    this.productList.forEach(function (product) {
                        htmlToDisplay += "<tr><td>" + product.name + "</td><td>" + product.currentPrice(_this.currentCustomer) + "</td></tr>";
                    });
                    $("#productsTable")[0].innerHTML = htmlToDisplay;
                };
                IndexVm.prototype.loadProducts = function () {
                    this.productList.length = 0;
                    this.productList.push(new Product_1.Product("Product 1", 100.00));
                    this.productList.push(new Product_1.Product("Product 2", 200.00));
                    this.productList.push(new Product_1.Product("Product 3", 300.00));
                    this.productList.push(new Product_1.Product("Product 4", 400.00));
                    this.productList.push(new Product_1.Product("Product 5", 500.00));
                    this.productList.push(new Product_1.Product("Product 6", 600.00));
                    this.productList.push(new Product_1.Product("Product 7", 700.00));
                    this.productList.push(new Product_1.Product("Product 8", 800.00));
                    this.productList.push(new Product_1.Product("Product 9", 900.00));
                    this.productList.push(new Product_1.Product("Product 10", 1000.00));
                };
                IndexVm.prototype.setWelcomeMsg = function () {
                    var msg = "Welcome " + this.currentCustomer.name;
                    $("#customerName")[0].innerText = msg;
                };
                return IndexVm;
            }());
            exports_1("IndexVm", IndexVm);
            exports_1("indexVmInstance", indexVmInstance = new IndexVm());
            $(document).ready(function () {
                indexVmInstance.setWelcomeMsg();
                indexVmInstance.displayProducts();
            });
            $('#loginBronze').click(function () {
                indexVmInstance.loginBronze();
            });
            $('#loginSilver').click(function () {
                indexVmInstance.loginSilver();
            });
            $('#loginGold').click(function () {
                indexVmInstance.loginGold();
            });
        }
    };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiSW5kZXhWTS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9JbmRleFZNLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1lBU0E7Z0JBQUE7b0JBRVksb0JBQWUsR0FBYyxJQUFJLHFDQUFpQixFQUFFLENBQUM7b0JBRXJELGdCQUFXLEdBQW9CLElBQUksS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDO2dCQW9EeEQsQ0FBQztnQkFsREcsNkJBQVcsR0FBWDtvQkFDSSxJQUFJLENBQUMsZUFBZSxHQUFHLElBQUksK0JBQWMsRUFBRSxDQUFDO29CQUM1QyxJQUFJLENBQUMsYUFBYSxFQUFFLENBQUM7b0JBQ3JCLElBQUksQ0FBQyxlQUFlLEVBQUUsQ0FBQztnQkFDM0IsQ0FBQztnQkFFRCw2QkFBVyxHQUFYO29CQUNJLElBQUksQ0FBQyxlQUFlLEdBQUcsSUFBSSwrQkFBYyxFQUFFLENBQUM7b0JBQzVDLElBQUksQ0FBQyxhQUFhLEVBQUUsQ0FBQztvQkFDckIsSUFBSSxDQUFDLGVBQWUsRUFBRSxDQUFDO2dCQUMzQixDQUFDO2dCQUVELDJCQUFTLEdBQVQ7b0JBQ0ksSUFBSSxDQUFDLGVBQWUsR0FBRyxJQUFJLDJCQUFZLEVBQUUsQ0FBQztvQkFDMUMsSUFBSSxDQUFDLGFBQWEsRUFBRSxDQUFDO29CQUNyQixJQUFJLENBQUMsZUFBZSxFQUFFLENBQUM7Z0JBQzNCLENBQUM7Z0JBRUQsaUNBQWUsR0FBZjtvQkFBQSxpQkFVQztvQkFURyxJQUFJLENBQUMsWUFBWSxFQUFFLENBQUM7b0JBRXBCLElBQUksYUFBYSxHQUFXLHFDQUFxQyxDQUFDO29CQUVsRSxJQUFJLENBQUMsV0FBVyxDQUFDLE9BQU8sQ0FBQyxVQUFBLE9BQU87d0JBQzVCLGFBQWEsSUFBSSxhQUFXLE9BQU8sQ0FBQyxJQUFJLGlCQUFZLE9BQU8sQ0FBQyxZQUFZLENBQUMsS0FBSSxDQUFDLGVBQWUsQ0FBQyxlQUFZLENBQUM7b0JBQy9HLENBQUMsQ0FBQyxDQUFDO29CQUVILENBQUMsQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLFNBQVMsR0FBRyxhQUFhLENBQUM7Z0JBQ3JELENBQUM7Z0JBRU8sOEJBQVksR0FBcEI7b0JBQ0ksSUFBSSxDQUFDLFdBQVcsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDO29CQUU1QixJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxJQUFJLGlCQUFPLENBQUMsV0FBVyxFQUFFLE1BQU0sQ0FBQyxDQUFDLENBQUM7b0JBQ3hELElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLElBQUksaUJBQU8sQ0FBQyxXQUFXLEVBQUUsTUFBTSxDQUFDLENBQUMsQ0FBQztvQkFDeEQsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsSUFBSSxpQkFBTyxDQUFDLFdBQVcsRUFBRSxNQUFNLENBQUMsQ0FBQyxDQUFDO29CQUN4RCxJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxJQUFJLGlCQUFPLENBQUMsV0FBVyxFQUFFLE1BQU0sQ0FBQyxDQUFDLENBQUM7b0JBQ3hELElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLElBQUksaUJBQU8sQ0FBQyxXQUFXLEVBQUUsTUFBTSxDQUFDLENBQUMsQ0FBQztvQkFDeEQsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsSUFBSSxpQkFBTyxDQUFDLFdBQVcsRUFBRSxNQUFNLENBQUMsQ0FBQyxDQUFDO29CQUN4RCxJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxJQUFJLGlCQUFPLENBQUMsV0FBVyxFQUFFLE1BQU0sQ0FBQyxDQUFDLENBQUM7b0JBQ3hELElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLElBQUksaUJBQU8sQ0FBQyxXQUFXLEVBQUUsTUFBTSxDQUFDLENBQUMsQ0FBQztvQkFDeEQsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsSUFBSSxpQkFBTyxDQUFDLFdBQVcsRUFBRSxNQUFNLENBQUMsQ0FBQyxDQUFDO29CQUN4RCxJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxJQUFJLGlCQUFPLENBQUMsWUFBWSxFQUFFLE9BQU8sQ0FBQyxDQUFDLENBQUM7Z0JBQzlELENBQUM7Z0JBRUQsK0JBQWEsR0FBYjtvQkFDSSxJQUFJLEdBQUcsR0FBRyxhQUFXLElBQUksQ0FBQyxlQUFlLENBQUMsSUFBTSxDQUFDO29CQUNqRCxDQUFDLENBQUMsZUFBZSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsU0FBUyxHQUFHLEdBQUcsQ0FBQztnQkFDMUMsQ0FBQztnQkFFTCxjQUFDO1lBQUQsQ0FBQyxBQXhERCxJQXdEQzs7WUFFRCw2QkFBVyxlQUFlLEdBQUcsSUFBSSxPQUFPLEVBQUUsRUFBQztZQUUzQyxDQUFDLENBQUMsUUFBUSxDQUFDLENBQUMsS0FBSyxDQUFDO2dCQUNkLGVBQWUsQ0FBQyxhQUFhLEVBQUUsQ0FBQztnQkFDaEMsZUFBZSxDQUFDLGVBQWUsRUFBRSxDQUFDO1lBQ3RDLENBQUMsQ0FBQyxDQUFDO1lBRUgsQ0FBQyxDQUFDLGNBQWMsQ0FBQyxDQUFDLEtBQUssQ0FBRTtnQkFDckIsZUFBZSxDQUFDLFdBQVcsRUFBRSxDQUFDO1lBQ2xDLENBQUMsQ0FBQyxDQUFDO1lBRUgsQ0FBQyxDQUFDLGNBQWMsQ0FBQyxDQUFDLEtBQUssQ0FBQztnQkFDcEIsZUFBZSxDQUFDLFdBQVcsRUFBRSxDQUFDO1lBQ2xDLENBQUMsQ0FBQyxDQUFDO1lBRUgsQ0FBQyxDQUFDLFlBQVksQ0FBQyxDQUFDLEtBQUssQ0FBQztnQkFDbEIsZUFBZSxDQUFDLFNBQVMsRUFBRSxDQUFDO1lBQ2hDLENBQUMsQ0FBQyxDQUFDO1FBS0gsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEN1c3RvbWVyQmFzZSB9IGZyb20gXCIuL0N1c3RvbWVyQmFzZVwiO1xyXG5pbXBvcnQgeyBJQ3VzdG9tZXIgfSBmcm9tIFwiLi9JQ3VzdG9tZXJcIjtcclxuaW1wb3J0IHsgQ3VzdG9tZXJCcm9uemUgfSBmcm9tIFwiLi9DdXN0b21lckJyb256ZVwiO1xyXG5pbXBvcnQgeyBDdXN0b21lckdvbGQgfSBmcm9tIFwiLi9DdXN0b21lckdvbGRcIlxyXG5pbXBvcnQgeyBDdXN0b21lclNpbHZlciB9IGZyb20gXCIuL0N1c3RvbWVyU2lsdmVyXCI7XHJcbmltcG9ydCB7IEN1c3RvbWVyQW5vbnltb3VzIH0gZnJvbSBcIi4vQ3VzdG9tZXJBbm9ueW1vdXNcIjtcclxuaW1wb3J0IHsgSVByb2R1Y3QgfSBmcm9tIFwiLi9JUHJvZHVjdFwiO1xyXG5pbXBvcnQgeyBQcm9kdWN0IH0gZnJvbSBcIi4vUHJvZHVjdFwiO1xyXG5cclxuZXhwb3J0IGNsYXNzIEluZGV4Vm0ge1xyXG5cclxuICAgIHByaXZhdGUgY3VycmVudEN1c3RvbWVyOiBJQ3VzdG9tZXIgPSBuZXcgQ3VzdG9tZXJBbm9ueW1vdXMoKTtcclxuXHJcbiAgICBwcml2YXRlIHByb2R1Y3RMaXN0OiBBcnJheTxJUHJvZHVjdD4gPSBuZXcgQXJyYXkoMCk7XHJcblxyXG4gICAgbG9naW5Ccm9uemUoKSB7XHJcbiAgICAgICAgdGhpcy5jdXJyZW50Q3VzdG9tZXIgPSBuZXcgQ3VzdG9tZXJCcm9uemUoKTtcclxuICAgICAgICB0aGlzLnNldFdlbGNvbWVNc2coKTtcclxuICAgICAgICB0aGlzLmRpc3BsYXlQcm9kdWN0cygpO1xyXG4gICAgfVxyXG5cclxuICAgIGxvZ2luU2lsdmVyKCkge1xyXG4gICAgICAgIHRoaXMuY3VycmVudEN1c3RvbWVyID0gbmV3IEN1c3RvbWVyU2lsdmVyKCk7XHJcbiAgICAgICAgdGhpcy5zZXRXZWxjb21lTXNnKCk7XHJcbiAgICAgICAgdGhpcy5kaXNwbGF5UHJvZHVjdHMoKTtcclxuICAgIH1cclxuXHJcbiAgICBsb2dpbkdvbGQoKSB7XHJcbiAgICAgICAgdGhpcy5jdXJyZW50Q3VzdG9tZXIgPSBuZXcgQ3VzdG9tZXJHb2xkKCk7XHJcbiAgICAgICAgdGhpcy5zZXRXZWxjb21lTXNnKCk7XHJcbiAgICAgICAgdGhpcy5kaXNwbGF5UHJvZHVjdHMoKTtcclxuICAgIH1cclxuXHJcbiAgICBkaXNwbGF5UHJvZHVjdHMoKSB7XHJcbiAgICAgICAgdGhpcy5sb2FkUHJvZHVjdHMoKTtcclxuXHJcbiAgICAgICAgbGV0IGh0bWxUb0Rpc3BsYXk6IHN0cmluZyA9IFwiPHRoPlByb2R1Y3QgTmFtZTwvdGg+PHRoPlByaWNlPC90aD5cIjtcclxuXHJcbiAgICAgICAgdGhpcy5wcm9kdWN0TGlzdC5mb3JFYWNoKHByb2R1Y3QgPT4ge1xyXG4gICAgICAgICAgICBodG1sVG9EaXNwbGF5ICs9IGA8dHI+PHRkPiR7cHJvZHVjdC5uYW1lfTwvdGQ+PHRkPiR7cHJvZHVjdC5jdXJyZW50UHJpY2UodGhpcy5jdXJyZW50Q3VzdG9tZXIpfTwvdGQ+PC90cj5gO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICAkKFwiI3Byb2R1Y3RzVGFibGVcIilbMF0uaW5uZXJIVE1MID0gaHRtbFRvRGlzcGxheTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGxvYWRQcm9kdWN0cygpIHtcclxuICAgICAgICB0aGlzLnByb2R1Y3RMaXN0Lmxlbmd0aCA9IDA7XHJcblxyXG4gICAgICAgIHRoaXMucHJvZHVjdExpc3QucHVzaChuZXcgUHJvZHVjdChcIlByb2R1Y3QgMVwiLCAxMDAuMDApKTtcclxuICAgICAgICB0aGlzLnByb2R1Y3RMaXN0LnB1c2gobmV3IFByb2R1Y3QoXCJQcm9kdWN0IDJcIiwgMjAwLjAwKSk7XHJcbiAgICAgICAgdGhpcy5wcm9kdWN0TGlzdC5wdXNoKG5ldyBQcm9kdWN0KFwiUHJvZHVjdCAzXCIsIDMwMC4wMCkpO1xyXG4gICAgICAgIHRoaXMucHJvZHVjdExpc3QucHVzaChuZXcgUHJvZHVjdChcIlByb2R1Y3QgNFwiLCA0MDAuMDApKTtcclxuICAgICAgICB0aGlzLnByb2R1Y3RMaXN0LnB1c2gobmV3IFByb2R1Y3QoXCJQcm9kdWN0IDVcIiwgNTAwLjAwKSk7XHJcbiAgICAgICAgdGhpcy5wcm9kdWN0TGlzdC5wdXNoKG5ldyBQcm9kdWN0KFwiUHJvZHVjdCA2XCIsIDYwMC4wMCkpO1xyXG4gICAgICAgIHRoaXMucHJvZHVjdExpc3QucHVzaChuZXcgUHJvZHVjdChcIlByb2R1Y3QgN1wiLCA3MDAuMDApKTtcclxuICAgICAgICB0aGlzLnByb2R1Y3RMaXN0LnB1c2gobmV3IFByb2R1Y3QoXCJQcm9kdWN0IDhcIiwgODAwLjAwKSk7XHJcbiAgICAgICAgdGhpcy5wcm9kdWN0TGlzdC5wdXNoKG5ldyBQcm9kdWN0KFwiUHJvZHVjdCA5XCIsIDkwMC4wMCkpO1xyXG4gICAgICAgIHRoaXMucHJvZHVjdExpc3QucHVzaChuZXcgUHJvZHVjdChcIlByb2R1Y3QgMTBcIiwgMTAwMC4wMCkpO1xyXG4gICAgfVxyXG5cclxuICAgIHNldFdlbGNvbWVNc2coKSB7XHJcbiAgICAgICAgdmFyIG1zZyA9IGBXZWxjb21lICR7dGhpcy5jdXJyZW50Q3VzdG9tZXIubmFtZX1gO1xyXG4gICAgICAgICQoXCIjY3VzdG9tZXJOYW1lXCIpWzBdLmlubmVyVGV4dCA9IG1zZztcclxuICAgIH1cclxuXHJcbn1cclxuXHJcbmV4cG9ydCBsZXQgaW5kZXhWbUluc3RhbmNlID0gbmV3IEluZGV4Vm0oKTtcclxuXHJcbiQoZG9jdW1lbnQpLnJlYWR5KCgpID0+IHtcclxuICAgIGluZGV4Vm1JbnN0YW5jZS5zZXRXZWxjb21lTXNnKCk7XHJcbiAgICBpbmRleFZtSW5zdGFuY2UuZGlzcGxheVByb2R1Y3RzKCk7XHJcbn0pO1xyXG5cclxuJCgnI2xvZ2luQnJvbnplJykuY2xpY2soIGZ1bmN0aW9uKCkge1xyXG4gICAgaW5kZXhWbUluc3RhbmNlLmxvZ2luQnJvbnplKCk7XHJcbn0pO1xyXG5cclxuJCgnI2xvZ2luU2lsdmVyJykuY2xpY2soZnVuY3Rpb24gKCkge1xyXG4gICAgaW5kZXhWbUluc3RhbmNlLmxvZ2luU2lsdmVyKCk7XHJcbn0pO1xyXG5cclxuJCgnI2xvZ2luR29sZCcpLmNsaWNrKGZ1bmN0aW9uICgpIHtcclxuICAgIGluZGV4Vm1JbnN0YW5jZS5sb2dpbkdvbGQoKTtcclxufSk7XHJcblxyXG5cclxuXHJcblxyXG4iXX0=