// select the elements
const hourHand = document.querySelector('.hour')
const minHand = document.querySelector('.min')
const secHand = document.querySelector('.sec')
const digitalTime = document.querySelector('.num-time')

const displayTime = () => {

    // get the current time - hour, mins, seconds
    let time = new Date()

    let hours = time.getHours()
    let mins = time.getMinutes()
    let secs = time.getSeconds()

    // convert the time to a degree
    const secsDegree = (360 * secs) / 60
    const minsDegree = (360 * mins) / 60
    const hoursDegree = (360 * hours) / 60

    // make the hands rotate as per degree position 
    hourHand.style.transform = `rotate(${hoursDegree}deg)`
    minHand.style.transform = `rotate(${minsDegree}deg)`
    secHand.style.transform = `rotate(${secsDegree}deg)`

    // display time on digital clock
    if (hours < 10) { hours = '0' + hours }
    if (mins < 10) { mins = '0' + mins }
    if (secs < 10) { secs = '0' + secs }

    digitalTime.innerText = `${hours}:${mins}:${secs}`
}

// update the time every 1000ms / 1s
setInterval(displayTime, 1000)

