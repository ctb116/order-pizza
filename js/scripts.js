// Business End
function Pizza(size, toppings) {
  this.size = size;
  this.toppings = toppings;
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
