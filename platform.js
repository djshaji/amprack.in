// Platform-specific page functionality

// Distribution tabs functionality
const distroTabs = document.querySelectorAll('.distro-tab');
const distroPanels = document.querySelectorAll('.distro-panel');

distroTabs.forEach(tab => {
    tab.addEventListener('click', () => {
        const distroName = tab.getAttribute('data-distro');
        
        // Remove active class from all tabs and panels
        distroTabs.forEach(t => t.classList.remove('active'));
        distroPanels.forEach(p => p.classList.remove('active'));
        
        // Add active class to clicked tab and corresponding panel
        tab.classList.add('active');
        document.getElementById(distroName).classList.add('active');
    });
});

// Animate progress bars when they come into view
const progressBars = document.querySelectorAll('.progress-fill');
const progressObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const width = entry.target.style.width;
            entry.target.style.width = '0';
            setTimeout(() => {
                entry.target.style.width = width;
            }, 100);
            progressObserver.unobserve(entry.target);
        }
    });
}, { threshold: 0.5 });

progressBars.forEach(bar => {
    progressObserver.observe(bar);
});

// Code block copy functionality
const codeBlocks = document.querySelectorAll('.code-block pre');
codeBlocks.forEach(block => {
    const wrapper = block.parentElement;
    const copyButton = document.createElement('button');
    copyButton.className = 'copy-code-btn';
    copyButton.innerHTML = '📋 Copy';
    copyButton.style.cssText = `
        position: absolute;
        top: 0.5rem;
        right: 0.5rem;
        background: rgba(255, 255, 255, 0.1);
        border: 1px solid rgba(255, 255, 255, 0.2);
        color: white;
        padding: 0.25rem 0.75rem;
        border-radius: 0.25rem;
        cursor: pointer;
        font-size: 0.75rem;
        transition: all 0.2s ease;
    `;
    
    wrapper.style.position = 'relative';
    wrapper.appendChild(copyButton);
    
    copyButton.addEventListener('click', async () => {
        const code = block.textContent;
        try {
            await navigator.clipboard.writeText(code);
            copyButton.innerHTML = '✓ Copied!';
            copyButton.style.background = 'rgba(16, 185, 129, 0.2)';
            copyButton.style.borderColor = 'rgba(16, 185, 129, 0.4)';
            
            setTimeout(() => {
                copyButton.innerHTML = '📋 Copy';
                copyButton.style.background = 'rgba(255, 255, 255, 0.1)';
                copyButton.style.borderColor = 'rgba(255, 255, 255, 0.2)';
            }, 2000);
        } catch (err) {
            console.error('Failed to copy:', err);
        }
    });
    
    copyButton.addEventListener('mouseenter', () => {
        if (!copyButton.innerHTML.includes('Copied')) {
            copyButton.style.background = 'rgba(255, 255, 255, 0.2)';
        }
    });
    
    copyButton.addEventListener('mouseleave', () => {
        if (!copyButton.innerHTML.includes('Copied')) {
            copyButton.style.background = 'rgba(255, 255, 255, 0.1)';
        }
    });
});

// Smooth scroll with offset for platform pages
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

// Theme card hover effects
const themeCards = document.querySelectorAll('.theme-card');
themeCards.forEach(card => {
    card.addEventListener('mouseenter', function() {
        const preview = this.querySelector('.theme-preview');
        preview.style.transform = 'scale(1.05) rotate(2deg)';
    });
    
    card.addEventListener('mouseleave', function() {
        const preview = this.querySelector('.theme-preview');
        preview.style.transform = 'scale(1) rotate(0deg)';
    });
});

// Animate step numbers on scroll
const stepNumbers = document.querySelectorAll('.step-number, .usage-number');
const stepObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
            setTimeout(() => {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'scale(1) rotate(0deg)';
            }, index * 100);
            stepObserver.unobserve(entry.target);
        }
    });
}, { threshold: 0.5 });

stepNumbers.forEach(step => {
    step.style.opacity = '0';
    step.style.transform = 'scale(0.5) rotate(-45deg)';
    step.style.transition = 'all 0.5s cubic-bezier(0.68, -0.55, 0.265, 1.55)';
    stepObserver.observe(step);
});

// Add visual feedback for installation cards
const installCards = document.querySelectorAll('.install-card');
installCards.forEach(card => {
    card.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-4px)';
        this.style.boxShadow = '0 20px 25px -5px rgba(0, 0, 0, 0.1)';
    });
    
    card.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0)';
        this.style.boxShadow = '0 4px 6px -1px rgba(0, 0, 0, 0.1)';
    });
    
    card.style.transition = 'all 0.3s ease';
});

// Highlight current platform in navigation
const currentPage = window.location.pathname.split('/').pop();
document.querySelectorAll('.nav-links a').forEach(link => {
    if (link.getAttribute('href') === currentPage) {
        link.classList.add('active');
    }
});

console.log('%c🎸 Amp Rack Platform Page', 'font-size: 18px; font-weight: bold; color: #6366f1;');
console.log('%cExplore our cross-platform audio solutions!', 'font-size: 12px; color: #64748b;');
