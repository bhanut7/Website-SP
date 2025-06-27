// contact.js
document.addEventListener("DOMContentLoaded", function () {
  emailjs.init('YOUR_PUBLIC_KEY'); // Replace with your EmailJS Public Key

  const form = document.getElementById("contact-form");
  const status = document.getElementById("form-status");

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    // if (!document.getElementById("privacyCheck").checked) {
    //   status.textContent = "Please accept the privacy policy.";
    //   status.style.color = "red";
    //   return;
    // }

    status.textContent = "Sending...";
    status.style.color = "#555";

    emailjs
      .sendForm("YOUR_SERVICE_ID", "YOUR_TEMPLATE_ID", this)
      .then(() => {
        status.textContent = "Message sent successfully!";
        status.style.color = "green";
        form.reset();
      })
      .catch((err) => {
        console.error(err);
        status.textContent = "Failed to send message. Please try again.";
        status.style.color = "red";
      });
  });
});
