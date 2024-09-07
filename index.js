// index.ts
// Get references to the skills section and toggle button
var toggleSkillsBtn = document.getElementById('toggle-skills-btn');
var skillsSection = document.getElementById('skills-section');
// Add event listener to the button
toggleSkillsBtn.addEventListener('click', function () {
    // Toggle the display of the skills section
    if (skillsSection.style.display === 'none') {
        skillsSection.style.display = 'block';
    }
    else {
        skillsSection.style.display = 'none';
    }
});
