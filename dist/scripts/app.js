let background = document.getElementById("background");
let xBtn = document.getElementById("xBtn");
let navBtn = document.getElementById("navBtn");
let sBar = document.getElementById("sBar");
let navImg = document.getElementById("navImg");
let xImg = document.getElementById("xImg");

navBtn.addEventListener('click', (event) => {
    sBar.className = "fixed top-0 right-0 z-40 w-[250px] h-screen transition-transform";
    background.className = "bg-gray-900/50 dark:bg-gray-900/80 fixed inset-0 z-30";
})

navBtn.addEventListener('mouseover', (event) => {
    navImg.setAttribute("fill", "hsl(5, 85%, 63%)")
})

navBtn.addEventListener('mouseleave', (event) => {
    navImg.setAttribute("fill", "hsl(240, 100%, 5%)")
})

xBtn.addEventListener('mouseover', (event) => {
    xImg.setAttribute("fill", "hsl(5, 85%, 63%)")
})

nBtn.addEventListener('mouseleave', (event) => {
    xImg.setAttribute("fill", "hsl(240, 100%, 5%)")
})

xBtn.addEventListener('click', (event) => {
    sBar.className = "fixed top-0 right-0 z-40 w-[250px] h-screen transition-transform hidden";
    background.className = "bg-gray-900/50 dark:bg-gray-900/80 fixed inset-0 z-30 hidden";
})

background.addEventListener('click', (event) => {
    sBar.className = "fixed top-0 right-0 z-40 w-[250px] h-screen transition-transform hidden";
    background.className = "bg-gray-900/50 dark:bg-gray-900/80 fixed inset-0 z-30 hidden";
})