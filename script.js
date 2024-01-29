let container = document.querySelector(".content")

function playsound(){
    var audio = document.getElementById("myAudio");
    audio.play();
    container.style.display = "block"
   
}
function closebtn(){
    container.style.display = "none"

}