/* ==========================================================
   HAPPY BIRTHDAY
   VERSION 2
   PART 1
==========================================================*/

// ==========================================================
// PASSWORD
// ==========================================================

const PASSWORD = "210625";

// ==========================================================
// SCREENS
// ==========================================================

const loadingScreen = document.getElementById("loadingScreen");
const passwordScreen = document.getElementById("passwordScreen");
const heartScreen = document.getElementById("heartScreen");
const birthdayScreen = document.getElementById("birthdayScreen");
const cakeScreen = document.getElementById("cakeScreen");
const wishScreen = document.getElementById("wishScreen");
const balloonScreen = document.getElementById("balloonScreen");
const surpriseScreen = document.getElementById("surpriseScreen");

// ==========================================================
// PASSWORD INPUT
// ==========================================================

const pwd = document.getElementById("pwd");
const dots = document.querySelectorAll("#pinDots span");
const message = document.getElementById("message");

// ==========================================================
// SHOW SCREEN
// ==========================================================

function hideAllScreens(){

    document.querySelectorAll(".screen").forEach(screen=>{

        screen.classList.remove("active");

    });

}

function showScreen(screen){

    hideAllScreens();

    screen.classList.add("active");

}

// ==========================================================
// LOADING
// ==========================================================

window.onload=function(){

    createSparkles();

    setTimeout(()=>{

        showScreen(passwordScreen);

    },3000);

}

// ==========================================================
// SPARKLES
// ==========================================================

function createSparkles(){

    const container=document.getElementById("sparkContainer");

    if(!container) return;

    for(let i=0;i<45;i++){

        const spark=document.createElement("div");

        spark.className="spark";

        spark.style.left=Math.random()*100+"vw";

        spark.style.animationDuration=

        (5+Math.random()*8)+"s";

        spark.style.animationDelay=

        Math.random()*5+"s";

        spark.style.opacity=Math.random();

        container.appendChild(spark);

    }

}

// ==========================================================
// PASSWORD KEYPAD
// ==========================================================

function pressKey(num){

    if(pwd.value.length>=6) return;

    pwd.value+=num;

    updateDots();

}

function deletePin(){

    pwd.value=pwd.value.slice(0,-1);

    updateDots();

}

function clearPin(){

    pwd.value="";

    updateDots();

}

// ==========================================================
// DOTS
// ==========================================================

function updateDots(){

    dots.forEach((dot,index)=>{

        if(index<pwd.value.length){

            dot.classList.add("active");

        }

        else{

            dot.classList.remove("active");

        }

    });

}

// ==========================================================
// SHAKE
// ==========================================================

function shakeCard(){

    const card=document.querySelector(".glassCard");

    card.animate([

        {transform:"translateX(-10px)"},

        {transform:"translateX(10px)"},

        {transform:"translateX(-10px)"},

        {transform:"translateX(10px)"},

        {transform:"translateX(0)"}

    ],{

        duration:450

    });

}

// ==========================================================
// PASSWORD CHECK
// ==========================================================

function checkPassword(){

    if(pwd.value!==PASSWORD){

        message.innerHTML="Wrong Password ❤️";

        pwd.value="";

        updateDots();

        shakeCard();

        return;

    }

    message.innerHTML="";

    // Gold flash

    document.querySelector(".glassCard").style.boxShadow=

    "0 0 80px gold";

    // Hearts in dots

    dots.forEach(dot=>{

        dot.innerHTML="❤";

        dot.style.color="#ff3b5f";

        dot.style.fontSize="14px";

    });

    setTimeout(()=>{

        showHeart();

    },900);

}

// ==========================================================
// HEART
// ==========================================================

function showHeart(){

    showScreen(heartScreen);

    startHeartAnimation();

}
/* ==========================================================
   PART 2
   HEART • BIRTHDAY • TYPEWRITER
==========================================================*/

// ----------------------------------------------------------
// Birthday Message
// ----------------------------------------------------------

