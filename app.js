function clock()
{
const fullDate = new Date();
var hours=fullDate.getHours();
var mins=fullDate.getMinutes();
var secs=fullDate.getSeconds();

if(hours<10)
{
    hours="0"+hours;
}
if(mins<10)
{
    mins="0"+mins;
}
if(secs<10)
{
    secs="0"+secs;
}
if(hours>12)
{
    hours=hours-12;
    document.getElementById('second').innerHTML=":"+secs+" "+"PM";
}
else if(hours<12)
{
    document.getElementById('second').innerHTML=":"+secs+" "+"AM";
}

document.getElementById('hour').innerHTML=hours;
document.getElementById('minute').innerHTML=":"+mins;


}
setInterval(clock,1000);


let secs=0;
let mins=0;
let hrs=0;

let displaySeconds=0;
let displayMinutes=0;
let displayHours=0;

let interval=null;

let status="stopped";


function stopwatch()
{
    secs++;

    if(secs>60)
    {
        secs=0;
        mins++;
        if(mins>60)
        {
            mins=0;
            hrs++;
        }
    }

    if(secs<10)
    {
        displaySeconds="0"+secs.toString();
    }
    else{
        displaySeconds=secs;
    }
    if(mins<10)
    {
        displayMinutes="0"+mins.toString();
    }
    else{
        displayMinutes=mins;
    }
    if(hrs<10)
    {
        displayHours="0"+hrs.toString();
    }
    else{
        displayHours=hrs;
    }
    
    document.getElementById('display').innerHTML=displayHours+":"+displayMinutes+":"+displaySeconds;

}
// window.setInterval(stopwatch,1000);

function startStop()
{
    if(status==="stopped")
    {
        interval = window.setInterval(stopwatch,1000);
        document.getElementById('start').innerHTML="STOP";
        status="started";
    }
    else{
        window.clearInterval(interval);
        document.getElementById("start").innerHTML="START";
        status="stopped";
    }
}
function reset()
{
    window.clearInterval(interval);
    hrs=0;
    mins=0;
    secs=0;
    document.getElementById("display").innerHTML="00:00:00";
    document.getElementById("start").innerHTML="START";


}
