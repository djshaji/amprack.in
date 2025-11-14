// Mobile Menu Toggle
const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
const navLinks = document.querySelector('.nav-links');

// Version Counter Animation
window.addEventListener('load', () => {
    const counterOverlay = document.getElementById('versionCounter');
    const counterNumber = document.getElementById('counterNumber');
    
    if (counterOverlay && counterNumber) {
        // Animate counter from 0 to 6
        let count = 0;
        const targetNumber = 6;
        const duration = 2000; // 2 seconds
        if (location.pathname !== '/' && location.pathname !== '/index.html' && location.pathname !== '' ) {
            // Skip animation on non-home pages
            counterOverlay.remove();
            return;
        }

        const steps = 30;
        const increment = targetNumber / steps;
        const stepDuration = duration / steps;
        
        const counterInterval = setInterval(() => {
            count += increment;
            if (count >= 5 && count < targetNumber) {
                // When reaching 5, transition to text
                counterNumber.textContent = '5';
                clearInterval(counterInterval);
                
                // Wait a moment then transform to text
                setTimeout(() => {
                    counterNumber.style.fontSize = '5rem';
                    counterNumber.style.transition = 'all 0.8s cubic-bezier(0.68, -0.55, 0.265, 1.55)';
                    counterNumber.innerHTML = 'Your lucky number is <span style="display: block; font-size: 8rem; margin-top: 1rem;">6</span>';
                    
                    // Wait then fade out
                    setTimeout(() => {
                        counterOverlay.classList.add('fade-out');
                        // Remove from DOM after fade
                        setTimeout(() => {
                            counterOverlay.remove();
                        }, 500);
                    }, 2000);
                }, 600);
            } else if (count < 5) {
                counterNumber.textContent = Math.floor(count);
            }
        }, stepDuration);
        
        // Add glow effect that pulses with the number
        counterNumber.setAttribute('data-number', targetNumber);
    }
});

if (mobileMenuToggle) {
    mobileMenuToggle.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        mobileMenuToggle.classList.toggle('active');
    });

    // Close menu when clicking a link
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', () => {
            navLinks.classList.remove('active');
            mobileMenuToggle.classList.remove('active');
        });
    });
}

// Navbar Scroll Effect
const navbar = document.querySelector('.navbar');
let lastScroll = 0;

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    
    if (currentScroll > 100) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
    
    lastScroll = currentScroll;
});

// Smooth Scroll for Anchor Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        if (href === '#') return;
        
        e.preventDefault();
        const target = document.querySelector(href);
        
        if (target) {
            const offsetTop = target.offsetTop - 80;
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
        }
    });
});

// Intersection Observer for Fade-in Animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe elements
document.querySelectorAll('.feature-card, .screenshot-item, .faq-item').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(20px)';
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(el);
});

// Parallax Effect for Hero
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const heroBackground = document.querySelector('.hero-background');
    const phoneImage = document.querySelector('.phone-mockup');
    
    if (heroBackground && scrolled < window.innerHeight) {
        heroBackground.style.transform = `translateY(${scrolled * 0.5}px)`;
    }
    
    if (phoneImage && scrolled < window.innerHeight) {
        phoneImage.style.transform = `translateY(${scrolled * 0.3}px)`;
    }
});

// Add loading animation to images
document.querySelectorAll('img').forEach(img => {
    img.addEventListener('load', function() {
        this.style.opacity = '1';
    });
    
    if (img.complete) {
        img.style.opacity = '1';
    } else {
        img.style.opacity = '0';
        img.style.transition = 'opacity 0.3s ease';
    }
});

// Stats Counter Animation
const animateCount = (element, target, duration = 2000) => {
    const start = 0;
    const increment = target / (duration / 16);
    let current = start;
    
    const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
            element.textContent = target;
            clearInterval(timer);
        } else {
            element.textContent = Math.floor(current);
        }
    }, 16);
};

const statsObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const statNumber = entry.target.querySelector('.stat-number');
            const text = statNumber.textContent;
            const number = parseInt(text);
            
            if (!isNaN(number)) {
                animateCount(statNumber, number);
                statsObserver.unobserve(entry.target);
            }
        }
    });
}, { threshold: 0.5 });

document.querySelectorAll('.stat').forEach(stat => {
    statsObserver.observe(stat);
});

// Add hover effect to cards
const cards = document.querySelectorAll('.feature-card, .download-card, .faq-item');
cards.forEach(card => {
    card.addEventListener('mouseenter', function() {
        this.style.transition = 'all 0.3s ease';
    });
});

// Lazy loading for images
if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                if (img.dataset.src) {
                    img.src = img.dataset.src;
                    img.removeAttribute('data-src');
                }
                observer.unobserve(img);
            }
        });
    });

    document.querySelectorAll('img[data-src]').forEach(img => {
        imageObserver.observe(img);
    });
}

// Add active state to current section in nav
const sections = document.querySelectorAll('section[id]');

const highlightNav = () => {
    const scrollY = window.pageYOffset;
    
    sections.forEach(section => {
        const sectionHeight = section.offsetHeight;
        const sectionTop = section.offsetTop - 100;
        const sectionId = section.getAttribute('id');
        
        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            document.querySelector(`.nav-links a[href="#${sectionId}"]`)?.classList.add('active');
        } else {
            document.querySelector(`.nav-links a[href="#${sectionId}"]`)?.classList.remove('active');
        }
    });
};

window.addEventListener('scroll', highlightNav);

// Enhanced wave animation
const wavePath = document.querySelector('.wave-path');
if (wavePath) {
    let phase = 0;
    const animate = () => {
        phase += 0.05;
        const points = [];
        for (let i = 0; i <= 200; i += 20) {
            const y = 50 + Math.sin((i + phase * 20) * 0.05) * 20;
            points.push(`${i},${y}`);
        }
        
        let d = `M${points[0]}`;
        for (let i = 1; i < points.length - 1; i++) {
            const [x1, y1] = points[i].split(',');
            const [x2, y2] = points[i + 1].split(',');
            const cx = (parseFloat(x1) + parseFloat(x2)) / 2;
            d += ` Q${x1},${y1} ${cx},${(parseFloat(y1) + parseFloat(y2)) / 2}`;
        }
        d += ` T${points[points.length - 1]}`;
        
        wavePath.setAttribute('d', d);
        requestAnimationFrame(animate);
    };
    animate();
}

// Console easter egg
console.log('%c🎸 Amp Rack', 'font-size: 24px; font-weight: bold; color: #6366f1;');
console.log('%cLooking for something? Check out our GitHub: https://github.com/djshaji/alana', 'font-size: 12px; color: #64748b;');

// Performance optimization: Debounce scroll events
function debounce(func, wait = 10) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Apply debounce to scroll handlers
const debouncedHighlightNav = debounce(highlightNav, 10);
window.removeEventListener('scroll', highlightNav);
window.addEventListener('scroll', debouncedHighlightNav);

// FAQ Accordion
document.querySelectorAll('.faq-question').forEach(button => {
    button.addEventListener('click', () => {
        const faqItem = button.parentElement;
        faqItem.classList.toggle('active');
    });
});
