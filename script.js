
const secondHand = document.querySelector('#second-Hand')
const minuteHand = document.querySelector('#min-hand')
const hourHand = document.querySelector('#hour-hand')

function setDate() {
   const time = new Date();

const seconds = time.getSeconds();
const secondsDeg = ((seconds / 60) * 360) + 90;
secondHand.style.transform = `rotate(${secondsDeg}deg)`

const minute = time.getMinutes();
const minsDeg = ((minute / 60) * 360) + ((seconds/60)*6) + 90;
minuteHand.style.transform = `rotate(${minsDeg}deg)`

const hour = time.getHours();
const hoursDeg = ((hour / 12) * 360) + ((minute/60)*30) + 90;
hourHand.style.transform = `rotate(${hoursDeg}deg)`

}

setInterval(setDate, 1000)

setDate();