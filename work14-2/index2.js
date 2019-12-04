let nowtime = new Date();
let d = h = m = s = 0;
m = 59-nowtime.getMinutes();
s = 59-nowtime.getSeconds();
let id = setInterval(seckill, 1000);

function seckill() {
        if(s == 0){
            s = 59;
            --m;
        }else{
            s--;
        }
        if(m == 0){
            m = 59;
        }

        m = m < 10 ? '0' + m : m;
        s = s < 10 ? '0' + s : s;
        
    document.getElementById('d').innerHTML = d + '0天';
    document.getElementById('h').innerHTML = h + '0时';
    document.getElementById('m').innerHTML = m + '分';
    document.getElementById('s').innerHTML = s + '秒';
}