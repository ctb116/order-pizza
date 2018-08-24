// Business End



// User Interface
$(document).ready(function() {

  $("form#orderPizza").submit(function(event) {
    event.preventDefault();
    $("input:checkbox[name=orderToppings]:checked").each(function(){
      var toppingsArry = $(this).val();
      console.log(toppingsArry);
    });

  });
});
