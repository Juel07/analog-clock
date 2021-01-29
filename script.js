// select the elements
const hourHand = document.querySelector('.hour')
const minHand = document.querySelector('.min')
const secHand = document.querySelector('.sec')
const digitalTime = document.querySelector('.num-time')

const displayTime = () => {

    // get the current time - hour, mins, seconds
    let time = new Date()

    const secs = time.getSeconds()
    const mins = time.getMinutes()
    const hours = time.getHours()

    // convert the time to a degree
    const secsDegree = (360 * secs) / 60
    const minsDegree = (360 * mins) / 60
    const hoursDegree = (360 * hours) / 60

    // display time on digital clock
    if (hours <= 0) { hours = '0' + hours } else { hours }
    if (secs < 10) { secs = '0' + secs } else { secs }
    if (mins < 10) { mins = '0' + mins } else { mins }

    digitalTime.innerText = `${hours}:${mins}:${secs}`
}

// update the time every 1000ms / 1s
setInterval(displayTime, 1000)