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
    console.log(orderSize);

    $("input:checkbox[name=orderToppings]:checked").each(function(){
      var orderToppings = $(this).val();

      var order = new Pizza(orderSize, orderToppings);

                console.log(order.toppings)
    });
  });
});
