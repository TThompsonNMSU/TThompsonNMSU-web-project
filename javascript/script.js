document.addEventListener("DOMContentLoaded", function () {

    const form = document.getElementById("greetingForm");

    form.addEventListener("submit", function (event) {

        event.preventDefault();

        const userName = document.getElementById("username").value;

        const greetingMessage = document.getElementById("greetingMessage");

        if (userName.trim() === "") {

            greetingMessage.textContent = "Please enter your name.";

        } else {

            greetingMessage.textContent =
                "Welcome to the baking portfolio, " + userName + "!";

        }

    });

});