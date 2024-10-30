// Capture all inputs
const nameInput = document.getElementById("name") as HTMLInputElement;
const emailInput = document.getElementById("email") as HTMLInputElement;
const phoneInput = document.getElementById("phone") as HTMLInputElement;
const skillsInput = document.getElementById("skills") as HTMLInputElement;
const educationInput = document.getElementById("education") as HTMLInputElement;
const experienceInput = document.getElementById("experience") as HTMLTextAreaElement;
const photoInput = document.getElementById("photo") as HTMLInputElement;

// Preview elements
const previewPhoto = document.getElementById("preview-photo") as HTMLImageElement;
const previewName = document.getElementById("preview-name") as HTMLHeadingElement;
const previewEmail = document.getElementById("preview-email") as HTMLParagraphElement;
const previewPhone = document.getElementById("preview-phone") as HTMLParagraphElement;
const previewSkills = document.getElementById("preview-skills") as HTMLUListElement;
const previewEducation = document.getElementById("preview-education") as HTMLParagraphElement;
const previewExperience = document.getElementById("preview-experience") as HTMLParagraphElement;
const resumeSection = document.getElementById("resume-section") as HTMLDivElement;

// Update resume preview and display it
function updateResumePreview(): void {
    previewName.textContent = nameInput.value || "[Your Name]";
    previewEmail.textContent = emailInput.value || "[Your Email]";
    previewPhone.textContent = phoneInput.value || "[Your Phone]";
    
    // Update skills
    previewSkills.innerHTML = "";
    const skills = skillsInput.value.split(",");
    skills.forEach((skill) => {
        const li = document.createElement("li");
        li.textContent = skill.trim();
        previewSkills.appendChild(li);
    });

    previewEducation.textContent = educationInput.value || "[Your Education]";
    previewExperience.textContent = experienceInput.value || "[Your Experience]";

    // Show the resume section
    resumeSection.style.display = "block";
}

// Preview the uploaded photo
photoInput.addEventListener("change", (event: Event) => {
    const target = event.target as HTMLInputElement;
    const file = target.files?.[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = function(e) {
            if (e.target?.result) {
                previewPhoto.src = e.target.result as string;
                previewPhoto.style.display = "block";
            }
        };
        reader.readAsDataURL(file);
    }
});

// Attach event listener to generate resume on button click
const generateResumeBtn = document.getElementById("generate-resume") as HTMLButtonElement;
generateResumeBtn.addEventListener("click", updateResumePreview);



