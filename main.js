var SpeechRecognition = window.webkitSpeechRecognition;
  
var recognition = new SpeechRecognition();

function start()
{
    document.getElementById("textbox").innerHTML = ""; 
    recognition.start();
} 
 
recognition.onresult = function(event) {

 console.log(event); 

var Content = event.results[0][0].transcript;

    document.getElementById("textbox").innerHTML = Content;
    console.log(Content);
    if(Content=="take my selfie"){
    speak();
    
    }
   
}


function speak(){
    var synth = window.speechSynthesis;

    speak_data = "Say cheese in 4 sec";
    var utterThis = new SpeechSynthesisUtterance(speak_data);

    synth.speak(utterThis);

    Webcam.attach(camera);
    setTimeout(function(){
    snap();
    save();
    },4100);
}

camera=document.getElementById("camera");

Webcam.set({
    width:359,
    height:249,
    image_format:"jpeg",
    jpeg_quality:91

});

function snap(){
    Webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML='<img id="jef" src="'+data_uri+'"/>';

    })
}

function save(){
    link=document.getElementById.id("link");
    img=document.getElementById("jef").src;
    link.href=img;
    link.click();

}