const birthdayMessage = `Happy Birthday, Kanna ❤️

I wish I could celebrate this day by your side,
but until then...

May God bless you on your birthday with
happiness,
good health,
success,
and everything your heart dreams of.

I love you forever. ❤️`;

// ----------------------------------------------------------
// Heart Animation
// ----------------------------------------------------------

function startHeartAnimation(){

    const heart=document.getElementById("heartImage");

    // Beat 3 times

    gsap.fromTo(

        heart,

        {
            scale:0.8
        },

        {

            scale:1.08,

            repeat:5,

            yoyo:true,

            duration:.45,

            ease:"power1.inOut"

        }

    );

    // Gold burst after beats

    setTimeout(()=>{

        goldBurst();

    },2800);

}

// ----------------------------------------------------------
// Gold Burst
// ----------------------------------------------------------

function goldBurst(){

    confetti({

        particleCount:180,

        spread:150,

        origin:{y:.45},

        colors:[
            "#FFD700",
            "#FFF5C3",
            "#ffffff"
        ]

    });

    // Fade heart

    gsap.to("#heartImage",{

        scale:1.8,

        opacity:0,

        duration:1

    });

    // Show title

    setTimeout(()=>{

        showBirthdayReveal();

    },900);

}

// ----------------------------------------------------------
// Birthday Reveal
// ----------------------------------------------------------

function showBirthdayReveal(){

    gsap.to(".birthdayTitle",{

        opacity:1,

        y:-20,

        duration:1

    });

    gsap.to(".birthdayName",{

        opacity:1,

        y:-10,

        delay:.4,

        duration:1

    });

    // Red hearts

    floatingHearts();

    // Confetti

    confetti({

        particleCount:250,

        spread:180,

        origin:{y:.3}

    });

    // Go next

    setTimeout(()=>{

        showScreen(birthdayScreen);

        startTyping();

    },3500);

}

// ----------------------------------------------------------
// Floating Hearts
// ----------------------------------------------------------

function floatingHearts(){

    const interval=setInterval(()=>{

        const heart=document.createElement("div");

        heart.className="floating-heart";

        heart.innerHTML="❤️";

        heart.style.left=Math.random()*100+"vw";

        heart.style.fontSize=(18+Math.random()*25)+"px";

        heart.style.animationDuration=(5+Math.random()*5)+"s";

        document.body.appendChild(heart);

        setTimeout(()=>{

            heart.remove();

        },9000);

    },300);

    // Stop after 10 sec

    setTimeout(()=>{

        clearInterval(interval);

    },10000);

}

// ----------------------------------------------------------
// Typewriter
// ----------------------------------------------------------

function startTyping(){

    const box=document.getElementById("typewriter");

    box.innerHTML="";

    let i=0;

    const timer=setInterval(()=>{

        box.innerHTML+=birthdayMessage.charAt(i);

        i++;

        if(i>=birthdayMessage.length){

            clearInterval(timer);

            showQuestion();

        }

    },32);

}

// ----------------------------------------------------------
// Show Question
// ----------------------------------------------------------

function showQuestion(){

    const q=document.getElementById("questionBox");

    q.style.display="block";

    q.classList.add("fadeIn");

}

// ----------------------------------------------------------
// Funny NO Button
// ----------------------------------------------------------

const noBtn=document.getElementById("noBtn");

if(noBtn){

    noBtn.addEventListener("mouseenter",moveNo);

    noBtn.addEventListener("touchstart",moveNo);

}

function moveNo(){

    const x=Math.random()*240-120;

    const y=Math.random()*120-60;

    noBtn.style.transform=

    `translate(${x}px,${y}px)`;

}

// ----------------------------------------------------------
// YES
// ----------------------------------------------------------

function goToCake(){

    gsap.to("#birthdayScreen",{

        opacity:0,

        duration:.6,

        onComplete(){

            showScreen(cakeScreen);

            gsap.from("#cakeScreen",{

                opacity:0,

                scale:.95,

                duration:.7

            });

        }

    });

}
/* ==========================================================
   PART 3
   CAKE • CANDLE • WISH SCREEN
==========================================================*/

