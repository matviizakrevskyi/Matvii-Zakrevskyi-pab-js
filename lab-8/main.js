document.querySelector('.btn').addEventListener('click', Start)

function Start(){
    document.querySelector('.btn').style.display = 'none';
    document.querySelector('.inputCount').style.display = 'none';
    
    var canv = document.querySelector('.canv')
    var ctx = canv.getContext('2d')
    canv.width = '800'
    canv.height = '600'
    const distance = canv.width * (20/100)
    const count = document.querySelector('.inputCount').value

    console.log(count)
    
    //Ball Class
    class Ball {
        id
        PosX
        PosY
        radius = 8
        VX
        VY
        
        constructor(id, PosX, PosY, VX, VY){
            this.id = id
            this.PosX = PosX
            this.PosY = PosY
            this.VX = VX
            this.VY = VY
        }
    
        draw() {
            ctx.beginPath();
            ctx.arc(this.PosX, this.PosY, this.radius, 0, Math.PI * 2, true);
            ctx.closePath();
            ctx.fillStyle = 'black';
            ctx.fill();

            ctx.beginPath();
            ctx.arc(this.PosX, this.PosY, this.radius - 3, 0, Math.PI * 2, true);
            ctx.closePath();
            ctx.fillStyle = 'white';
            ctx.fill();
        }
    }
    
    function animationBall(balls) {
        ctx.clearRect(0, 0, canv.width, canv.height)

        for (let i = 0; i < balls.length; i++){
            //balls
            balls[i].draw()
            
            //lines
            for (let j = 0; j < balls.length; j++){
                var c = ((balls[i].PosX - balls[j].PosX)**2 
                + (balls[i].PosY - balls[j].PosY)**2)**(1/2)
                
                if (c < distance && c > 0){
                    ctx.beginPath()
                    ctx.moveTo(balls[i].PosX, balls[i].PosY)
                    ctx.lineTo(balls[j].PosX, balls[j].PosY)
                    ctx.lineTo(balls[i].PosX, balls[i].PosY)
                    ctx.closePath()
                    ctx.stroke()
                    
                }
            }
        }

        for (let i = 0; i < balls.length; i++){
            ctx.beginPath();
            ctx.arc(balls[i].PosX, balls[i].PosY, balls[i].radius - 3, 0, Math.PI * 2, true);
            ctx.closePath();
            ctx.fillStyle = 'white';
            ctx.fill();

            if (balls[i].PosX + balls[i].VX  > canv.width || balls[i].PosX + balls[i].VX < 0){
                balls[i].VX = -balls[i].VX
            }
            if (balls[i].PosY + balls[i].VY > canv.height || balls[i].PosY + balls[i].VY < 0){
                balls[i].VY = -balls[i].VY
            }
            balls[i].PosX += balls[i].VX
            balls[i].PosY += balls[i].VY
        }

        requestAnimationFrame(function(){animationBall(balls)})
    }

    function getRandom(min, max) {
        return Math.random() * (max - min) + min;
    }
    //

    //start
    var balls = new Array()

    for (let i = 0; i < count; i++){
        balls[i] = new Ball(`${i}`, 
            getRandom(0, canv.width), 
            getRandom(0, canv.height), 
            getRandom(-1.5, 1.5), 
            getRandom(-1.5, 1.5))
    }
    
    requestAnimationFrame(function(){animationBall(balls)})

    
    


}