function generateCV(event) {
    event.preventDefault(); // Prevent the default form submission

    // Get values from the form
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const experience = document.getElementById('experience').value;

    // Display the CV
    document.getElementById('output-name').innerText = name;
    document.getElementById('output-email').innerText = email;
    document.getElementById('output-phone').innerText = phone;
    document.getElementById('output-experience').innerText = experience;
    
    // Show CV output
    document.getElementById('cv-form').style.display = 'none';
    document.getElementById('cv-output').style.display = 'block';
}
