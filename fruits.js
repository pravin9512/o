status = ""
object = []
function preload() {
    img = loadImage("fruit.jpg")
}

function setup() {
    canvas = createCanvas(540, 420)
    canvas.center()
    object_detect = ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById("status").innerHTML = "Status:detecting objects"
}

function modelLoaded() {
    console.log("model loaded successfuly")
    status = true
    object_detect.detect(img, got_results)
}

function got_results(error, results) {
    if (error) {
        console.error(error);
    }
    else {
        console.log(results)
        object = results
    }
}

function draw() {
    image(img, 0, 50, 540, 420)
    if (status != "") {
        for (i = 0; i < object.length; i++) {
            document.getElementById("status").innerHTML = "Status :object detected"
            fill("red")
            percent = floor(object[i].confidence * 100)
            console.log("percentage="+percent)
            text(object[i].label + " " + percent + "%", object[i].x + 20, object[i].y + 20)
            noFill()
            stroke("red");
            strokeWeight(4);
            rect(object[i].x, object[i].y, object[i].width, object[i].height)
        }
    }


}

        function home(){
            window.location="index.html"
        }