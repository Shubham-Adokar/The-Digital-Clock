

setInterval(currentTime, 1000);
function currentTime(){
  var minute = new Date().getMinutes();
  var second = new Date().getSeconds();
  var date = new Date().getDate();
  var hour = new Date().getHours();
  var month = new Date().getMonth()+1;
  var year = new Date().getFullYear();
  var day = new Date().getDay();
  var currentDay;
  var quote;
  var amPm = "";
  var body = document.querySelector("body");

  if(hour>=6 && hour<12){
      quote = "Good Morning";
  }else if(hour>=12 && hour<18){
      quote = "Good Afternoon";
  }else if(hour>=18 && hour<22){
      quote = "Good Evening";
  }else{
      quote = "Good Night";
  }

  switch(day){
      case 0:
          currentDay = "Sunday";
          break;
      case 1:
          currentDay = "Monday";
          break;
      case 2:
          currentDay = "Tuesday";
          break;
      case 3:
          currentDay = "Wednesday";
          break;
      case 4:
          currentDay = "Thursday";
          break;
      case 5:
          currentDay = "Friday";
          break;
      default:
          currentDay = "Saturday";
  }

  if(hour === 0){
    hour = 12;
    amPm = "AM";
  }else if(hour > 12){
    hour = hour-12;
    amPm = "PM"
  }
  
  if(hour<10){
    hour = "0"+hour;
  }
  if(minute<10){
    minute = "0"+minute;
  }
  if(second<10){
    second = "0"+second;
  }

  if(month<10){
    month = "0"+month
  }

if(date<10){
    date = "0"+date
}
  
  document.getElementById("hour").innerHTML= hour
  document.getElementById("minute").innerHTML= minute
  document.getElementById("second").innerHTML= second
  document.getElementById("am-pm").innerHTML = amPm;
  document.getElementById("date").innerHTML = date;
  document.getElementById("month").innerHTML = month;
  document.getElementById("year").innerHTML = year;
  document.getElementById("day").innerHTML = currentDay;
  document.getElementById("quote").innerHTML = quote;
};


