// Mobile menu toggle
const dropdownBtn = document.querySelector('.dropbtn');
const dropdown = document.querySelector('.dropdown');

dropdownBtn.addEventListener('click', (e) => {
    e.stopPropagation(); // Prevent event from bubbling up
    dropdown.classList.toggle('active');
});

// Close dropdown when clicking outside
document.addEventListener('click', (e) => {
    if (!dropdown.contains(e.target)) {
        dropdown.classList.remove('active');
    }
});

// Close dropdown when a link is clicked
const dropdownLinks = document.querySelectorAll('.dropdown-content a');
dropdownLinks.forEach(link => {
    link.addEventListener('click', () => {
        dropdown.classList.remove('active');
    });
});