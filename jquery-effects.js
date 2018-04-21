$('p').click(function(){
  $(this).hide();
});

$(".red").on('click', function(){
  $(this).fadeOut(50000);
});

$("li").on("click", function(){
  console.log("this is li: ", $(this).html());
});

// $('input').click(function(){
//   $("input").toggle
// });

$("input").keyup(function(){
  var name = $(this).val()
  console.log(name);
  var fullThing = "Hello" + name;
  
  $("h1").text(fullThing);
});
$("#sign-up-form").submit(function(e){
e.preventDefault();
console.log('hey: ', $("input"))

  var username = $("input[name = 'username']").val();
  var password = $("input[name = 'password']").val();

  if(username === "i" && password === "i2") {
    console.log("you got it");
  } else {
    console.log("Error");
  }
  
});