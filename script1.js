// task 1
function swapCase(inputString) {
    var output = '';
    for (var i = 0; i < inputString.length; i++) {
      var char = inputString[i];
      if (char === char.toUpperCase()) {
        output += char.toLowerCase();
      } else {
        output += char.toUpperCase();
      }
    }
    return output;
  }
  
  var inputString = "WebMaster";
  var output = swapCase(inputString);
  console.log(output);
  