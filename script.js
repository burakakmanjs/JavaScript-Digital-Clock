const getTime = () =>{
    let now = new Date();
    let hour = now.getHours();
    let minute = now.getMinutes();
    let seconds = now.getSeconds();

    document.querySelector('#hour').innerHTML = hour;
    document.querySelector('#minute').innerHTML = minute;
    document.querySelector('#seconds').innerHTML = seconds;
}

setInterval(function(){getTime()});