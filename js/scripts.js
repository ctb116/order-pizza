// Business End
function Pizza(size, toppings) {
  this.size = size;
  this.toppings = toppings;
}

Pizza.prototype.cost = function() {
  if (this.size === "small") {
    $("#orderResult").text("$5 for small");
  } else if (this.size === "medium") {
    $("#orderResult").text("$10 for medium");
  } else {
    $("#orderResult").text("$20 for large");
  }
}

Pizza.prototype.toppingsSelected = function() {
  console.log(this.toppings.toString());
  // $("#orderResult2").text([this.toppings]);
  // return this.toppings;
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
    order.cost();
    order.toppingsSelected();

    console.log(order.size);
    console.log(order.toppings);

    $("input:checkbox[name=orderToppings]:checked").each(function(){
      var orderToppings = $(this).val();
      toppingsArry.push(orderToppings);
    });
  });
});
