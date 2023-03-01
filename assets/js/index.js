function spawnBlock()
{
    // Adding BS to spawned blocks.
    $iBlock = $("<div>").addClass("row py-1");

    $iTime = $("<div>").addClass("col-2 py-3 bg-warning").text("hello");

    $iText = $("<div>").addClass("col-8 py-3 bg-secondary").text("hello");

    $iLock = $("<div>").addClass("col-2 py-3 bg-warning").text("hello");
// Appending them to each other.
    $iBlock.append($iTime, $iText, $iLock);

    $("#planner").append($iBlock);
}
// Do this 4 times
for (let i = 0; i < 4; i++) {
    spawnBlock();
  }