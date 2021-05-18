function preload() {
    nose = loadImage("https://i.postimg.cc/q7dxVF7t/nose.png");
};
var noseX = 0;
var noseY = 0;
function setup() {
    canvas = createCanvas(300, 300);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(300, 300);
    video.hide()

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on("pose", gotPoses)
} 

function modelLoaded() {
    console.log("Ml5 mode loaded");
}
function gotPoses(results) {
    if(results.length > 0) {
        console.log(results);
        console.log("nose x = " + results[0].pose.nose.x);
        console.log("nose y = " + results[0].pose.nose.y);
        noseX = results[0].pose.nose.x-15;
        noseY = results[0].pose.nose.y-12;
    }
}
function draw() {
    image(video, 0, 0, 300, 300);
    image(nose, noseX, noseY, 30, 30);
}
function take_snapshot() {
    save("myfilterimage.png");
}