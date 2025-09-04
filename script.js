document.getElementById("resumeForm").addEventListener("submit", function(e) {
  e.preventDefault();
  
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const phone = document.getElementById("phone").value;
  const summary = document.getElementById("summary").value;
  const education = document.getElementById("education").value;
  const skills = document.getElementById("skills").value;
  const experience = document.getElementById("experience").value;
  const projects = document.getElementById("projects").value;
  const certifications = document.getElementById("certifications").value;

  
  const output = `
    <h2 class="text-primary">${name}</h2>
    <p><strong>Email:</strong> ${email} | <strong>Phone:</strong> ${phone}</p>

    <h3>Executive Summary</h3>
    <p>${summary}</p>

    <h3>Education</h3>
    <p>${education}</p>

    <h3>Skills</h3>
    <p>${skills}</p>

    <h3>Experience</h3>
    <p>${experience}</p>

    <h3>Projects</h3>
    <p>${projects}</p>

    <h3>Certifications</h3>
    <p>${certifications}</p>
  `;

  const resumeOutput = document.getElementById("resumeOutput");
  resumeOutput.innerHTML = output;
  resumeOutput.classList.add("animate-fade-up");
});
document.getElementById("resumeForm").addEventListener("submit", function(e) {
  e.preventDefault();
  
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const phone = document.getElementById("phone").value;
  const summary = document.getElementById("summary").value;
  const education = document.getElementById("education").value;
  const skills = document.getElementById("skills").value;
  const experience = document.getElementById("experience").value;
  const projects = document.getElementById("projects").value;
  const certifications = document.getElementById("certifications").value;
  const output = `
    <h2 class="text-primary">${name}</h2>
    <p><strong>Email:</strong> ${email} | <strong>Phone:</strong> ${phone}</p>

    <h3>Executive Summary</h3>
    <p>${summary}</p>

    <h3>Education</h3>
    <p>${education}</p>

    <h3>Skills</h3>
    <p>${skills}</p>

    <h3>Experience</h3>
    <p>${experience}</p>

    <h3>Projects</h3>
    <p>${projects}</p>

    <h3>Certifications</h3>
    <p>${certifications}</p>
  `;

  const resumeOutput = document.getElementById("resumeOutput");
  resumeOutput.innerHTML = output;
  resumeOutput.classList.add("animate-fade-up");
});

document.getElementById("downloadBtn").addEventListener("click", function () {
  const element = document.getElementById("resumeOutput");
  const opt = {
    margin:       0.5,
    filename:     'My_Resume.pdf',
    image:        { type: 'jpeg', quality: 0.98 },
    html2canvas:  { scale: 2 },
    jsPDF:        { unit: 'in', format: 'a4', orientation: 'portrait' }
  };
  html2pdf().from(element).set(opt).save();
});

