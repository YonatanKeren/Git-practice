'use strict'

const ball1Default = 'white'
const ball2Default = 'yellow'

function onBallClick(elBall, maxDiameter) {
    elBall.style.transition = 'none'
    var increment = getRndIntIncMax(20, 60)
    var currWidth = elBall.offsetWidth + increment
    var currHeight = elBall.offsetHeight + increment
    elBall.style.backgroundColor = getRandomColor()
    if (currHeight >= maxDiameter || currWidth >= maxDiameter) {
        elBall.style.width = '100px'
        elBall.style.height = '100px'
        elBall.textContent = 100
        returnDefaultColor(elBall)
    } else {
        elBall.style.width = currWidth + 'px'
        elBall.style.height = currHeight + 'px'
        elBall.textContent = currHeight
    }
    elBall.style.transition = '1s'
}

function returnDefaultColor(elBall){
    if (elBall.className === 'ball1') elBall.style.backgroundColor = ball1Default
    if (elBall.className === 'ball2') elBall.style.backgroundColor = ball2Default
}