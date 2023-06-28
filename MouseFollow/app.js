//--> Get blob area for mouseFollow
const blob = document.getElementById("blob");

//--> show blob on mouseenter 
document.body.onmouseenter = event => {
    blob.style.display = 'inline-block'
}

//--> Here you can Detect mouse X,Y inside container using EventListerer
// const container = document.getElementById('blobContainer');
// container.addEventListener('mousemove', moveBlob);

// ! Safari Animation API Compatibilty Issue 

// * Detect Safari since it has animation glitch
let userAgentString = navigator.userAgent;
let safariAgent = userAgentString.indexOf("Safari") > -1;
let chromeAgent = userAgentString.indexOf("Chrome") > -1;

// * Chrome can show as safari so clean it
if ((chromeAgent) && (safariAgent)) safariAgent = false;
// console.log("🚀 ~ file: app.js:2 ~ safariAgent:", safariAgent);

// * Safari Animation Function
function runAnimationSafari() {
    document.body.onmousemove = (event) => {
        const {clientX, clientY} = event
        const position = {
            left: `${clientX}px`,
            top: `${clientY}px`,
        };
        const timiming = { delay: 100, duration: 3000, fill: "forwards", easing: "cubic-bezier(0.37, 0, 0.63, 1)"};
        blob.animate(position, timiming)
        .onfinish = () => {
            blob.style.left = `${clientX}px`;
            blob.style.top = `${clientY}px`;
        };
    }
}

// * Check for Safari statement
if (safariAgent) {
    console.log("safari");
    runAnimationSafari();
}

//--> Detect mouse X,Y on docuemnt body -> aka everywhere
document.body.onpointermove = (event) => {
    const { clientX, clientY } = event;
//--> Animated movement
    blob.animate({
        left: `${clientX}px`,
        top: `${clientY}px`,
    }, { duration: 2000, iterations: 1, fill: "forwards", easing: "cubic-bezier(0.37, 0, 0.63, 1)"});
}

// * --> Fade Out animation for when mouse leaves element
// const fadeOut = blob.animate([
//     { opacity: 1 },
//     { opacity: 0}
// ],
// { 
//     duration: 300,
// });

// * --> hide blob on mouseleave 
// document.body.onmouseleave = event => {
//     fadeOut.play();
//     fadeOut.onfinish = () => {
//         blob.style.display = 'none'
//     }
// }
