var text_Hour = 9;
var hour_after = ":00 am";

var storedBlocks = [];

function spawnBlock(iterations) {
  if (!iterations) {
    iterations = 1;
  }
  for (var i = 0; i < iterations; i++) {
    var text_time = text_Hour + hour_after;
    $iBlock = $("<div>").addClass("row py-1");
    $iTimeText = $("<h5>").addClass("text-center").text(text_time);
    $iTimeDiv = $("<div>")
      .addClass("col-2 py-3 bg-light align-middle")
      .append($iTimeText);
    // Append the "text_time" <h5> element to this new <div>
    $iTextDiv = $("<textarea>")
      .addClass("col-8 py-3 bg-secondary overflow-auto")
      .text("")
      .attr("id", text_time);
    // Set the text of the <textarea> to an empty string
    // Set the "id" attribute of the <textarea> to "text_time"
    $iLockIcon = $("<span>").addClass("lock");
    $iLockDiv = $("<div>")
      .addClass("col-1 py-3 lock-container border border-primary")
      .append($iLockIcon);

    $iLockIcon.toggleClass("unlocked");
    $iBlock.append($iTimeDiv, $iTextDiv, $iLockDiv);

    $("#planner").append($iBlock);

    hourTextIncrease();
  }
}
// Check if "text_Hour" is equal to 12
// If it is, set "text_Hour" to 1 and change "hour_after" to ":00 pm"
// If it's not, increment "text_Hour" by 1
function hourTextIncrease() {
  if (text_Hour == 12) {
    text_Hour = 1;
    hour_after = ":00 pm";
  } else {
    text_Hour++;
  }
}
spawnBlock(14);
DisplayDate("LLLL");
function DisplayDate(pFormat) {
  // Create a new variable named "date" using the moment.js library to format the current date
  var date = moment().format(pFormat);
  $("#current-date").text(date);
  // Set the text of the element with the ID "current-date" to the "date" variable
}
$(".lock").click(function () {
  $(this).toggleClass("unlocked");

  $iTextArea = $($(this).parent().parent().children()[1]);
  // Get the value of the <textarea> element and create a new variable named "iInput"
  iInput = $iTextArea.val();
  // Get the "id" attribute of the <textarea> element and create a new variable named "iID"

  iID = $iTextArea.attr("id");
  // Create a new object named "iStoredBlock" with properties "id" and "input" set to the "iID" and "iInput" variables
  iStoredBlock = {
    id: iID,
    input: iInput,
  };
  // Loop through the "storedBlocks" array and remove the object with an "id" property that matches "iID"
  // If no matching object is found, push the "iStoredBlock" object to the "storedBlocks" array
  for (var i = 0; i < storedBlocks.length; i++) {
    if (storedBlocks[i].id === iStoredBlock.id) {
      storedBlocks.splice(i, 1);

      return null;
    }
  }

  storedBlocks.push(iStoredBlock);

  console.log(storedBlocks);
});
