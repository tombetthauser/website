var font = 0

var editOpen = true

var fontTitleSize = 1
var fontTextSize = 2

var userImage = ""

var loadFile = function(i) {
  var output = document.getElementById('imagePreview');
  output.src = URL.createObjectURL(i.target.files[0]);
  userImage = URL.createObjectURL(i.target.files[0]);
};


// --------------- script ------------------------------------------------------


$("#imagePreview").hide()

$("#editContainer").hide()

$("#editExplainer").on("click", function(){
  $("#editContainer").fadeToggle(0);
  $("#editExplainer").hide();
})

$("#toggleLayoutButton").on("click", function(){
  $("#container").toggleClass("layoutCenter");
})

$(document).dblclick(function(){
  $("#editContainer").fadeToggle(0);
  $("#editExplainer").show();
})

// $(document).keypress(function(k){
//   if(k.keyCode == 27) {
//     $("#editContainer").fadeToggle(0);
//     $("#editExplainer").show();
//   }
// })

// $("html").keypress(function(k){
//   if(k.keyCode == 27) {
//     $("#editContainer").fadeToggle(0);
//     $("#editExplainer").show();
//   }
// })

// $("html").keypress(function(k){
//   if(k.keyCode == 69) {
//     $("#editContainer").fadeToggle(0);
//     $("#editExplainer").show();
//   }
// })

$(".fas.fa-paint-roller").click(function(){
  $("#editContainer").fadeToggle(0);
  editOpen = !editOpen;
    if (editOpen === true) {
      $("#editGearClosed").hide();
      $("#editGearOpen").show();
    } else {
      $("#editGearClosed").show();
      $("#editGearOpen").hide();
    }
})

$("#editTitleButton").click(function(){
  titleUpdate();
})

$("#editTitleInput").keypress(function(k){
  if(k.which === 13){
    titleUpdate();
  }
})

$("#toggleFontButton").on("click", function(){
  cycleFonts();
})

$("#toggleTitleSizeButton").on("click", function(){
  cycleTitleSize();
})

$("#addButton").click(function(){
  addContent();
})

$("#toggleTextSizeButton").click(function(){
  cycleTextSize();
})

$(".notAvailable").click(function(){
  alert("function not available");
})

// $("#imageInput").keypress(function(k){
//   if(k.which === 13){
//     addContent();
//   }
// })


// --------------- funtions ------------------------------------------------------


function titleUpdate() {
  var newTitle = $("#editTitleInput").val();
  $(".titleText").text(newTitle);
}

function clearFontSize() {
  $("#container").removeClass("fontSizeSml");
  $("#container").removeClass("fontSizeMed");
  $("#container").removeClass("fontSizeLrg");
  $("#container").removeClass("fontSizeXLrg");
}

function cycleFonts() {
  if(font === 2){
    font = 0;
  } else {
  font++;
  };
  if (font === 1) {
    $("#container").removeClass("fontSansSerif fontMonoSpace");
    $("#container").addClass("fontSansSerif");
  } else if (font === 2) {
    $("#container").removeClass("fontSansSerif fontMonoSpace");
    $("#container").addClass("fontMonoSpace");
  } else {
    $("#container").removeClass("fontSansSerif fontMonoSpace");
  };
}

function cycleTitleSize() {
  if(fontTitleSize === 4){
    fontTitleSize = 0;
  } else {
  fontTitleSize++;
  };
  if (fontTitleSize === 1) {
    $(".titleText").removeClass("fontSizeXSml, fontSizeSml fontSizeMed fontSizeLrg fontSizeXLrg");
    $(".titleText").addClass("fontSizeSml");
  } else if (fontTitleSize === 2) {
    $(".titleText").removeClass("fontSizeXSml, fontSizeSml fontSizeMed fontSizeLrg fontSizeXLrg");
    $(".titleText").addClass("fontSizeMed");
  } else if (fontTitleSize === 3) {
    $(".titleText").removeClass("fontSizeXSml, fontSizeSml fontSizeMed fontSizeLrg fontSizeXLrg");
    $(".titleText").addClass("fontSizeLrg");
  } else if (fontTitleSize === 4) {
    $(".titleText").removeClass("fontSizeXSml, fontSizeSml fontSizeMed fontSizeLrg fontSizeXLrg");
    $(".titleText").addClass("fontSizeXLrg");
  } else {
    $(".titleText").removeClass("fontSizeXSml, fontSizeSml fontSizeMed fontSizeLrg fontSizeXLrg");
    $(".titleText").addClass("fontSizeXSml");
  };
}

function cycleTextSize() {
  if(fontTextSize === 4){
    fontTextSize = 0;
  } else {
  fontTextSize++;
  };
  if (fontTextSize === 1) {
    $(".imageText").removeClass("fontSizeXXXSml fontSizeXXSml fontSizeXSml fontSizeSml fontSizeMed");
    $(".imageText").addClass("fontSizeXXSml");
  } else if (fontTextSize === 2) {
    $(".imageText").removeClass("fontSizeXXXSml fontSizeXXSml fontSizeXSml fontSizeSml fontSizeMed");
    $(".imageText").addClass("fontSizeXSml");
  } else if (fontTextSize === 3) {
    $(".imageText").removeClass("fontSizeXXXSml fontSizeXXSml fontSizeXSml fontSizeSml fontSizeMed");
    $(".imageText").addClass("fontSizeSml");
  } else if (fontTextSize === 4) {
    $(".imageText").removeClass("fontSizeXXXSml fontSizeXXSml fontSizeXSml fontSizeSml fontSizeMed");
    $(".imageText").addClass("fontSizeMed");
  } else {
    $(".imageText").removeClass("fontSizeXXXSml fontSizeXXSml fontSizeXSml fontSizeSml fontSizeMed");
    $(".imageText").addClass("fontSizeXXXSml");
  };
}

function addContent() {
  var newText = $("#newTextInput").val();
  // $("#newTextInput").val("");
  // $("#imageInput").val("");
  $("input").val("");
  $("#userContainer").prepend(
      "<img class='marginSml' src="
    + "\'" + userImage + "\'"
    + "><div class='imageText marginSml fontSizeXSml'>"
    // + "<button class='edit'><span class='trash'><i class='far fa-trash-alt'></i></span></button>"
    + newText
    + "</div>"
  ) 
}