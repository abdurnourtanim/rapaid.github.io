// this code for navbar toggle on scroll time
window.addEventListener("scroll", function() {
    let navbar = document.querySelector("nav");
    navbar.classList.toggle("sticky", window.scrollY > 255);
});

// div Scrool Animation Plugin
AOS.init({
    offset: 300,
    duration: 1000
});

//  jQuery Number Counting Plugin
$('.count-number').counterUp({
    delay: 10,
    time: 2000
})

// form validation
const form = document.getElementById('form')
form.addEventListener('submit', function(e) {
    e.preventDefault()
    let formData = {}
    let isValid = false;
    [...this.elements].forEach(el => {
        if (el.type !== 'submit') {
            isValid = formValidator(el)
            if (isValid) {
                formData[el.name] = el.value
            } else {
                el.classList.add('is-invalid')
            }
        }
    })
    if (isValid) {
        console.log(formData)
        this.reset()
    }
})

function formValidator(el) {
    if (!el.value) {
        return false
    }

    return true
}
