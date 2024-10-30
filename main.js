// Capture all inputs
var nameInput = document.getElementById("name");
var emailInput = document.getElementById("email");
var phoneInput = document.getElementById("phone");
var skillsInput = document.getElementById("skills");
var educationInput = document.getElementById("education");
var experienceInput = document.getElementById("experience");
var photoInput = document.getElementById("photo");
// Preview elements
var previewPhoto = document.getElementById("preview-photo");
var previewName = document.getElementById("preview-name");
var previewEmail = document.getElementById("preview-email");
var previewPhone = document.getElementById("preview-phone");
var previewSkills = document.getElementById("preview-skills");
var previewEducation = document.getElementById("preview-education");
var previewExperience = document.getElementById("preview-experience");
var resumeSection = document.getElementById("resume-section");
// Update resume preview and display it
function updateResumePreview() {
    previewName.textContent = nameInput.value || "[Your Name]";
    previewEmail.textContent = emailInput.value || "[Your Email]";
    previewPhone.textContent = phoneInput.value || "[Your Phone]";
    // Update skills
    previewSkills.innerHTML = "";
    var skills = skillsInput.value.split(",");
    skills.forEach(function (skill) {
        var li = document.createElement("li");
        li.textContent = skill.trim();
        previewSkills.appendChild(li);
    });
    previewEducation.textContent = educationInput.value || "[Your Education]";
    previewExperience.textContent = experienceInput.value || "[Your Experience]";
    // Show the resume section
    resumeSection.style.display = "block";
}
// Preview the uploaded photo
photoInput.addEventListener("change", function (event) {
    var _a;
    var target = event.target;
    var file = (_a = target.files) === null || _a === void 0 ? void 0 : _a[0];
    if (file) {
        var reader = new FileReader();
        reader.onload = function (e) {
            var _a;
            if ((_a = e.target) === null || _a === void 0 ? void 0 : _a.result) {
                previewPhoto.src = e.target.result;
                previewPhoto.style.display = "block";
            }
        };
        reader.readAsDataURL(file);
    }
});
// Attach event listener to generate resume on button click
var generateResumeBtn = document.getElementById("generate-resume");
generateResumeBtn.addEventListener("click", updateResumePreview);
