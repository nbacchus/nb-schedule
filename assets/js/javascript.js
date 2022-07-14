//link current time and day with moment.js
var currentTime = moment().format("MMM Do YY");
$("#currentDay").text(currentTime)
var currentHour = moment().format("HH");

//checks current time to change color
$(".timeReader").each(function () {
var timeReader = $(this).attr("id").split("-")[1];
    if (currentHour === timeReader) {
      $(this).addClass("present");
      $(this).children("description");
    } else if (currentHour < timeReader) {
      $(this).removeClass("present");
      $(this).addClass("future");
    } else if (currentHour > timeReader) {
      $(this).removeClass("future");
      $(this).addClass("past");
    }
});

//click on description to change
$(".col-9").on("click", function() {
    var text = $(this)
       .text()
       .trim();
   
     var textInput = $("<textarea>").addClass("col-9").val(text);
     $(this).replaceWith(textInput);

     textInput.trigger("focus");
   });

   //save in local storage
   $(".saveBtn").click(function (event) {
    event.preventDefault();
    var value = $(this).siblings(".time-block").val();
    var time = $(this).parent().attr("id").split("-")[1];
    localStorage.setItem(time, value);
  });