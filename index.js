var slider = document.getElementById("myRange");
var output = document.getElementById("lblRange");
// var word = document.getElementById("lblWord");
var btnWord = document.getElementById("btnGenerateWord");
var btnChangeColor = document.getElementById("btnChangeColor");
var color;
output.innerHTML = slider.value; // Display the default slider value

$(document).ready(function () {
  color = "";
  randomHSL();
  $("#divLabel").append(
    `<span class="spanText" style="Color: ${color}; font-family:'Impact','Charcoal',sans-serif;">Welcome<span/>`
  );
});

// Update the current slider value (each time you drag the slider handle)
slider.oninput = function () {
  output.innerHTML = this.value;
  //   word.style.fontSize = `${this.value}pt`;
  $(".spanText").css("font-size", () => {
    return `${this.value}pt`;
  });
};

$("#btnGenerateWord").on("click", () => {
  // $("#lblWord").text("HOLA")
  //   $("#lblWord").text($("#inpWord").val());
  // $("btnWord").text($("inpWord").value());
  wordGenerator();
});

$("#btnSaveWord").on("click", () => {
  $("#divSaved").append(
    `<span class="spanText" style="Color: ${color}" >${$(
      "#divLabel"
    ).text()}<span/><br/>`
  );
});

$("#selFontWord").change((e) => {
  // valueText=""
  console.log("target", e.target.value);
  // var text = document.getElementsByClassName("spanText")
  var text = document.getElementById("divLabel");
  var textSaved = document.getElementById("divSaved");
  // text[0].style.fontFamily = "Impact,Charcoal,sans-serif"
  text.style.fontFamily = e.target.value;
  textSaved.style.fontFamily = e.target.value;
  // $(".spanText").css("font-family", () => {
  //     return `${e.target.value}`;
  //   });
});

$("#btnClear").on("click", () => {
  $("#divLabel").empty();
  $("#divSaved").empty();
});


function wordGenerator() {
  var firstWord = $("#inpWord").val();
  var secondWord;
  $("#divLabel").empty();

  var e = document.getElementById("checkBoxFrozen");
  var selected = e.checked;
  // console.log("style1", valueText.dataset.font)
  console.log("checked", selected);

if (!selected){
  for (let index = 0; index < firstWord.length; index++) {
    const _element = firstWord[index];
    color = "";
    // randomHSL();
    // randomRGB();
    generateGradient();
    $("#divLabel").append(
      `<span class="spanText" style="Color: ${color};background: ${color};
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;" id="spn${_element}">${_element}<span/>`
    );    
  }
}
else{
  $("#divLabel").append(
    `<span class="spanText" style="Color: ${color};background: url(https://s3-us-west-2.amazonaws.com/s.cdpn.io/209981/6963bbf342d87b3a2150bd8f59682b89.jpg);
    font-family:'frozen',serif !important;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;" id="spn${firstWord}">${firstWord}<span/>`
  );
}

  
  


  $(".spanText").css("font-size", () => {
    return `${slider.value}pt`;
  });

  //   firstWord.split().forEach((_element) => {
  //     $("#divLabel").append(
  //       `<span class="spanText" style="Color: ${randomHSL()}" id="spn${_element}">${_element}<span/>`
  //     );
  //   });
}

function randomHSL() {
  color = "hsla(" + ~~(360 * Math.random()) + "," + "70%," + "80%,1)";
}

$("#printPage").on("click", () => {
  window.print();
});

function randomRGB() {
  // var rand = Math.floor(Math.random() * 10);
  // color = "rgb(" + (215 - rand * 3) + "," + (185 - rand * 5) + "," + (185 - rand * 10) + " )";
  // $("body").css("background-color", colorQ);

  var base = 255,
    min = 56,
    max = 125;
  var red = base - random(min, max);
  var green = base - random(min, max);
  var blue = base - random(min, max);

  color = `rgb(${red}, ${green}, ${blue})`;
}

function random(min, max) {
  return Math.random() * (max - min + 1) + min;
  // return Math.random().nextInt(max - min + 1) + min;
}

function generateGradient() {
  var hexValues = [
    "0",
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "a",
    "b",
    "c",
    "d",
    "e",
  ];

  function populate(a) {
    for (var i = 0; i < 6; i++) {
      var x = Math.round(Math.random() * 14);
      var y = hexValues[x];
      a += y;
    }
    return a;
  }

  var newColor1 = populate("#");
  var newColor2 = populate("#");
  var angle = Math.round(Math.random() * 360);

  var gradient =
    "linear-gradient(" + angle + "deg, " + newColor1 + ", " + newColor2 + ")";

  color = gradient;

  //   document.getElementById("container").style.background = gradient;
  //   document.getElementById("output").innerHTML = gradient;
}
