// Required Variables
let secVal = 0;
let minuteVal = 0;
let Msec= 0; 
let hourVal= 0;

// A boolean value which is toggled and determines if the function is running or not
let timer = false;

// Click count to avoid glitches when Start button is clicked multiple times
let StartclickCount= 0; 

function startTimer() {
  StartclickCount++;
  if(StartclickCount == 1) {
    timer= true;
    timerfunc();
  }

}

function pauseTimer() {  
  StartclickCount = 0;  
  timer= false;
  
}

function resetTimer() {
  timer= false;
  secVal = 0;
  minuteVal = 0;
  Msec= 0; 
  hourVal= 0;
  StartclickCount= 0;
  document.getElementById("milisec").innerHTML = "00";
  document.getElementById("seconds").innerHTML = "00";
  document.getElementById("minutes").innerHTML = "00";
  document.getElementById("hour").innerHTML = "00";
}

// Main Timer Function Containing The Logic of Stopwatch 

function timerfunc() {
  if(timer == true) {

    if(Msec == 100) {
      secVal++;
      Msec= 0;
    }
    if(secVal == 60) {
      minuteVal++;
      secVal= 0;
    }
    if(minuteVal == 60) {
      hourVal++;
    }
    let MsecString = Msec;
    let secValString = secVal;
    let minuteValString = minuteVal;
    let hourValString = hourVal; 
    if (Msec < 10) {
      MsecString = "0" + Msec; 
    }
    if (secVal < 10) {
      secValString = "0" + secVal;
    }
    if (minuteVal < 10) {
      minuteValString = "0" + minuteVal;
    }
    if(hourVal < 10) {
      hourValString = "0" + hourVal;
    }

    Msec++;
    document.getElementById("hour").innerHTML= hourVal;
    document.getElementById("minutes").innerHTML= minuteValString;
    document.getElementById("seconds").innerHTML= secValString;
    document.getElementById("milisec").innerHTML= MsecString;
    setTimeout(timerfunc , 10);
    
  }
}

