var price;
function Getpizza( name,size,crust,topping){
  this.name = name;
  this.size = size;
  this.crust = crust;
  this.topping = topping;
}
Getpizza.prototype.Getcost


$(document).ready(function(){
  $("button.proceed").click(function(){
    $("button.proceed").hide();
    $("div.choise").show();
  });
  $("button.proceed").click(function(event){
   let pname = $(".name option:selected").val();
   let psize = $("#size option:selected").val();
   let pcrust = $("#crust option:selected").val();
   let ptopping = $("#topping option:selected").val();

   var newOrder = new Getpizza(pname, psize, pcrust,ptopping);
   console.log(newOrder);
   $(".name option:selected").val("");
   $("#size option:selected").val("");
   $("#crust option:selected").val("");
   $("#topping option:selected").val("");
   $("#pizzaname").append("Pizza Name - "+newOrder.name);
   $("#pizzasize").append("Pizza size - "+newOrder.size);
   $("#pizzacrust").append("Pizza Crust - "+newOrder.crust);
   $("#pizzatopping").append("Pizza Toppings - "+newOrder.topping);


   switch(psize){
     case "large":
        price = 1200;
        console.log(price);
      break;
      case "medium":
        price = 850;
        console.log("The price is "+price);
      break;
      case "small":
        price = 600;
        console.log(price);
      default:
        console.log("error");
     
   }
   
   event.preventDefault();
  });

  
});
