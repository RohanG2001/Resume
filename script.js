// Function to check the screen width and show an alert if on mobile
function checkScreenWidth() {
    if (window.innerWidth <= 1200) { // 768px is a common breakpoint for mobile devices
        if (confirm("This site is designed for desktop use only. Click ok download Resume?")) {
            window.location.href = 'images/Screenshot 2024-06-12 161811.png'; // Replace with the actual path to your CV
        }
    }
}

// Run the check on page load
window.onload = checkScreenWidth;

// Run the check whenever the window is resized
window.onresize = checkScreenWidth;


function showImage(imgId) {
    const images = document.querySelectorAll('.hover-img');
    images.forEach(img => img.style.display = 'none');
    document.getElementById('hover-images').style.display = 'block';
    document.getElementById(imgId).style.display = 'block';
}

function hideImage() {
    const images = document.querySelectorAll('.hover-img');
    images.forEach(img => img.style.display = 'none');
    document.getElementById('hover-images').style.display = 'none';
} 

AOS.init();

function removeAOS() {
    const elements = document.querySelectorAll('[data-aos]');
    elements.forEach(el => el.removeAttribute('data-aos'));
}

if (window.innerWidth <= 768) {
    removeAOS();
}

window.addEventListener('resize', () => {
    if (window.innerWidth <= 768) {
        removeAOS();
    }
});