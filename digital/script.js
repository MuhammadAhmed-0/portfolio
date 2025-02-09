 // Countdown Timer
        function updateTimer(prefix = '') {
            const now = new Date().getTime();
            const startTime = localStorage.getItem(prefix + 'timerStart');
            
            if (!startTime) {
                localStorage.setItem(prefix + 'timerStart', now);
            }
            
            const deadline = parseInt(startTime || now) + (6 * 60 * 60 * 1000); // 6 hours
            const timeLeft = deadline - now;
            
            if (timeLeft <= 0) {
                document.getElementById(prefix + 'hours').textContent = '00';
                document.getElementById(prefix + 'minutes').textContent = '00';
                document.getElementById(prefix + 'seconds').textContent = '00';
                return;
            }
            
            const hours = Math.floor(timeLeft / (1000 * 60 * 60));
            const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);
            
            document.getElementById(prefix + 'hours').textContent = hours.toString().padStart(2, '0');
            document.getElementById(prefix + 'minutes').textContent = minutes.toString().padStart(2, '0');
            document.getElementById(prefix + 'seconds').textContent = seconds.toString().padStart(2, '0');
        }
        
        // Update both timers every second
        setInterval(() => {
            updateTimer(''); // Update hero timer
            updateTimer('pricing-'); // Update pricing timer
        }, 1000);
        
        // Initial call for both timers
        updateTimer(''); // Update hero timer
        updateTimer('pricing-'); // Update pricing timer
        
        // Smooth scroll for navigation
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                document.querySelector(this.getAttribute('href')).scrollIntoView({
                    behavior: 'smooth'
                });
            });
        });
        
