//link current time and day with moment.js
var currentTime = moment().format("MMMM Do YYYY");
$("#currentDay").text(currentTime)
var currentHour = moment().hours();
console.log(currentHour)

//checks current time to change color
var timeReader =  document.getElementsByClassName("hour")
timeReader.forEach(timeBlock => {
    var timeID = timeBlock.getAttribute("id")
    timeID = parseInt(timeID)
    console.log(timeID)
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
   var storage = localStorage.getItem(timeID)
console.log(storage)
timeBlock.children[1].value = storage // children [1] is the textarea in each div//

 timeBlock.children[2].addEventListener("click", function(){ // children [2] is the the save btn//
    console.log("click")

    var text = timeBlock.children[1].value;
    console.log(text)
    localStorage.setItem(timeID , text)
});