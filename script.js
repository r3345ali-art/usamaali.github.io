// Change body background color when scrolling to a section
const sections = document.querySelectorAll('.section');

window.addEventListener('scroll', () => {
    let scrollPos = window.scrollY + window.innerHeight / 2;

    sections.forEach(section => {
        if (scrollPos >= section.offsetTop && scrollPos < section.offsetTop + section.offsetHeight) {
            document.body.style.backgroundColor = window.getComputedStyle(section).backgroundColor;
        }
    });
});
