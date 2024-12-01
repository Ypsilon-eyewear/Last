// Example of JavaScript for the luxury eyewear website

document.addEventListener("DOMContentLoaded", function () {
    // Handle the language switcher logic
    const languageSwitcher = document.getElementById('language-switcher');
    languageSwitcher.addEventListener('change', function() {
        const selectedLanguage = languageSwitcher.value;
        changeLanguage(selectedLanguage);
    });

    // Function to change the language of the page
    function changeLanguage(language) {
        // Logic to change the content language, e.g., using JSON files or directly modifying content
        if (language === 'en') {
            // English content logic
            console.log("Switched to English");
        } else if (language === 'ar') {
            // Arabic content logic
            console.log("Switched to Arabic");
        } else if (language === 'de') {
            // German content logic
            console.log("Switched to German");
        } else if (language === 'cz') {
            // Czech content logic
            console.log("Switched to Czech");
        }
        // You can use dynamic translation tools like Google Translate API or other methods.
    }

    // Handle form submission for contact or consultation
    const contactForm = document.getElementById('contact-form');
    contactForm.addEventListener('submit', function(event) {
        event.preventDefault();  // Prevent the form from refreshing the page
        const formData = new FormData(contactForm);
        // Send the data to the server or use it for processing
        console.log("Form submitted", formData);
        alert("Thank you for contacting us!");
    });

    // Scroll-to-top button functionality
    const scrollToTopButton = document.getElementById('scroll-to-top');
    window.addEventListener('scroll', function() {
        if (window.scrollY > 300) {
            scrollToTopButton.style.display = 'block';
        } else {
            scrollToTopButton.style.display = 'none';
        }
    });

    scrollToTopButton.addEventListener('click', function() {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
    
});