document.querySelector('.btn').addEventListener('click', Start)
document.querySelector('#highload1').addEventListener('click', () => {
    if(document.querySelector('#highload1').checked == true){
        document.querySelector('#repulsion').disabled = false
        document.querySelector('#attraction').disabled = false
    }
    else{
        document.querySelector('#repulsion').disabled = true
        document.querySelector('#attraction').disabled = true
        document.querySelector('#repulsion').checked = false
        document.querySelector('#attraction').checked = false
    }
})

function Start(){
    document.querySelector('.btn').style.display = 'none';
    document.querySelector('.inputCount').style.display = 'none';
    document.querySelector('.check').style.display = 'none';
    document.querySelector('.radios').style.display = 'none';

    
    var canv = document.querySelector('.canv')
    var ctx = canv.getContext('2d')
    canv.width = '800'
    canv.height = '600'
    const distance = canv.width * (20/100)
    const count = document.querySelector('.inputCount').value

    console.log(distance)
    
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
        }
    }

    //class vector
    class Vector {
        x
        y
        length

        constructor(x1, y1, x2, y2){
            this.x = x2 - x1
            this.y = y2 - y1
            this.length = (this.x**2 + this.y**2)**(1/2)
        }
    }
    
    //animation
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
            
            //mouse
            if(document.querySelector('#highload1').checked == true){
                var c = ((balls[i].PosX - mouseX)**2 
                + (balls[i].PosY - mouseY)**2)**(1/2)
                
                if (c < distance / 2 && c > 0){
                    var CursorVct = new Vector(mouseX, mouseY, balls[i].PosX, balls[i].PosY)
                    var lengthViceVct = distance - CursorVct.length
                    var ResX = CursorVct.x * lengthViceVct / CursorVct.length
                    var ResY = CursorVct.y * lengthViceVct / CursorVct.length
                    
                    if(document.querySelector('#repulsion').checked == true){
                        balls[i].VX = ResX / 50
                        balls[i].VY = ResY / 50
                    }
                    if(document.querySelector('#attraction').checked == true){
                        balls[i].VX = - ResX / 50
                        balls[i].VY = - ResY / 50
                    }
                }
            }
            //


            if (balls[i].PosX + balls[i].VX  > canv.width || balls[i].PosX + balls[i].VX < 0){
                balls[i].VX = -balls[i].VX
            }
            if (balls[i].PosY + balls[i].VY > canv.height || balls[i].PosY + balls[i].VY < 0){
                balls[i].VY = -balls[i].VY
            }
            balls[i].PosX += balls[i].VX
            balls[i].PosY += balls[i].VY

            if(idBallEs == balls[i].id){
                balls[i].PosX = mouseX
                balls[i].PosY = mouseY
            }
        }

        

        requestAnimationFrame(function(){animationBall(balls)})
    }

    //random func
    function getRandom(min, max) {
        return Math.random() * (max - min) + min;
    }
    

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

    
    //mouse
    canv.addEventListener('mousemove', onMouseMove)

    var mouseX
    var mouseY
    
    function onMouseMove(event){
        mouseX = event.x - 27   //-27
        mouseY = event.y - 19   //-19
    }

    var idBallEs = null
    var isClick = false
    
    document.addEventListener('click', () => {
        if(isClick == false || idBallEs == null){
            for(let i = 0; i < balls.length; i++){
                if(mouseX < balls[i].PosX + 10 &&
                    mouseX > balls[i].PosX - 10 && 
                    mouseY < balls[i].PosY + 10 &&
                    mouseY > balls[i].PosY - 10
                    ){
                        idBallEs = balls[i].id
                }
            }
            isClick = true
        }
        else if(isClick == true){
            idBallEs = null
            isClick = false
        }

    })

}