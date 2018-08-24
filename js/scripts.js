// Business End
function Pizza(size, toppings) {
  this.size = size;
  this.toppings = toppings;
}

Pizza.prototype.cost = function() {
  var sizePrice;
  if (this.size === "small") {
    sizePrice = 5;
  } else if (this.size === "medium") {
    sizePrice = 10;
  } else {
    sizePrice = 20;
  }
  $("#orderItems").text("$" + sizePrice + " for a " + this.size + " pizza")
  // totalPriceArry.push(sizePrice);
}

Pizza.prototype.list = function() {
  var toppingsAmount = this.toppings;
  var toppingsPrice;
  if (toppingsAmount.length === 0) {
    toppingsPrice = 0;
  } else if (toppingsAmount.length === 1) {
    toppingsPrice = 2;
  } else if (toppingsAmount.length === 2) {
    toppingsPrice = 4;
  } else if (toppingsAmount.length === 3) {
    toppingsPrice = 6;
  } else if (toppingsAmount.length === 4) {
    toppingsPrice = 8;
  }
  $("#orderToppings").text(" and $" + toppingsPrice + " added for " + toppingsAmount.length + " toppings")
  // totalPriceArry.push(toppingsPrice);
}

// var totalPriceArry = [];
// console.log(totalPriceArry)
// var sum = [1, 2, 4].reduce(add, 0);
//
// function add(a, b) {
//   return a + b;
// }
//
// console.log(sum);
//


// User Interface
$(document).ready(function() {

  $("#startOrder").click(function(){
    $("form#orderPizza").show();
  });

  $("form#orderPizza").submit(function(event) {
    event.preventDefault();

    var orderSize = $("#orderSize").val();
    var toppingsArry = [];

    var order = new Pizza(orderSize, toppingsArry);

    $("input:checkbox[name=orderToppings]:checked").each(function(){
      var orderToppings = $(this).val();
      toppingsArry.push(orderToppings);
    });
    $("#orderResult").show()
    order.cost();
    order.list();

    console.log(order.size);
    console.log(order.toppings);
  });
});
