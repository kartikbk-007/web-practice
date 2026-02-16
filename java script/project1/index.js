function showTime(){
    let now = new Date();

    let hours = now.getHours();
    let minutes = now.getMinutes();
    let seconds = now.getSeconds();

    let time = hours + ":" + minutes + ":" + seconds;
    document.querySelector(".clock").textContent = time;
}
setInterval(showTime, 1000);

