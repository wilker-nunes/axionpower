// Futuristic SPCS Website JavaScript

document.addEventListener('DOMContentLoaded', function() {
    // Initialize all animations and interactions
    initParallaxEffects();
    initScrollAnimations();
    initInteractiveElements();
    initTimelineAnimations();
    initPowerCoreAnimation();
    initMatrixBackground();
});

// Parallax Effects
function initParallaxEffects() {
    window.addEventListener('scroll', function() {
        const scrolled = window.pageYOffset;
        const parallaxElements = document.querySelectorAll('.hero-image, .benefits-image');
        
        parallaxElements.forEach(element => {
            const speed = 0.5;
            element.style.transform = `translateY(${scrolled * speed}px)`;
        });
    });
}

// Scroll Animations
function initScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-in');
                
                // Special animations for specific elements
                if (entry.target.classList.contains('feature-card')) {
                    animateFeatureCard(entry.target);
                }
                
                if (entry.target.classList.contains('timeline-item')) {
                    animateTimelineItem(entry.target);
                }
                
                if (entry.target.classList.contains('benefit-item')) {
                    animateBenefitItem(entry.target);
                }
            }
        });
    }, observerOptions);

    // Observe elements for animation
    const animatedElements = document.querySelectorAll(
        '.feature-card, .timeline-item, .benefit-item, .stat-item, .power-feature'
    );
    
    animatedElements.forEach(element => {
        observer.observe(element);
    });
}

// Feature Card Animations
function animateFeatureCard(card) {
    const icon = card.querySelector('.feature-icon');
    const metrics = card.querySelectorAll('.metric');
    
    // Animate icon
    setTimeout(() => {
        icon.style.transform = 'scale(1.1) rotateY(360deg)';
        icon.style.transition = 'transform 0.8s ease';
    }, 200);
    
    // Animate metrics with stagger
    metrics.forEach((metric, index) => {
        setTimeout(() => {
            metric.style.opacity = '1';
            metric.style.transform = 'translateY(0)';
            metric.style.transition = 'all 0.5s ease';
        }, 400 + (index * 100));
    });
}

// Timeline Item Animations
function animateTimelineItem(item) {
    const content = item.querySelector('.timeline-content');
    const icon = item.querySelector('.timeline-icon');
    const tags = item.querySelectorAll('.tech-tag');
    
    // Animate content slide in
    setTimeout(() => {
        content.style.opacity = '1';
        content.style.transform = 'translateX(0)';
        content.style.transition = 'all 0.8s ease';
    }, 200);
    

    
    // Animate tags with stagger
    tags.forEach((tag, index) => {
        setTimeout(() => {
            tag.style.opacity = '1';
            tag.style.transform = 'scale(1)';
            tag.style.transition = 'all 0.4s ease';
        }, 600 + (index * 100));
    });
}

// Benefit Item Animations
function animateBenefitItem(item) {
    const icon = item.querySelector('i');
    const title = item.querySelector('.benefit-title');
    const desc = item.querySelector('.benefit-desc');
    
    // Animate icon
    setTimeout(() => {
        icon.style.transform = 'scale(1.2) rotate(360deg)';
        icon.style.transition = 'transform 0.6s ease';
    }, 100);
    
    // Animate text elements
    setTimeout(() => {
        title.style.opacity = '1';
        title.style.transform = 'translateX(0)';
        title.style.transition = 'all 0.5s ease';
    }, 300);
    
    setTimeout(() => {
        desc.style.opacity = '1';
        desc.style.transform = 'translateX(0)';
        desc.style.transition = 'all 0.5s ease';
    }, 500);
}

// Interactive Elements
function initInteractiveElements() {
    // Feature cards hover effects
    const featureCards = document.querySelectorAll('.feature-card');
    featureCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-15px) rotateY(5deg) scale(1.02)';
            
            const icon = this.querySelector('.feature-icon');
            icon.style.boxShadow = '0 20px 50px rgba(0, 255, 255, 0.6)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) rotateY(0) scale(1)';
            
            const icon = this.querySelector('.feature-icon');
            icon.style.boxShadow = '0 10px 30px rgba(0, 128, 255, 0.3)';
        });
    });
    
    // Button hover effects
    const buttons = document.querySelectorAll('.btn-primary, .btn-secondary');
    buttons.forEach(button => {
        button.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-5px) scale(1.05)';
            
            if (this.classList.contains('btn-primary')) {
                this.style.boxShadow = '0 25px 50px rgba(0, 255, 255, 0.6)';
            }
        });
        
        button.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
            
            if (this.classList.contains('btn-primary')) {
                this.style.boxShadow = '0 10px 30px rgba(0, 255, 255, 0.3)';
            }
        });
        
        // Click effect
        button.addEventListener('click', function(e) {
            const ripple = document.createElement('span');
            ripple.classList.add('ripple');
            this.appendChild(ripple);
            
            const rect = this.getBoundingClientRect();
            const size = Math.max(rect.width, rect.height);
            ripple.style.width = ripple.style.height = size + 'px';
            ripple.style.left = (e.clientX - rect.left - size / 2) + 'px';
            ripple.style.top = (e.clientY - rect.top - size / 2) + 'px';
            
            setTimeout(() => {
                ripple.remove();
            }, 600);
        });
    });
}

