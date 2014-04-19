$(document).on('ready', function() {
  var outerShell= $('<div class= "outerShell shellAppearance"></div>');
  var outerShell1= $('<div class= "outerShell shellAppearance" id= "outerShell1"></div>');
  var outerShell2= $('<div class= "outerShell shellAppearance" id= "outerShell2"></div>');
  var outerShell3= $('<div class= "outerShell shellAppearance" id= "outerShell3"></div>');
  var outerShell4= $('<div class= "outerShell shellAppearance" id= "outerShell4"></div>');
  var outerShell5= $('<div class= "outerShell shellAppearance" id= "outerShell5"></div>');

  var innerShell= $('<div class= "innerShell shellAppearance"></div>');
  var pmLabel= $('<div class= "pmLabel">PM</div>');
  var clockScreen= $('<div class= "clockScreen"></div>');
  var indicator= $('<div class= "indicator">*</div>');
  var clockText= $('<div class= "clockText">clockText</div>');
  var amLabel= $('<div class= "amLabel">AM             53       60       70       90       110       140       170</div>');
  var fmLabel= $('<div class= "fmLabel">FM             92       96       102       104        106          108 </div>');
  var slider= $('<div class= "slider">Slider</div>');
  var sliderIndicator= $('<div class= "sliderIndicator"></div>');
  var newDate= new Date();

  
  var myClock=setInterval(function(){myTimer()},1000);

  function myTimer()
  {
  var d=new Date();
  if(d.getHours() <12){
    $(indicator).css('display', 'none');
  }


  var t=d.getHours() + ':' + d.getMinutes();
  $(clockText).text(t);


  }




  // var dial= $('<div class= "dial">dial</div>');
  // var stationIndicator= $('<div class= "stationIndicator"></div>');



$('.container').append(outerShell5);

$(outerShell5).append(outerShell4);
$(outerShell4).append(outerShell3);
$(outerShell3).append(outerShell2);
$(outerShell2).append(outerShell1);
$(outerShell1).append(outerShell);

$(outerShell).append(innerShell);

$(innerShell).append(pmLabel);
$(innerShell).append(amLabel);
$(innerShell).append(fmLabel);
$(innerShell).append(slider);
$(slider).append(sliderIndicator);

$(innerShell).append(clockScreen);
$(clockScreen).append(indicator);
$(clockScreen).append(clockText);




});