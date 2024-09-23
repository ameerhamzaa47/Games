const canvas=document.getElementById('gameCanvas')
const ctx=canvas.getContext("2d")

let score=0 
let click=0

// Ball

let ballX=canvas.width/2
let ballY=canvas.height/2
let ballRadius=10
let ballSpeedX=2
let ballSpeedY=2

function drawBall(){
    ctx.beginPath()
    ctx.arc(ballX,ballY,ballRadius,0,Math.PI*2);
    ctx.fillStyle="blue"
    ctx.fill()
    ctx.stroke()
    ctx.closePath()
}



// Paddel

let paddelHeight=20;
let paddelWidth=100;
let paddelX=canvas.width/2 - paddelWidth/2;
let paddelY=canvas.height - paddelHeight -10
let paddelSpeed=20

function drawPaddel(){
    ctx.beginPath()
    ctx.rect(paddelX,paddelY,paddelWidth,paddelHeight)
    ctx.fillStyle='blue'
    ctx.fill()
    ctx.stroke()
    ctx.closePath()
}



// draw Bricks

let brickRowCount=6;
let brickColumnCount=10
let brickWidth=75
let brickHeight=20
let marginFromTop=30
let marginFromLeft=30
let brickPadding=10
let bricks=[]


for(let c=0; c<brickColumnCount;c++){
    bricks[c]=[];
    for(let r=0;r<brickRowCount;r++){
        bricks[c][r]={x:0,y:0, alive:1};
    }
}

function drawBricks(){
    for(let c=0; c<brickColumnCount;c++){
        for(let r=0;r<brickRowCount;r++){
            if(bricks[c][r].alive === 1){
                let brickX=(c*(brickWidth+brickPadding))+marginFromLeft
            let brickY=(r*(brickHeight+brickPadding))+marginFromTop
            bricks[c][r].x=brickX
            bricks[c][r].y=brickY
            ctx.beginPath()
            ctx.rect(brickX,brickY,brickWidth,brickHeight);
            ctx.fillStyle="#0395DD"
            ctx.fill()
            ctx.strokeStyle="#0395DD"
            ctx.stroke()
            }
        }
    }
}


// Remove Bricks

function removeBricks(){
    for(let c=0; c<brickColumnCount; c++){
        for(let r=0; r<brickRowCount; r++){
            let b= bricks[c][r];
            if(b.alive === 1){
                if(ballX > b.x && ballY > b.y && ballX < b.x + brickWidth && ballY< b.y + brickHeight){
                    bricks[c][r].alive=0
                    ballSpeedY = -ballSpeedY;
                    score++;
                }
            }
        }
    }
}



// draw Score


function drawScore(){
    ctx.font="16px Arial";
    // ctx.fillStyle="#0395DD"
    ctx.fillText('Score: '+ score, 800,20)
}

// draw Click

function drawClick(){
    ctx.font="16px Arial"
    ctx.fillText('Total Click '+ click, 8,20)
}



// Paddel Movement

document.addEventListener("keydown",handelKey)
document.addEventListener("keyup",handelKey)

function handelKey(e){
    if(e.key==="ArrowLeft" && paddelX > 0){
        paddelX -= paddelSpeed;
        click++;
    }else
    if(e.key=== "ArrowRight" && paddelX + paddelWidth < canvas.width){
        paddelX += paddelSpeed;
        click++;
    }
}


// Start Game

function startGame(){
    ctx.clearRect(0,0,canvas.width,canvas.height)
    drawBall()
    drawPaddel()
    drawBricks()
    drawScore()
    drawClick()
    removeBricks()

    ballX += ballSpeedX;
    ballY += ballSpeedY;

    if(ballY - ballRadius < 0){
        ballSpeedY = -ballSpeedY
    }

    if(ballY + ballRadius > canvas.height ){
        document.location.reload()
        // alert("Game Over")
    }

    if(ballX + ballRadius > canvas.width || ballX - ballRadius < 0){
        ballSpeedX = -ballSpeedX
    }

    if(ballX + ballRadius > paddelX && ballY + ballRadius > paddelY && ballX + ballRadius < paddelX + paddelWidth){
        ballSpeedY = -ballSpeedY;
    }

    requestAnimationFrame(startGame)
}

startGame()











  

// // draw Line
// // ctx.beginPath()
// // ctx.moveTo(150,200)
// // ctx.lineTo(450,350)
// // ctx.stroke()
// // ctx.closePath()

// // draw Circle
// ctx.beginPath()
// ctx.arc(200,200,100,0,Math.PI*2)
// ctx.fillStyle="red"
// ctx.fill()
// ctx.stroke()
// ctx.closePath()

// // draw Rectangular
// ctx.beginPath()
// ctx.rect(400,300,100,50)
// ctx.fillStyle="blue"
// ctx.fill()
// ctx.stroke()
// ctx.closePath()