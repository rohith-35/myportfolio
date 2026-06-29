document.addEventListener('DOMContentLoaded', () => {

   
    const toggleBtn = document.createElement('button');
    toggleBtn.innerText = '🌓 Toggle Theme';
    toggleBtn.id = 'theme-toggle';
    
    const stickyContainer = document.querySelector('.profile-sticky');
    if (stickyContainer) {
        stickyContainer.appendChild(toggleBtn);
    }

    toggleBtn.addEventListener('click', () => {
        document.body.classList.toggle('dark-theme');
    });

    
    const showContactBtn = document.getElementById('show-contact-btn');
    const contactPopup = document.getElementById('contact-popup');

    if (showContactBtn && contactPopup) {
        showContactBtn.addEventListener('click', () => {
            if (contactPopup.style.display === 'block') {
                contactPopup.style.display = 'none';
                showContactBtn.innerText = 'Quick Connect';
            } else {
                contactPopup.style.display = 'block';
                showContactBtn.innerText = 'Close Details';
            }
        });
    }

   
    const contactForm = document.getElementById('portfolio-contact-form');

    if (contactForm) {
        contactForm.addEventListener('submit', (event) => {
            event.preventDefault();

            const name = document.getElementById('form-name').value;
            const email = document.getElementById('form-email').value;
            const phone = document.getElementById('form-phone').value;
            const message = document.getElementById('form-message').value;

            const structuredAlert = 
                `Form Submitted Successfully!\n\n` 
                

            alert(structuredAlert);
            contactForm.reset();
        });
    }
});