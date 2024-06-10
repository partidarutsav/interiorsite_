function toggleMenu() {
    const menu = document.querySelector('nav ul');
    menu.classList.toggle('show');
}
document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();

    let name = document.getElementById('name').value;
    let email = document.getElementById('email').value;
    let message = document.getElementById('message').value;

    if (name === '' || email === '' || message === '') {
        alert('All fields are required!');
        return;
    }

    document.getElementById('responseMessage').classList.remove('hidden');
    document.getElementById('responseMessage').innerText = 'Thank you for your message, ' + name + '! We will get back to you soon.';

    // Clear the form
    document.getElementById('contactForm').reset();
});
