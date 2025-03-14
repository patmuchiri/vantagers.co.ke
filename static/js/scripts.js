document.addEventListener("DOMContentLoaded", function () {
    // Smooth scroll for navigation links
    const navLinks = document.querySelectorAll('.nav-links a');

    navLinks.forEach(link => {
        link.addEventListener('click', function (event) {
            // Check if the link is an internal anchor (starts with #)
            const href = link.getAttribute('href');
            if (href.startsWith('#')) {
                event.preventDefault(); // Prevent default anchor behavior

                // Smooth scroll to the target section
                const targetSection = document.querySelector(href);
                if (targetSection) {
                    window.scrollTo({
                        top: targetSection.offsetTop - 50, // Adjust offset if needed
                        behavior: 'smooth'
                    });
                }
            }
            // If the link is not an anchor (e.g., /services), allow default behavior
        });
    });

    // Add hover effect for service items
    const serviceItems = document.querySelectorAll('.service-item');

    serviceItems.forEach(item => {
        item.addEventListener('mouseenter', () => {
            item.style.transform = "translateY(-5px)";
            item.style.boxShadow = "0 4px 30px rgba(0, 0, 0, 0.15)";
        });

        item.addEventListener('mouseleave', () => {
            item.style.transform = "translateY(0)";
            item.style.boxShadow = "0 0 20px rgba(0, 0, 0, 0.1)";
        });
    });

    // Example of existing function
    function existingFunction() {
        console.log("Existing code is working!");
    }

    // Call the existing function (if needed)
    existingFunction();
});
