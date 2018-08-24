// Business End
function Pizza(size, toppings) {
  this.size = size;
  this.toppings = toppings;
}

Pizza.prototype.cost = function() {
  if (this.size === "small") {
    console.log("$5 for small");
  } else if (this.size === "medium") {
    console.log("$10 for medium");
  } else {
    console.log("$20 for large");
  }
}


// User Interface
$(document).ready(function() {

  $("form#orderPizza").submit(function(event) {
    event.preventDefault();

    var orderSize = $("#orderSize").val();
    var toppingsArry = [];

    var order = new Pizza(orderSize, toppingsArry);
    console.log(order.size);
    console.log(order.toppings);

    $("input:checkbox[name=orderToppings]:checked").each(function(){
      var orderToppings = $(this).val();
      toppingsArry.push(orderToppings);
    });
  });
});
