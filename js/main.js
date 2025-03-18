'use strict'


function onBallClick(elBall) {
    elBall.style.transition = 'none'
    var currWidth = elBall.offsetWidth
    var currHeight = elBall.offsetHeight
    if (currHeight >= 400 || currWidth >= 400) {
        elBall.style.width = '100px'
        elBall.style.height = '100px'
        elBall.textContent = 100
    } else {
        elBall.style.width = (currWidth + 50) + 'px'
        elBall.style.height = (currHeight + 50) + 'px'
        elBall.textContent = currHeight + 50
    }
    elBall.style.transition = '1s'
}