
function analogclock(){
    let seconds = new Date().getSeconds()
    let minutes = new Date().getMinutes()
    let hours = new Date().getHours()
    document.getElementById('second-div').style.transform=`rotate(${seconds*6}deg)`
    document.getElementById('minute-div').style.transform=`rotate(${minutes*6}deg)`
    document.getElementById('hour-div').style.transform=`rotate(${hours*30+minutes*.5}deg)`
}


setInterval(analogclock,1000)