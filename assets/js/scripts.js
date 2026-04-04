// Annotate
import { annotate } from "https://unpkg.com/rough-notation?module";

const nameElement = document.querySelector("#my-name");
const letsconnectElement = document.querySelector("#lets-connect");

if (nameElement) {
  const n1 = annotate(nameElement, {
    type: "underline",
    color: "rgb(0, 195, 175)",
    strokeWidth: 2,
  });
  n1.show();
}

if (letsconnectElement) {
  const n2 = annotate(letsconnectElement, {
    type: "highlight",
    color: "rgb(0, 195, 175)",
    strokeWidth: 2,
  });
  n2.show();
}

// Email JS

document.getElementById("sendBtn").onclick = function () {
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const subject = document.getElementById("subject").value;
  const message = document.getElementById("message").value;

  if (name === "" || subject === "" || message === "") {
    alert("You missed something. Try again.");
  } else {
    if (!email.includes(".") || !email.includes("@")) {
      alert("Please use a valid email address.");
    } else {
      const templateParams = {
        name: document.querySelector("#name").value,
        email: document.querySelector("#email").value,
        subject: document.querySelector("#subject").value,
        message: document.querySelector("#message").value,
      };

      emailjs
        .send("service_2oz0ffu", "template_x7b33bd", templateParams)
        .then(() => {
          alert("Email sent successfully!");
          document.getElementById("contactForm").reset();
        })
        .catch((error) => {
          console.log("Error sending email:", error);
          alert("Failed to send email. Please try again.");
        });
    }
  }
};
