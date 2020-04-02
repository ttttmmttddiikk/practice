document.addEventListener('DOMContentLoaded',function(){
//今日のDateオブジェクトを生成
var Today = new Date();
//テーブルの初日(金曜日)の日付オブジェクトを定義
var Date_First　= new Date();
//今日の曜日によって、テーブル初日(金曜日)の日付オブジェクトに日、月を入れる
switch(Today.getDay()){
  case 5 :
    break;
  case 6 :
    Date_First.setDate(Today.getDate() - 1);
    break;
  default :
    Date_First.setDate(Today.getDate() - 2 - Today.getDay());
    break;
}
//入れていく
var weekDays = ["(金)", "(土)", "(日)", "(月)", "(火)", "(水)", "(木)"];
var D = document.getElementById("days_0");

for(var i = 0;i < 7;i++){
  
  D.textContent = (Date_First.getMonth() + 1).toString(10) + "/" + Date_First.getDate().toString(10) + weekDays[i];
  D = D.nextElementSibling;
  Date_First.setDate(Date_First.getDate() + 1);
}

},false);






