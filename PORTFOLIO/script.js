function toggleMenu(){
    const menu = document.querySelector(".menu-links")
    const icon = document.querySelector(".second-icon")
    menu.classList.toggle("open")
    icon.classList.toggle("open")
}
function downloadResume(){
const link = document.createElement('a');
link.href = 'resume.pdf';
link.download = 'resume.pdf';
link.click();
}