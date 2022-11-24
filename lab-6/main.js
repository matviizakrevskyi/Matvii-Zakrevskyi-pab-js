const ball = document.querySelector('.ball')
document.querySelector('.btn').addEventListener('click', Start)

function Start(){
    document.querySelector('.btn').style.display = 'none';
    document.querySelector('.TitleWin').style.display = 'none';
    ballPossX = 190
    ballPossY = 290
    window.addEventListener('deviceorientation', onDeviceMove)
}

var defaultAlpha
var defaultBeta
var defaultGamma
var n = 0
var ballPossX = 190
var ballPossY = 290
var aniframe

function onDeviceMove(event) {
    if(defaultAlpha === undefined){
        defaultAlpha = event.alpha
        defaultBeta = event.beta
        defaultGamma = event.gamma
    }


    //moving
    var moveX
    var moveY
    //console.log(defaultBeta)

    //Y
    if(defaultBeta - event.beta > -5 && defaultBeta - event.beta < 5){
        moveY = 0
    }
    else if(defaultBeta - event.beta < 0){
        moveY = -(defaultBeta - event.beta) / 15
    }
    else if(defaultBeta - event.beta > 0){
        moveY = -(defaultBeta - event.beta) / 15
    }

    //X
    if(defaultGamma - event.gamma > -5 && defaultGamma - event.gamma < 5){
        moveX = 0
    }
    else if(defaultGamma - event.gamma < 0){
        moveX = -(defaultGamma - event.gamma) / 15
    }
    else if(defaultGamma - event.gamma > 0){
        moveX = -(defaultGamma - event.gamma) / 15
    }





    //animation
    if(ballPossX > 175 && ballPossX < 200
        && ballPossY > 472 && ballPossY < 480){
            console.log('Victory!!!')
            ball.style.left = 190 + 'px'
            ball.style.top = 475 + 'px'
            document.querySelector('.TitleWin').style.display = 'flex';
            document.querySelector('.btn').style.display = 'flex';
            cancelAnimationFrame(aniframe)
    }
    else{    
        if(aniframe != undefined){
            cancelAnimationFrame(aniframe)
        }
        aniframe = requestAnimationFrame(function(){ animate(moveX, moveY) })
    }
}


function animate(moveX, moveY) {
    if(ballPossY + moveY > -10 
        && ballPossY + moveY < 590
        && ballPossX + moveX > -10
        && ballPossX + moveX < 390
        ){
        //console.log(ballPossY)
        ballPossX += moveX   
        ball.style.left = ballPossX + 'px'
        ballPossY += moveY
        ball.style.top = ballPossY + 'px'
    }
    if(ballPossY + moveY < -10){
        ball.style.top = -10
        if(ballPossX + moveX > -10 && ballPossX + moveX < 390){
            ballPossX += moveX   
            ball.style.left = ballPossX + 'px'
        }
    }
    if(ballPossY + moveY > 590){
        ball.style.top = 590
        if(ballPossX + moveX > -10 && ballPossX + moveX < 390){
            ballPossX += moveX   
            ball.style.left = ballPossX + 'px'
        }
    }
    if(ballPossX + moveX < -10){
        ball.style.left = -10
        if(ballPossY + moveY > -10 && ballPossY + moveY < 590){
            ballPossY += moveY
            ball.style.top = ballPossY + 'px'
        }
    }
    if(ballPossX + moveX > 390){
        ball.style.left = 390
        if(ballPossY + moveY > -10 && ballPossY + moveY < 590){
            ballPossY += moveY
            ball.style.top = ballPossY + 'px'
        }
    }

    if(ballPossX > 175 && ballPossX < 200
        && ballPossY > 472 && ballPossY < 480){
            console.log('Victory!!!')
            ball.style.left = 190 + 'px'
            ball.style.top = 475 + 'px'
            document.querySelector('.TitleWin').style.display = 'flex';
            document.querySelector('.btn').style.display = 'flex';
            cancelAnimationFrame(aniframe)
    }
    else{
        aniframe = requestAnimationFrame(function(){ animate(moveX, moveY) })
    }
}


