nose_x = 0;
nose_y = 0;

function preload()
{
    mustache = loadImage('https://i.postimg.cc/8PjrhKbg/png-clipart-handlebar-moustache-beard-moustache-fashion-monochrome-removebg-preview.png');
}

function setup()
{
    canvas = createCanvas(300,300);
    canvas.center();
    video= createCapture(VIDEO);
    video.size(300,300);
    video.hide();

    PoseNet = ml5.poseNet(video,modelLoaded);

    PoseNet.on('pose',gotPoses);
}

function gotPoses(results)
{
    if(results.length>0)
    {
        console.log(results);
        nose_x = results[0].pose.nose.x-35;
        nose_y = results[0].pose.nose.y;
        console.log("Nose X is = " + nose_x);
        console.log("Nose Y is = " + nose_y);
    }
}

function modelLoaded()
{
    console.log("The model is loaded");
}
function draw()
{
    image(video,0,0,300,300);
    image(mustache,nose_x,nose_y,80,40);
}

function take_snapshot()
{
    save('image.png');
}