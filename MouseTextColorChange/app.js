// Get the circle element
const circle = document.getElementById("hoverCircle");

document.body.onmousemove = (event) => {
    const { clientX, clientY } = event;
    // console.log("🚀 ~ file: app.js:6 ~ clientX, clientY:", clientX, clientY)
    
    // circle.style.left = `${clientX}px`;
    // circle.style.top = `${clientY}px`;
    circle.animate({
        left: `${clientX}px`,
        top: `${clientY}px`,
    }, {
        duration: 200,
        easing: "cubic-bezier(0.37, 0, 0.63, 1)"
    });
}
