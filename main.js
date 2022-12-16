//https://teachablemachine.withgoogle.com/models/-vYmc5RXV/model.json

Webcam.set({
width:350,
height:350,
image_format:"jpeg",
jpeg_quality:90
});


camera=document.getElementById("cam");
Webcam.attach("#cam")


function snapshot(){
Webcam.snap(function(data_uri){
document.getElementById("result").innerHTML="<img id='capture_img' src='"+data_uri+"'>";
});
}

console.log("ml5 version",ml5.version);
classifier=ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/-vYmc5RXV/model.json",modelLoded);
function modelLoded(){
console.log("model loaded!")
}

function check(){
classifie=document.getElementById("capture_img");
classifier.classify(classifie,gotresult);
}

function gotresult(error,results){
if(error){
console.error(error);
}
else{
console.log(results);
document.getElementById("result_object_name").innerHTML=results[0].label;
document.getElementById("result_object_Accuracy").innerHTML=results[0].confidence.toFixed(2);
}
}