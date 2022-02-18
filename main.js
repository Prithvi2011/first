function preload(){

}
function setup(){
    canvas=createCanvas(640,480)
    canvas.position(110,250)
    video=createCapture(VIDEO)
    video.hide()
    tintcolor=""
    
}
function draw(){
    image(video, 150,100,220,200)
    fill(255,0,0)
    stroke(255,0,0)
    circle(50,50,100)

    fill(255,0,0)
    stroke(255,0,0)
    circle(500,50,100)

    fill(255,0,0)
    stroke(255,0,0)
    circle(500,400,100)

    fill(255,0,0)
    stroke(255,0,0)
    circle(50,400,100)

    fill(0,255,0)
    stroke(0,255,0)
    rect(100, 30, 350, 20)

    fill(0,255,0)
    stroke(0,255,0)
    rect(100, 380, 350, 20)

    fill(0,255,0)
    stroke(0,255,0)
    rect(30, 90, 20, 270) 

    fill(0,255,0)
    stroke(0,255,0)
    rect(480, 90, 20, 270) 
}
