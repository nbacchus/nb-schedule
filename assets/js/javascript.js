//link current time and day with moment.js
var currentTime = moment().format("MMMM Do YYYY");
$("#currentDay").text(currentTime)
var currentHour = moment().hours();
console.log(currentHour);

//checks current time to change color
var timeReader =  document.querySelectorAll(".hour")
console.log(timeReader)
timeReader.forEach(timeBlock => {
    var timeID = timeBlock.getAttribute("id");
    timeID = parseInt(timeID);
    console.log(timeID);

        if (timeID == currentHour) {
            $(this).addClass("present");
            $(this).children(".description").addClass("white-text");
          } else if (timeID < currentHour) {
            $(this).removeClass("present");
            $(this).addClass("future");
          } else if (timeID > currentHour) {
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