/* ============================
   Dynamic Background Parallax
============================ */
document.addEventListener("mousemove", (e) => {
  const { innerWidth, innerHeight } = window;
  const x = (e.clientX / innerWidth - 0.5) * 20;
  const y = (e.clientY / innerHeight - 0.5) * 20;

  document.body.style.backgroundPosition = `${x}px ${y}px, ${x}px ${y}px`;
});

/* ============================
   Terminal Typing Effect
   (Reusable Function)
============================ */
function runTerminalEffect(elementId, lines, speed = 50, pause = 400) {
  const target = document.getElementById(elementId);
  if (!target) return;

  let lineIndex = 0;
  let charIndex = 0;

  function typeLine() {
    if (lineIndex < lines.length) {
      if (charIndex < lines[lineIndex].length) {
        target.textContent += lines[lineIndex][charIndex];
        charIndex++;
        setTimeout(typeLine, speed);
      } else {
        target.textContent += "\n";
        charIndex = 0;
        lineIndex++;
        setTimeout(typeLine, pause);
      }
    } else {
      const cursor = document.createElement("span");
      cursor.classList.add("cursor");
      target.appendChild(cursor);
    }
  }
  typeLine();
}

/* ============================
   Home Page Terminal Effect
============================ */
document.addEventListener("DOMContentLoaded", () => {
  if (document.getElementById("terminal-output")) {
    const lines = [
      "root@kali:~$ whoami",
      "Kelvin Wanyama",
      "",
      "root@kali:~$ echo \"Cybersecurity Analyst | Web Developer | Tech Explorer\"",
      "Cybersecurity Analyst | Web Developer | Tech Explorer",
      "",
      "root@kali:~$"
    ];
    runTerminalEffect("terminal-output", lines);
  }
});

/* ============================
   Skills Page Terminal Effect
============================ */
document.addEventListener("DOMContentLoaded", () => {
  if (document.getElementById("skills-terminal")) {
    const lines = [
      "root@kali:~$ cat skills.txt",
      "💻 Web Development (HTML5, CSS3, JS)",
      "🔒 Cybersecurity Analysis & Threat Detection",
      "🐧 Linux Administration (Kali, Ubuntu)",
      "⚡ Penetration Testing & Digital Forensics",
      "☁️ Cloud Security (AWS, GCP)",
      "🛠 IT Support & Systems Management",
      "",
      "root@kali:~$"
    ];
    runTerminalEffect("skills-terminal", lines);
  }
});

/* ============================
   Contact Page Terminal Effect
============================ */
document.addEventListener("DOMContentLoaded", () => {
  if (document.getElementById("contact-terminal")) {
    const lines = [
      "root@kali:~$ cat contact.txt",
      "Name: Kelvin Wanyama",
      "Phone:+254110536267",
      "Email: kelvinwanyama25@gmail.com",
      "GitHub: https://github.com/Leitearts",
      "LinkedIn: https://linkedin.com/in/kelvin-wanyama",
      "",
      "root@kali:~$ echo \"Type your message in the form below\"",
      "Type your message in the form below",
      "",
      "root@kali:~$"
    ];
    runTerminalEffect("contact-terminal", lines);
  }
});

/* ============================
   Contact Form Logic
============================ */
document.addEventListener("DOMContentLoaded", () => {
  const contactForm = document.querySelector(".contact-form");
  const contactTerminal = document.getElementById("contact-terminal");

  if (contactForm && contactTerminal) {
    contactForm.addEventListener("submit", (e) => {
      e.preventDefault();

      const name = contactForm.querySelector("input[type='text']").value.trim();
      const email = contactForm.querySelector("input[type='email']").value.trim();
      const message = contactForm.querySelector("textarea").value.trim();

      if (!name || !email || !message) {
        contactTerminal.textContent += "\nError: Missing required fields\nroot@kali:~$ ";
        return;
      }

      if (!/^[^@]+@[^@]+\.[^@]+$/.test(email)) {
        contactTerminal.textContent += `\nError: Invalid email format for ${email}\nroot@kali:~$ `;
        return;
      }

      const successMsg = [
        "",
        `root@kali:~$ echo "Sending message from ${name} <${email}>"`,
        `Sending message from ${name} <${email}>`,
        "",
        "root@kali:~$ echo \"Message content:\"",
        message,
        "",
        "root@kali:~$ echo \"Message sent successfully ✔\"",
        "Message sent successfully ✔",
        "",
        "root@kali:~$"
      ];

      contactTerminal.textContent += "\n" + successMsg.join("\n");
      contactForm.reset();
    });
  }
});

/* ============================
   Project Card Glow Effect
============================ */
document.addEventListener("DOMContentLoaded", () => {
  const cards = document.querySelectorAll(".project-card");
  if (cards.length) {
    cards.forEach(card => {
      card.addEventListener("click", () => {
        card.classList.add("active-glow");
        setTimeout(() => card.classList.remove("active-glow"), 1000);
      });
    });
  }
});

// Inject CSS for glow effect dynamically
const style = document.createElement("style");
style.innerHTML = `
  .active-glow {
    box-shadow: 0 0 30px rgba(0, 170, 255, 1) !important;
  }
`;
document.head.appendChild(style);
