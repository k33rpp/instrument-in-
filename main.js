function start(){
    navigator.mediaDevices.getUserMedia({ audio: true });
    teachable=ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/Tc7coocbe/model.json',modelTaiyar);
}

function modelTaiyar(){
    console.log("Ready to set things on fire ");
    teachable.classify(getresult);
}

function getresult(error, jawab){
    if(error) {
        console.error(error);
    }
    else{
        console.log(jawab);
        redColor = Math.floor(Math.random() * 255) + 1;
        blueColor = Math.floor(Math.random() * 255) + 1;
        greenColor = Math.floor(Math.random() * 255) + 1;

        document.getElementById("song").innerHTML = 'I can hear: ' + jawab[0].label ;
        document.getElementById("confidence").innerHTML = 'Accuracy:' + (jawab[0].confidence * 100).toFixed(2) + "%";
        document.getElementById("song").style.color = "rgb(" + redColor + ", " + greenColor + ", " + blueColor + ")";
        document.getElementById("confidence").style.color = "rgb(" + redColor + ", " + greenColor + ", " + blueColor + ")";

        newimg=document.getElementById("onlyimg");

        if(jawab[0].label== "Background Noise"){
            newimg.src="violinfinal.png";
        }

            else if(jawab[0].label== "guitar"){
              newimg.src="guitarfinal.png";
            }

            else if(jawab[0].label== "flute"){
                newimg.src="flutesachifinal.png";
            }

            else if(jawab[0].label== "piano"){
                newimg.src="pianofinal.png";}

                else{
                    newimg.src="drumsfinal.png"
                }


    
        


    }
}