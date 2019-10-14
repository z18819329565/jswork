//9X9的空表，请自行编写这段代码
str = '<table border="1">'
for(let n=1;n<10;++n){
    str +='<tr>'
    for(var z=n;z<10;++z){
        str +='<td>&nbsp;</td>'
    }
    str += '</tr>'
}
str +='</table>'
document.getElementById('table1').innerHTML = str

//倒九九乘法表
str = '<table border="1">'
for(let i=9;i>0;--i){
    str += '<tr>'
for(var j=i;j>0;--j){
    str +='<td>&nbsp;</td>'
    }
    str +='</tr>'
}
str +='</table>'
document.getElementById('table2').innerHTML = str
//倒九九乘法表，请自行编写这段代码