// Timeline Animations
function initTimelineAnimations() {
    const timelineItems = document.querySelectorAll('.timeline-item');
    
    // Add initial styles for animation
    timelineItems.forEach((item, index) => {
        const content = item.querySelector('.timeline-content');
        const tags = item.querySelectorAll('.tech-tag');
        
        // Set initial states
        content.style.opacity = '0';
        if (index % 2 === 0) {
            content.style.transform = 'translateX(-50px)';
        } else {
            content.style.transform = 'translateX(50px)';
        }
        
        tags.forEach(tag => {
            tag.style.opacity = '0';
            tag.style.transform = 'scale(0.8)';
        });
    });
}

// Power Core Animation
function initPowerCoreAnimation() {
    const powerCore = document.querySelector('.power-core');
    if (!powerCore) return;
    
    // Add floating animation
    powerCore.addEventListener('mouseenter', function() {
        this.style.transform = 'scale(1.1)';
        this.style.transition = 'transform 0.5s ease';
        
        const rings = this.querySelectorAll('.core-ring');
        rings.forEach((ring, index) => {
            ring.style.borderColor = 'rgba(0, 255, 255, 0.8)';
            ring.style.animationDuration = (3 + index) + 's';
        });
    });
    
    powerCore.addEventListener('mouseleave', function() {
        this.style.transform = 'scale(1)';
        
        const rings = this.querySelectorAll('.core-ring');
        rings.forEach((ring, index) => {
            ring.style.borderColor = 'rgba(0, 255, 255, 0.3)';
            ring.style.animationDuration = (8 + index * 2) + 's';
        });
    });
}

// Matrix Background Effect
function initMatrixBackground() {
    // Create matrix effect for header
    const header = document.querySelector('.header');
    if (!header) return;
    
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');
    
    canvas.style.position = 'absolute';
    canvas.style.top = '0';
    canvas.style.left = '0';
    canvas.style.width = '100%';
    canvas.style.height = '100%';
    canvas.style.opacity = '0.1';
    canvas.style.pointerEvents = 'none';
    canvas.style.zIndex = '1';
    
    header.appendChild(canvas);
    
    function resizeCanvas() {
        canvas.width = header.offsetWidth;
        canvas.height = header.offsetHeight;
    }
    
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);
    
    // Matrix animation
    const matrix = "ABCDEFGHIJKLMNOPQRSTUVWXYZ123456789@#$%^&*()*&^%+-/~{[|`]}";
    const matrixArray = matrix.split("");
    
    const fontSize = 10;
    const columns = canvas.width / fontSize;
    const drops = [];
    
    for (let x = 0; x < columns; x++) {
        drops[x] = 1;
    }
    
    function drawMatrix() {
        ctx.fillStyle = 'rgba(0, 0, 0, 0.04)';
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        
        ctx.fillStyle = '#00ffff';
        ctx.font = fontSize + 'px monospace';
        
        for (let i = 0; i < drops.length; i++) {
            const text = matrixArray[Math.floor(Math.random() * matrixArray.length)];
            ctx.fillText(text, i * fontSize, drops[i] * fontSize);
            
            if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
                drops[i] = 0;
            }
            drops[i]++;
        }
    }
    
    setInterval(drawMatrix, 35);
}

// Smooth scrolling for navigation
function smoothScroll(target) {
    const element = document.querySelector(target);
    if (element) {
        element.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    }
}

// Add CSS for ripple effect
const style = document.createElement('style');
style.textContent = `
    .ripple {
        position: absolute;
        border-radius: 50%;
        background: rgba(255, 255, 255, 0.6);
        transform: scale(0);
        animation: ripple-animation 0.6s linear;
        pointer-events: none;
    }
    
    @keyframes ripple-animation {
        to {
            transform: scale(4);
            opacity: 0;
        }
    }
    
    .animate-in {
        opacity: 1 !important;
        transform: translateY(0) !important;
    }
`;
document.head.appendChild(style);

// Performance optimization
function debounce(func, wait) {
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

// Optimize scroll events
window.addEventListener('scroll', debounce(function() {
    // Additional scroll-based animations can be added here
}, 10));

// Add loading animation
window.addEventListener('load', function() {
    document.body.classList.add('loaded');
    
    // Animate hero elements on load
    const heroElements = document.querySelectorAll('.hero-text h2, .hero-text h3, .hero-description, .stat-item');
    heroElements.forEach((element, index) => {
        setTimeout(() => {
            element.style.opacity = '1';
            element.style.transform = 'translateY(0)';
            element.style.transition = 'all 0.8s ease';
        }, index * 200);
    });
});

// Add initial loading styles
const loadingStyle = document.createElement('style');
loadingStyle.textContent = `
    .hero-text h2,
    .hero-text h3,
    .hero-description,
    .stat-item {
        opacity: 0;
        transform: translateY(30px);
    }
    
    .benefit-title,
    .benefit-desc {
        opacity: 0;
        transform: translateX(-20px);
    }
`;
document.head.appendChild(loadingStyle);

