var hourBoxText = 9;
var hour_Suffix = ":00am";

var blockData = [];
var blockData_NAME = "Block Data";

function setBGColor($div, currentTime, textTime) {
  var iTime_CUR = currentTime.split("");
  var iTime_TXT = textTime.split("");

  if (iTime_CUR[iTime_CUR.length - 2] !== iTime_TXT[iTime_TXT.length - 2]) {
    if (iTime_CUR[iTime_CUR.length - 2] > iTime_TXT[iTime_TXT.length - 2]) {
      console.log("p > a");
      $div.addClass("bg-secondary");
    } else {
      console.log("p < a");
      $div.addClass("bg-primary");
    }
  } else {
    console.log("same time of day");

    var t_CUR = parseHour(iTime_CUR);
    var t_TXT = parseHour(iTime_TXT);

    if (parseInt(t_CUR) > parseInt(t_TXT)) {
      console.log("current greater");
      $div.addClass("bg-secondary");
    } else if (parseInt(t_CUR) < parseInt(t_TXT)) {
      if (parseInt(t_TXT) === 12) {
        console.log("current greater");
        $div.addClass("bg-secondary");
      } else {
        console.log("current less");
        $div.addClass("bg-primary");
      }
    } else {
      $div.addClass("timecolor");
    }
  }
}
function spawnBlock(iterations) {
  if (!iterations) {
    iterations = 1;
  }

  var currentTime = GetCurrentHour("LT");

  for (var i = 0; i < iterations; i++) {
    var text_time = hourBoxText + hour_Suffix;

    $iBlock = $("<div>").addClass("row py-1");

    $iTimeText = $("<h5>").addClass("text-center").text(text_time);
    $iTimeDiv = $("<div>")
      .addClass("col-2 py-3 bg-warning align-middle")
      .append($iTimeText);

    $iTextDiv = $("<textarea>")
      .addClass("col-8 py-3 overflow-auto")
      .text("")
      .attr("id", text_time);
    setBGColor($iTextDiv, currentTime, text_time);

    $iLockIcon = $("<span>").addClass("lock");

    $iLockDiv = $("<div>")
      .addClass("col-1 py-3 lock-container border border-primary")
      .append($iLockIcon);

    $iLockIcon.toggleClass("unlocked");

    $iBlock.append($iTimeDiv, $iTextDiv, $iLockDiv);

    $("#planner").append($iBlock);

    incrementTextHour();
  }
}
// Check if "hour_Text" is equal to 12
// If it is, set "hour_Text" to 1 and change "hour_after" to ":00 pm"
// If it's not, increment "hour_Text" by 1
function incrementTextHour() {
  if (hourBoxText === 12) {
    hourBoxText = 1;
  } else if (hourBoxText === 11) {
    hour_Suffix = ":00pm";
    hourBoxText++;
  } else {
    hourBoxText++;
  }
}

function DisplayDate(pFormat) {
  var date = moment().format(pFormat);

  $("#current-date").text(date);
}
function GetCurrentHour(pFormat) {
  var time = moment().format(pFormat).toLowerCase();

  time = time.split("");

  var suffix = "";

  var hour = parseHour(time);

  console.log(hour);

  if (time[time.length - 2] === "p") {
    console.log("afternoon");
    suffix = ":00pm";
  } else {
    console.log("morning");
    suffix = ":00am";
  }

  console.log(hour + suffix);
  return hour + suffix;
}

function parseHour(pTime) {
  var i = 0;
  var iHour = "";

  while (pTime[i] !== ":" || i > 100) {
    iHour += pTime[i];
    i++;
  }

  return iHour;
}

function AlterStoredBlocks(pText, pID) {
  nBlock = {
    id: pID,
    input: pText.trim(),
  };

  for (var i = 0; i < blockData.length; i++) {
    if (blockData[i].id === nBlock.id) {
      blockData.splice(i, 1);

      localStorage.setItem(blockData_NAME, JSON.stringify(blockData));

      return null;
    }
  }

  blockData.push(nBlock);

  localStorage.setItem(blockData_NAME, JSON.stringify(blockData));
}

function getData() {
  if (localStorage.getItem(blockData_NAME)) {
    blockData = JSON.parse(localStorage.getItem(blockData_NAME));

    blockData.forEach((iBlock) => {
      iID = "#" + iBlock.id;

      $iBlock = $(document.getElementById(iBlock.id));

      $iBlock.val(iBlock.input);

      $iLock = $($iBlock.parent().children().children()[1]);

      $iLock.toggleClass("unlocked");
    });
  }
}
spawnBlock(9);
DisplayDate("LLLL");
getData();

$(".lock").click(function () {
  console.log("lock clicked");

  $(this).toggleClass("unlocked");

  $iTextArea = $($(this).parent().parent().children()[1]);

  iInput = $iTextArea.val();
  iID = $iTextArea.attr("id");

  AlterStoredBlocks(iInput, iID);
});
