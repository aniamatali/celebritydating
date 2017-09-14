$(document).ready(function() {
  $("form#form").submit(function(event) {

    var age = parseInt($("input#age").val());
    var gender = $("select#gender").val();
      if (age < 30 && gender === "female") {
        $("#male1").show();
        $("#male2").hide();
        $("#female1").hide();
        $("#female2").hide();
      } else if (age >= 30 && gender === "female") {
        $("#male2").show();
        $("#male1").hide();
        $("#female1").hide();
        $("#female2").hide();
      } else if (age < 30 && gender === "male") {
        $("#female1").show();
        $("#male1").hide();
        $("#male2").hide();
        $("#female2").hide();
      } else if (age >= 30 && gender === "male") {
        $("#female2").show();
        $("#male1").hide();
        $("#female1").hide();
        $("#male2").hide();
      }

      event.preventDefault();



      });
      $("#color").change(function()  {
        var favoriteColor = $(this).val(); // instead of putting (this) you can also put (input#color).val();
        $(".celebrities").css("background-color",favoriteColor);


  });



});
