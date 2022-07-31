const clock = document.querySelector(".clock");

function getClock() {
    const today = new Date();
    const month = today.toLocaleDateString("default", {month:"short"});
    const date = String(today.getDate());
    const day = today.toLocaleString("en-us", {weekday:"short"});
   
    const hours = String(today.getHours()).padStart(2, "0");
    const minutes = String(today.getMinutes()).padStart(2, "0");
    const seconds = String(today.getSeconds()).padStart(2, "0");
    clock.innerText = `${month} ${date} ${day} ${hours}:${minutes}:${seconds}`;

}

getClock();
setInterval(getClock, 1000);