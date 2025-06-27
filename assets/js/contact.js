// contact.js
document.addEventListener("DOMContentLoaded", function () {
  const YOUR_SERVICE_ID = "service_16z6we9";
  const YOUR_TEMPLATE_ID = "template_i3dgz7v";
  const YOUR_PUBLIC_KEY = "thAvKbb0JP7ANYlbp";
  emailjs.init(YOUR_PUBLIC_KEY); // Replace

  const form = document.getElementById("contact-form");
  const status = document.getElementById("form-status");

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    status.textContent = "Sending...";
    status.style.color = "#555";

    emailjs
      .sendForm(YOUR_SERVICE_ID, YOUR_TEMPLATE_ID, this)
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
