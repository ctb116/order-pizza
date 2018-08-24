// Business End
function Pizza(size, toppings) {
  this.size = size;
  this.toppings = toppings;
}

Pizza.prototype.cost = function() {
  if (this.size === "small" && this.toppings[0] === "cheese") {
    $("#orderResult").text("$5 for small");
  } else if (this.size === "medium") {
    $("#orderResult").text("$10 for medium");
  } else {
    $("#orderResult").text("$20 for large");
  }
}
//
// function Call() {
//   this.topping
// }

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
    order.cost();
    console.log(order.size);
    console.log(order.toppings);

  });
});
