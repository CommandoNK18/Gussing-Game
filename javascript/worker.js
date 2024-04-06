 
  var i = 15;

  function timedCount() {
    i = i - 1;
    postMessage(i);
    if(i>0){
     setTimeout("timedCount()",1000);
    }
   
  }
  
  timedCount();