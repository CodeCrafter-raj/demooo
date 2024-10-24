
        // Age Icon Animation
        const ageIcons = [
            'fas fa-baby',
            'fas fa-child',
            'fas fa-user',
            'fas fa-user-friends'
        ];
        let currentAgeIndex = 0;

        function changeAgeIcon() {
            const ageIcon = document.getElementById('ageIcon');
            ageIcon.className = ageIcons[currentAgeIndex];
            currentAgeIndex = (currentAgeIndex + 1) % ageIcons.length;
        }

        // Change age icon every 2 seconds
        setInterval(changeAgeIcon, 2000);

        // Mobile Menu Toggle
        const menuButton = document.querySelector('.menu-toggle');
        const navLinks = document.querySelector('.nav-links');

        if (menuButton) {
            menuButton.addEventListener('click', () => {
                navLinks.classList.toggle('active');
            });
        }