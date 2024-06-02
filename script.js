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