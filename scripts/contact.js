let emailForm = document.getElementById("contact-form");
let nameInput = document.getElementById("name");
let emailInput = document.getElementById("email");
let messageInput = document.getElementById("message");
let hamburgerMenu = document.querySelector(".contact-hamburger");
let navbar = document.querySelector(".contact-navbar ul");

hamburgerMenu.addEventListener("click", () => {
    hamburgerMenu.classList.toggle("visible");
    navbar.classList.toggle("visible");
});

emailForm.addEventListener("submit", (e) => {
    e.preventDefault();
    sendEmail();
});

function sendEmail() {
    let emailTemplate = {
        to_name: "Jaipreet",
        from_name: nameInput.value.trim(),
        from_email: emailInput.value.trim(),
        message: messageInput.value.trim(),
    };

    if (validateForm()) {
        emailjs
            .send("service_9qw0ldh", "template_aoz8agf", emailTemplate)
            .then((res) => {
                console.log(res);
                if (res.status == 200) {
                    successToast = document.querySelector(
                        ".contact-response.success"
                    );
                    successToast.style.display = "flex";

                    nameInput.value = "";
                    emailInput.value = "";
                    messageInput.value = "";

                    nameInput.classList.value = "";
                    emailInput.classList.value = "";
                    messageInput.classList.value = "";
                } else {
                    errorToast = document.querySelector(
                        ".contact-response.error"
                    );
                    errorToast.style.display = "flex";
                }
            });
    }
}

function validateForm() {
    const emailRegEx =
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    let validName = false;
    let validEmail = false;
    let validMessage = false;

    if (nameInput.value === "") {
        nameInput.classList.remove("input-success");
        nameInput.classList.add("input-error");
    } else {
        nameInput.classList.remove("input-error");
        nameInput.classList.add("input-success");
        validName = true;
    }

    if (
        emailInput.value === "" ||
        !emailRegEx.test(String(emailInput.value).toLowerCase())
    ) {
        emailInput.classList.remove("input-success");
        emailInput.classList.add("input-error");
    } else {
        emailInput.classList.remove("input-error");
        emailInput.classList.add("input-success");
        validEmail = true;
    }

    if (message.value === "") {
        message.classList.remove("input-success");
        message.classList.add("input-error");
    } else {
        message.classList.remove("input-error");
        message.classList.add("input-success");
        validMessage = true;
    }

    return validName && validEmail && validMessage;
}
