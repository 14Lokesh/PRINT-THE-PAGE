function print(){
    window.print();
}


function myfun(paravalue)
{
    var a=  document.body.innerHTML;
    var diva= document.getElementById(paravalue).innerHTML;
    document.body.innerHTML=diva;
    window.print();
    document.body.innerHTML=a;

}