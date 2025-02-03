// Task 1 - Product Price Management Scenario: Online Store You are managing a product pricing system
let price = [10, 8, 12, 19, 15];
price.push(13);
price.shift(0);
console.log(price);


// Task 2 - Modifying Customer Orders Scenario: Order List You are processing customer orders and need to update order quantities.
let order = [1, 2, 3, 4, 5];
order[2] += 2;
let totalOrder = 0;
for (let i = 0; i < order.length; i++) {
  totalOrder += order[i]
};
console.log(order);


//Task 3 - Employee Performance Tracking Scenario: HR System You are tracking employee performance data.
let employee = {
    name: "Luka Doncic",
    role: "Point Guard",
    PerformanceScore: 95,
    isActive: true
};
employee.performanceScore = 96;
employee.promotionEligible = employee.performanceScore >= 96;
console.log(employee);


//Task 4 - Customer Feedback Records Scenario: Feedback Management You are collecting customer feedback data.
let feedback = [
    { customerName: "Lebron", feedbackText: "The Best!", rating: 5 },
    { customerName: "Russel", feedbackText: "Very disappointed.", rating: 1 },
    { customerName: "Anthony", feedbackText: "Great experience!", rating: 4 }
  ];
  feedback.push({ customerName: "Austin", feedbackText: "Good, but there is improvement.", rating: 3 });
  console.log(feedback);


// Task 5 - Inventory Management System Scenario: Stock Analysis You are developing a system to track inventory details.
let inventory = {
    itemName: "Wilson Basketball",
    stockCount: 100,
    price: 199,
calculateTotalValue: function() {
    return this.stockCount * this.price;
  }
};
console.log(inventory.calculateTotalValue());