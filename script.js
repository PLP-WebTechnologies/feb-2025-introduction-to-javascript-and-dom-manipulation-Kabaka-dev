// Task 1: Change text content dynamically
const changeableText = document.getElementById('changeable-text');
const textChangerBtn = document.getElementById('text-changer');

textChangerBtn.addEventListener('click', () => {
    changeableText.textContent = "The text has been changed successfully!";
    changeableText.classList.add('highlight');
});

// Task 2: Modify CSS styles via JavaScript
const styleBox = document.getElementById('style-box');
const colorChangerBtn = document.getElementById('color-changer');

colorChangerBtn.addEventListener('click', () => {
    styleBox.style.backgroundColor = getRandomColor();
    styleBox.style.borderRadius = '50%';
});

styleBox.addEventListener('mouseover', () => {
    styleBox.style.transform = 'scale(1.1)';
});

styleBox.addEventListener('mouseout', () => {
    styleBox.style.transform = 'scale(1)';
});

// Task 3: Add/remove elements dynamically
const elementContainer = document.getElementById('element-container');
const toggleElementBtn = document.getElementById('toggle-element');
let newElementExists = false;
let newElement = null;

toggleElementBtn.addEventListener('click', () => {
    if (!newElementExists) {
        newElement = document.createElement('p');
        newElement.textContent = 'New dynamically added element!';
        elementContainer.appendChild(newElement);
        toggleElementBtn.textContent = 'Remove Element';
    } else {
        elementContainer.removeChild(newElement);
        toggleElementBtn.textContent = 'Add Element';
    }
    newElementExists = !newElementExists;
});

// Helper function for random colors
function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}