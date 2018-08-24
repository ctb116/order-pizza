// Business End
function Pizza(size, toppings) {
  this.size = size;
  this.toppings = toppings;
}

Pizza.prototype.cost = function() {
  var sizePrice;
  if (this.size === "small") {
    sizePrice = "$5";
  } else if (this.size === "medium") {
    sizePrice = "$10";
  } else {
    sizePrice = "$20";
  }
  $("#orderItems").text(sizePrice + " for a " + this.size + " pizza")
}

// Pizza.prototype.list = function() {
//   var toppingsAmount = this.toppings;
//   console.log(toppingsAmount.length);
//   if (toppingsAmount.length === 0) {
//     $("#orderToppings").text(" and $0 added for no toppings")
//   } else if (toppingsAmount.length === 1) {
//     $("#orderToppings").text(" and $2 added for 1 topping")
//   } else if (toppingsAmount.length === 2) {
//     $("#orderToppings").text(" and $4 added for 2 toppings")
//   } else if (toppingsAmount.length === 3) {
//     $("#orderToppings").text(" and $6 added for 3 toppings")
//   } else if (toppingsAmount.length === 4) {
//     $("#orderToppings").text(" and $8 added for 4 toppings")
//   }
// }

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
}

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
