//商品倒计时
window.onload=function(){
	function GetRTime(){
    var EndTime= new Date('2018/11/30 00:00:00');
    var NowTime = new Date();
    var t =EndTime.getTime() - NowTime.getTime();
    var d=0;
    var h=0;
    var m=0;
    var s=0;
    if(t>=0){
      d=Math.floor(t/1000/60/60/24);
      h=Math.floor(t/1000/60/60%24);
      m=Math.floor(t/1000/60%60);
      s=Math.floor(t/1000%60);
    }
  
  
    document.getElementsByClassName("buy_day")[0].innerHTML = '0'+d;
    document.getElementsByClassName("buy_hous")[0].innerHTML = h;
    document.getElementsByClassName("buy_min")[0].innerHTML = m;
    document.getElementsByClassName("buy_s")[0].innerHTML = s;
  }
  setInterval(GetRTime,0); 
}
