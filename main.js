$(document).on('ready', function() {
  var outerShell= $('<div class= "outerShell"></div>');
  var innerShell= $('<div class= "innerShell"></div>');
  var pmLabel= $('<div class= "pmLabel">PM</div>');
  var clockScreen= $('<div class= "clockScreen"></div>');
  var indicator= $('<div class= "indicator">*</div>');
  var clockText= $('<div class= "clockText">clockText</div>');
  var amLabel= $('<div class= "amLabel">AM                              53 60 70 90 110 140 170</div>');
  var fmLabel= $('<div class= "fmLabel">FM                              88 92 96 102 106 108 </div>');
  var newDate= new Date();
  console.log(newDate);
  console.log(newDate.toLocaleTimeString());

  // var dial= $('<div class= "dial">dial</div>');
  // var stationIndicator= $('<div class= "stationIndicator"></div>');



$('.container').append(outerShell);
$(outerShell).append(innerShell);



$(innerShell).append(pmLabel);
$(innerShell).append(amLabel);
$(innerShell).append(fmLabel);

$(innerShell).append(clockScreen);
$(clockScreen).append(indicator);
$(clockScreen).append(clockText);

});