// ----------------------------------------------------------
// Candle Elements
// ----------------------------------------------------------


const smoke = document.getElementById("smoke");



const cake=document.getElementById("cake");

if(cake){

    cake.addEventListener("click",cutCake);

}

function cutCake(){

    confetti({

        particleCount:180,

        spread:120,

        origin:{y:.6}

    });

    cake.style.transform="scale(.92)";

    setTimeout(()=>{

        cake.style.transform="scale(1)";

    },250);

    setTimeout(()=>{

        showScreen(wishScreen);

    },1800);

}

// ----------------------------------------------------------
// Transition
// ----------------------------------------------------------

function transitionToWish(){

    gsap.to("#cakeScreen",{

        opacity:0,

        duration:.8,

        onComplete(){

            showScreen(wishScreen);

            startWishSequence();

        }

    });

}

// ----------------------------------------------------------
// Wish Sequence
// ----------------------------------------------------------

function startWishSequence(){

    const lines=document.querySelectorAll(".wishCard p");

    gsap.set(lines,{

        opacity:0,

        y:25

    });

    lines.forEach((line,index)=>{

        gsap.to(line,{

            opacity:1,

            y:0,

            duration:.9,

            delay:index*1.4

        });

    });

    gsap.from(".wishCard h1",{

        opacity:0,

        scale:.8,

        duration:1

    });

    gsap.from(".wishCard button",{

        opacity:0,

        y:30,

        delay:5.5,

        duration:.8

    });

}

// ----------------------------------------------------------
// Continue Button
// ----------------------------------------------------------

function goToBalloons(){

    gsap.to("#wishScreen",{

        opacity:0,

        duration:.8,

        onComplete(){

            showScreen(balloonScreen);

            startBalloons();

        }

    });

}

// ----------------------------------------------------------
// Balloon Entrance
// ----------------------------------------------------------

function startBalloons(){

    gsap.set(".balloon",{
        opacity:1,
        scale:1
    });

    gsap.from(".balloon",{

        y:250,

        opacity:0,

        stagger:0.3,

        duration:1.3,

        ease:"back.out(1.8)"

    });

}

// ----------------------------------------------------------
// Balloon Messages
// ----------------------------------------------------------

const balloonMessages=[

{

title:"❤️ My Favorite Person",

text:"You make every ordinary day feel extraordinary."

},

{

title:"🌍 No Matter The Distance",

text:"India or Australia, my heart always finds you."

},

{

title:"✨ My Biggest Blessing",

text:"Thank you for being my safe place and my happiness."

},

{

title:"🎂 One More Surprise",

text:"Pop completed... one final surprise is waiting."

}

];

// ----------------------------------------------------------
// Pop Balloon
// ----------------------------------------------------------

let poppedCount=0;

function popBalloon(balloon,index){

    if(balloon.classList.contains("popped")) return;

    balloon.classList.add("popped");

    poppedCount++;

    confetti({

        particleCount:35,

        spread:65,

        origin:{y:.55}

    });

    const title=document.querySelector("#balloonMessage h2");
    const text=document.querySelector("#balloonMessage p");

    title.innerHTML=balloonMessages[index-1].title;
    text.innerHTML=balloonMessages[index-1].text;

    if(poppedCount===4){

        setTimeout(()=>{

            goToEnvelope();

        },2500);

    }

}
/* ==========================================================
   PART 4
   ENVELOPE • LETTER • FINAL ENDING
==========================================================*/

// ----------------------------------------------------------
// Final Letter
// ----------------------------------------------------------

const finalLetter = `To My❤️

Happy Birthday to the most special person in my life.

Even though thousands of kilometres separate us today,
my heart has been closer to yours.

Thank you for every smile,
every conversation,
every laugh,
and every little moment that became my favourite memory.

You are my happiness,
and the best chapter of my life.

I can't wait for the day we celebrate every birthday together.

Until then...

Know that you are deeply loved,
today,
tomorrow,
and always.

Happy Birthday once again.

Forever Yours ❤️`;

