const slider = document.querySelector('.slider');
const toggleButton = document.getElementById('toggleButton');
let slidePosition = 0;

toggleButton.addEventListener('click', () => {
    if (slidePosition === 0) {
        slidePosition = -100;
        toggleButton.textContent = 'Visión';
    } else if(slidePosition === -100) {
        slidePosition = -200;
        toggleButton.textContent = 'Quienes somos';
    }
    else{
        slidePosition = 0;
        toggleButton.textContent = 'Misión';
    }
    slider.style.transform = `translateX(${slidePosition}%)`;
});