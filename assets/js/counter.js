

(function(){

    const start = document.getElementById('start');
    const pause = document.getElementById('pause');
    const stop = document.getElementById('stop');
    let timer = document.getElementById('showcase');
    const time = 25 + ":" + "0"+0; 
    let isNull = false;
    timer.innerHTML = time;

       start.addEventListener('click',function(e){
        startTimer();
        this.disabled = true;
        timer.innerHTML = time;
        if(isNull){
            isNull = false;
         }else{
            console.log(isNull);
         }
      })
    
      pause.addEventListener('click', function(){
        start.disabled = false;
        myStopFunction();
      });
      
      stop.addEventListener('click', function(){
        timer.innerHTML = time;
        myStopFunction();
        start.disabled = false;
      });
      
      
    let timerName;
    function startTimer() {
      let presentTime = timer.innerHTML;
      let timeArray = presentTime.split(/[:]+/);
      let m = checkMinute(timeArray[0] - 0);
      let s = checkSecond((timeArray[1] - 1));
    
      if(s==59){
        m=m-1;
        if(m<10){
          m="0"+m;
        }
      }
      
      timer.innerHTML = m + ":" + s;
      document.title = timer.innerText;
      timerName = setTimeout(startTimer, 1000);
    
      if(m==0 && s==0){
        myStopFunction();
        start.disabled = false;
        isNull = true;
      }
    }
    
    function myStopFunction() {
        clearTimeout(timerName);
    }
    
    function checkMinute(min){
      if(min<=9){
        min = "0" + min;
      }
      return min;
    }
    
    function checkSecond(sec) {
      if (sec < 10 && sec >= 0) {sec = "0" + sec}; 
      if (sec < 0) {sec = "59"};
      return sec;
    }
    
    })();