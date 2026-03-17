// FULL BIRTHDAY MESSAGE
const text = `Happy Birthday to the best brother ever! 🎉💙  

You’ve always been my biggest support system and the one who never lets me feel alone. I honestly don’t know what I’d do without you — probably be broke and bored! 😄  

From taking care of me like a second parent to now becoming an amazing father to your little prince 👶💫… I’m so proud of you. Your baby boy is so lucky to have you — just like I am.  

Thank you for always giving me what I want (even when I don’t deserve it 😜), for protecting me, guiding me, and for loving me unconditionally. You’re not just my brother, you’re my hero in disguise.  

May this year bring you more happiness, success, sleepless nights (welcome to parenthood 😆), and endless beautiful moments.  

Love you forever, anna ❤️  
Stay awesome, keep smiling, and don’t forget — I’m still your favorite sibling 😉✨  

💖 From your loving sister 💖`;

let i = 0;

function typeWriter(){
  if(i < text.length){
    document.getElementById("typing").innerHTML += text.charAt(i);
    i++;
    setTimeout(typeWriter, 25);
  }
}
typeWriter();

// Enable music after first click
document.body.addEventListener("click", function enableAudio() {
  const music = document.getElementById("bgMusic");
  music.muted = false;
  music.play();
  document.body.removeEventListener("click", enableAudio);
});

// Button → play video + stop music + resume after
function showVideo(){
  const videoBox = document.getElementById("videoBox");
  const music = document.getElementById("bgMusic");
  const video = document.getElementById("videoMessage");

  music.pause();

  videoBox.style.display = "block";
  videoBox.scrollIntoView({ behavior: "smooth" });

  video.play();

  video.onended = function(){
    music.currentTime = 0;
    music.play();
  };
}

// BUBBLES
const bubbleContainer = document.querySelector(".bubbles");

for(let i=0;i<25;i++){
  let b = document.createElement("span");
  b.style.left = Math.random()*100 + "%";
  b.style.animationDuration = (10 + Math.random()*10) + "s";
  bubbleContainer.appendChild(b);
}