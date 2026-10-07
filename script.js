/* =========================
   MOBILE NAVIGATION
========================= */

function toggleMenu() {

    const navbar = document.getElementById("navbar");

    if (navbar) {
        navbar.classList.toggle("show");
    }
}


/* =========================
   FAQ ACCORDION
========================= */

function toggleFAQ(button) {

    const item = button.parentElement;

    const allItems = document.querySelectorAll(".faq-item");

    allItems.forEach(function(otherItem) {

        if (otherItem !== item) {
            otherItem.classList.remove("open");

            const otherButton =
                otherItem.querySelector("button");

            if (otherButton) {
                const symbol =
                    otherButton.querySelector("span");

                if (symbol) {
                    symbol.textContent = "+";
                }
            }
        }

    });


    item.classList.toggle("open");

    const symbol = button.querySelector("span");

    if (symbol) {

        if (item.classList.contains("open")) {
            symbol.textContent = "−";
        } else {
            symbol.textContent = "+";
        }

    }
}


/* =========================
   CONTACT FORM VALIDATION
========================= */

function validateForm(event) {

    event.preventDefault();

    const name =
        document.getElementById("name");

    const email =
        document.getElementById("email");

    const phone =
        document.getElementById("phone");

    const nameError =
        document.getElementById("nameError");

    const emailError =
        document.getElementById("emailError");

    const phoneError =
        document.getElementById("phoneError");

    const success =
        document.getElementById("formSuccess");


    nameError.textContent = "";
    emailError.textContent = "";
    phoneError.textContent = "";

    success.style.display = "none";


    let valid = true;


    /* NAME */

    if (name.value.trim() === "") {

        nameError.textContent =
            "Please enter your name.";

        valid = false;

    } else if (name.value.trim().length < 2) {

        nameError.textContent =
            "Name must contain at least 2 characters.";

        valid = false;
    }


    /* EMAIL */

    const emailPattern =
        /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (email.value.trim() === "") {

        emailError.textContent =
            "Please enter your email.";

        valid = false;

    } else if (!emailPattern.test(email.value.trim())) {

        emailError.textContent =
            "Please enter a valid email address.";

        valid = false;
    }


    /* PHONE */

    const phonePattern =
        /^[0-9+\-\s]{10,15}$/;

    if (phone.value.trim() === "") {

        phoneError.textContent =
            "Please enter your phone number.";

        valid = false;

    } else if (!phonePattern.test(phone.value.trim())) {

        phoneError.textContent =
            "Please enter a valid phone number.";

        valid = false;
    }


    /* SUCCESS */

    if (valid) {

        success.style.display = "block";

        document.getElementById("contactForm").reset();

        success.scrollIntoView({
            behavior: "smooth",
            block: "center"
        });

    }

    return false;
}


/* =========================
   CLOSE MOBILE MENU
========================= */

document.addEventListener("click", function(event) {

    const navbar =
        document.getElementById("navbar");

    const menuButton =
        document.querySelector(".menu-toggle");

    if (!navbar || !menuButton) {
        return;
    }

    if (
        navbar.classList.contains("show") &&
        !navbar.contains(event.target) &&
        !menuButton.contains(event.target)
    ) {

        navbar.classList.remove("show");

    }

});


/* =========================
   PAGE LOAD
========================= */

document.addEventListener("DOMContentLoaded", function() {

    console.log(
        "Sakthi Dental Clinic website loaded successfully."
    );

});