const uservalue = document.getElementById('result');
function show(value) {
    uservalue.value += value;
}
function clear() {
    uservalue.value = '';
}
function result() {
    try {
        const calc = uservalue.value;
        const result = eval(calc); 
        uservalue.value = result;
    } catch (error) {
        uservalue.value = 'Error';
    }
}

function createStars() {
    const numStars = 70; 
    for (let i = 0; i < numStars; i++) {
        const star = document.createElement('div');
        star.className = 'star';
        star.style.left = `${Math.random() * 100}%`;
        star.style.top = `${Math.random() * 100}%`;
        document.body.appendChild(star);
    }
}

function updateStars() {
    const stars = document.querySelectorAll('.star');
    stars.forEach((star) => {
        const x = Math.random() * 10000 + '%';
        const y = Math.random() * 10000 + '%';
        star.style.transform = `translate(${x}, ${y})`;
    });
}
window.addEventListener('load', createStars);
setInterval(updateStars, 500);