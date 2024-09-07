// index.ts
// Get references to the skills section and toggle button
const toggleSkillsBtn = document.getElementById('toggle-skills-btn') as HTMLButtonElement;
const skillsSection = document.getElementById('skills-section') as HTMLElement;

// Add event listener to the button
toggleSkillsBtn.addEventListener('click', () => {
    // Toggle the display of the skills section
    if (skillsSection.style.display === 'none') {
        skillsSection.style.display = 'block';
    } else {
        skillsSection.style.display = 'none';
    }
});