// ----------------------------------------------------------
// Envelope
// ----------------------------------------------------------

function goToEnvelope(){

    gsap.to("#balloonScreen",{

        opacity:0,

        duration:.8,

        onComplete(){

            showScreen(surpriseScreen);

            startEnvelope();

        }

    });

}

// ----------------------------------------------------------
// Envelope Animation
// ----------------------------------------------------------

function startEnvelope(){

    const envelope=document.querySelector(".envelope");

    if(!envelope) return;

    gsap.from(envelope,{
        scale:.6,
        opacity:0,
        duration:1.3,
        ease:"back.out(1.7)"
    });

    // Remove old listeners if any
    envelope.onclick = null;

    // Wait for user to tap the envelope
    envelope.onclick = function(){

        envelope.classList.add("open");

        confetti({
            particleCount:180,
            spread:90,
            origin:{y:0.6}
        });

        setTimeout(()=>{
            startLetter();
        },800);

    };

}

// ----------------------------------------------------------
// Letter Typewriter
// ----------------------------------------------------------

function startLetter(){

    const box=document.getElementById("finalLetter");

    if(!box) return;

    box.innerHTML="";

    let i=0;

    const timer=setInterval(()=>{

        box.innerHTML+=finalLetter.charAt(i);

        i++;

        if(i>=finalLetter.length){

            clearInterval(timer);

            revealPhoto();

            finalCelebration();

        }

    },32);

}

// ----------------------------------------------------------
// Reveal Photo
// ----------------------------------------------------------

function revealPhoto(){

    const img=document.querySelector(".finalPhoto");

    if(!img) return;

    setTimeout(()=>{

        img.classList.add("show");

    },800);

}

// ----------------------------------------------------------
// Final Celebration
// ----------------------------------------------------------

function finalCelebration(){

    const duration=6000;

    const end=Date.now()+duration;

    const interval=setInterval(()=>{

        confetti({

            particleCount:12,

            spread:70,

            startVelocity:30,

            origin:{

                x:Math.random(),

                y:Math.random()*0.4

            },

            colors:[

                "#FFD700",

                "#FFFFFF",

                "#FF4D6D",

                "#C9A227"

            ]

        });

        if(Date.now()>end){

            clearInterval(interval);

        }

    },250);

}
const finalScreen = document.getElementById("finalScreen");

function goToFinalScreen(){

    gsap.to("#surpriseScreen",{

        opacity:0,

        duration:1,

        onComplete(){

            showScreen(finalScreen);

            confetti({

                particleCount:300,

                spread:120,

                origin:{y:.6}

            });

        }

    });

}

function restartSurprise(){

    location.reload();

}
// ----------------------------------------------------------
// Floating Hearts Forever
// ----------------------------------------------------------

setInterval(()=>{

    const heart=document.createElement("div");

    heart.className="floating-heart";

    heart.innerHTML=Math.random()>.5 ? "❤️" : "💕";

    heart.style.left=Math.random()*100+"vw";

    heart.style.fontSize=(18+Math.random()*20)+"px";

    heart.style.animationDuration=(6+Math.random()*5)+"s";

    document.body.appendChild(heart);

    setTimeout(()=>{

        heart.remove();

    },11000);

},900);

// ----------------------------------------------------------
// Prevent Image Dragging
// ----------------------------------------------------------

document.querySelectorAll("img").forEach(img=>{

    img.draggable=false;

});

// ----------------------------------------------------------
// Prevent Double Click Zoom (Mobile)
// ----------------------------------------------------------

document.addEventListener("dblclick",e=>{

    e.preventDefault();

});


// ----------------------------------------------------------
// END
// ----------------------------------------------------------

console.log("❤️ Birthday Surprise Loaded Successfully ❤️");