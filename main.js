Webcam.set({
    width: 310 ,
    height: 300 ,
    image_format: 'png' ,
    png_quality: 90 ,
    constraints:{
        facingMode:"environment"
    }
})
cam = document.getElementById("cam");
Webcam.attach(cam);

function snap(){
    Webcam.snap(function (data_uri){
        document.getElementById("snap").innerHTML = "<img id='image' src='"+data_uri+"'>";
    });
}

console.log("ml5 Version",ml5.version);
classifier = ml5.imageClassifier('MobileNet' , modelLoaded);

function modelLoaded(){
    console.log("Model Loaded!!");
}

function check(){
    img = document.getElementById('image');
    classifier.classify(img , gotResult);
}

function gotResult(error , result){
    if (error){
        console.error(error);
    } 
    else {
        console.log(result);
    }
    document.getElementById("object").innerHTML = result[0].label;
}