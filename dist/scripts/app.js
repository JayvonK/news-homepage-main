let background = document.getElementById("background");
let xBtn = document.getElementById("xBtn");
let navBtn = document.getElementById("navBtn");
let sBar = document.getElementById("sBar");

navBtn.addEventListener('click', (event) => {
    sBar.className = "fixed top-0 right-0 z-40 w-64 h-screen transition-transform";
    background.className = "bg-gray-900/50 dark:bg-gray-900/80 fixed inset-0 z-30";
})

xBtn.addEventListener('click', (event) => {
    sBar.className = "fixed top-0 right-0 z-40 w-64 h-screen transition-transform hidden";
    background.className = "bg-gray-900/50 dark:bg-gray-900/80 fixed inset-0 z-30 hidden";
})

background.addEventListener('click', (event) => {
    sBar.className = "fixed top-0 right-0 z-40 w-64 h-screen transition-transform hidden";
    background.className = "bg-gray-900/50 dark:bg-gray-900/80 fixed inset-0 z-30 hidden";
})