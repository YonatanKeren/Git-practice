'use strict'


function onBallClick(elBall) {
    elBall.style.transition = 'none'
    var increment = getRndIntIncMax(20, 60)
    var currWidth = elBall.offsetWidth + increment
    var currHeight = elBall.offsetHeight + increment
    elBall.style.backgroundColor = getRandomColor()
    if (currHeight >= 400 || currWidth >= 400) {
        elBall.style.width = '100px'
        elBall.style.height = '100px'
        elBall.textContent = 100
    } else {
        elBall.style.width = currWidth + 'px'
        elBall.style.height = currHeight + 'px'
        elBall.textContent = currHeight
    }
    elBall.style.transition = '1s'
}