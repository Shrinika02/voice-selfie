SpeechRecognition=window.webkitSpeechRecognition;
recognition=new SpeechRecognition()

function start(){
    document.getElementById("textbox").innerHTML="";
    recognition.start();
}

recognition.onresult=function(event){
    console.log(event);
    Content=event.results[0][0].transcript;
    document.getElementById("textbox").innerHTML=Content;
   if(Content=="take my selfie"){
    speak()
   } 
}

function speak(){
    var synth= window.speechSynthesis
    speak_data= "taking your selfie in 5 seconds"
    console.log(speak_data)
    utter_this= new SpeechSynthesisUtterance(speak_data)
    synth.speak(utter_this)
    Webcam.attach(camera)
    setTimeout(function(){
        take_snapshot()
        save()
    },5000);
}

Webcam.set({
    width: 360,
    height:250,
    image_format:'png',
    png_quality:100
})

camera= document.getElementById("camera")

function take_snapshot(){
    Webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML='<img id="selfie" src="'+data_uri+'">';
    })
}

function save(){
   link= document.getElementById("link");
   image=document.getElementById("selfie").src;
   link.href=image
   link.click()
}




