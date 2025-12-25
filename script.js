// ===== Typewriter Effect =====
const typewriterText = [
    'Full Stack Developer',
    'Crypto Enthusiast',
    'Trading Bot Builder',
    'Flutter Developer',
    'Web3 Explorer',
    'Automation Lover'
];

let textIndex = 0;
let charIndex = 0;
let isDeleting = false;
const typewriter = document.querySelector('.typewriter');

function type() {
    const currentText = typewriterText[textIndex];
    
    if (isDeleting) {
        typewriter.textContent = currentText.substring(0, charIndex - 1);
        charIndex--;
    } else {
        typewriter.textContent = currentText.substring(0, charIndex + 1);
        charIndex++;
    }
    
    let typeSpeed = isDeleting ? 50 : 100;
    
    if (!isDeleting && charIndex === currentText.length) {
        typeSpeed = 2000;
        isDeleting = true;
    } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        textIndex = (textIndex + 1) % typewriterText.length;
        typeSpeed = 500;
    }
    
    setTimeout(type, typeSpeed);
}

document.addEventListener('DOMContentLoaded', type);

// ===== Navbar Scroll Effect =====
const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// ===== Mobile Menu Toggle =====
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');
const navLinks = document.querySelectorAll('.nav-link');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
});

navLinks.forEach(link => {
    link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
    });
});

// ===== Smooth Scroll =====
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// ===== Scroll Reveal Animation =====
const revealElements = document.querySelectorAll('.section-header, .highlight-card, .skill-category, .project-card, .contact-method, .contact-form');

const revealOnScroll = () => {
    revealElements.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        
        if (elementTop < windowHeight - 100) {
            element.classList.add('reveal', 'active');
        }
    });
};

window.addEventListener('scroll', revealOnScroll);
window.addEventListener('load', revealOnScroll);

// ===== Active Nav Link on Scroll =====
const sections = document.querySelectorAll('section[id]');

const highlightNavLink = () => {
    const scrollY = window.pageYOffset;
    
    sections.forEach(section => {
        const sectionHeight = section.offsetHeight;
        const sectionTop = section.offsetTop - 100;
        const sectionId = section.getAttribute('id');
        const navLink = document.querySelector(`.nav-link[href="#${sectionId}"]`);
        
        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            navLinks.forEach(link => link.classList.remove('active'));
            if (navLink) navLink.classList.add('active');
        }
    });
};

window.addEventListener('scroll', highlightNavLink);

// ===== Contact Form Handler =====
const contactForm = document.getElementById('contactForm');

contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    const formData = new FormData(contactForm);
    const name = formData.get('name');
    const email = formData.get('email');
    const message = formData.get('message');
    
    // Create mailto link
    const mailtoLink = `mailto:hello@hritthikroy.com?subject=Portfolio Contact from ${name}&body=${encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`)}`;
    
    window.location.href = mailtoLink;
    
    // Show success feedback
    const btn = contactForm.querySelector('button');
    const originalText = btn.innerHTML;
    btn.innerHTML = '<span>Message Sent!</span><i class="fas fa-check"></i>';
    btn.style.background = 'linear-gradient(135deg, #10b981 0%, #059669 100%)';
    
    setTimeout(() => {
        btn.innerHTML = originalText;
        btn.style.background = '';
        contactForm.reset();
    }, 3000);
});



// ===== Skill Items Hover Effect =====
const skillItems = document.querySelectorAll('.skill-item');

skillItems.forEach(item => {
    item.addEventListener('mouseenter', () => {
        item.style.boxShadow = '0 0 20px rgba(99, 102, 241, 0.3)';
    });
    
    item.addEventListener('mouseleave', () => {
        item.style.boxShadow = 'none';
    });
});

// ===== Project Cards Tilt Effect =====
const projectCards = document.querySelectorAll('.project-card');

projectCards.forEach(card => {
    card.addEventListener('mousemove', (e) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        
        const rotateX = (y - centerY) / 20;
        const rotateY = (centerX - x) / 20;
        
        card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-10px)`;
    });
    
    card.addEventListener('mouseleave', () => {
        card.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) translateY(0)';
    });
});

// ===== Code Block Typewriter Effect =====
const codeLines = [
    { text: 'const ', type: 'keyword' },
    { text: 'developer', type: 'variable' },
    { text: ' = {\n', type: 'plain' },
    { text: '  name', type: 'property' },
    { text: ': ', type: 'plain' },
    { text: '"Hritthik Roy"', type: 'string' },
    { text: ',\n', type: 'plain' },
    { text: '  role', type: 'property' },
    { text: ': ', type: 'plain' },
    { text: '"Full Stack Developer"', type: 'string' },
    { text: ',\n', type: 'plain' },
    { text: '  skills', type: 'property' },
    { text: ': [', type: 'plain' },
    { text: '"Go"', type: 'string' },
    { text: ', ', type: 'plain' },
    { text: '"JS"', type: 'string' },
    { text: ', ', type: 'plain' },
    { text: '"Dart"', type: 'string' },
    { text: '],\n', type: 'plain' },
    { text: '  passion', type: 'property' },
    { text: ': ', type: 'plain' },
    { text: '"Crypto & Fintech"', type: 'string' },
    { text: ',\n', type: 'plain' },
    { text: '  motto', type: 'property' },
    { text: ': ', type: 'plain' },
    { text: '"Automate Everything!"', type: 'string' },
    { text: '\n};', type: 'plain' }
];

function typeCode() {
    const codeElement = document.getElementById('code-typewriter');
    if (!codeElement) return;
    
    let lineIndex = 0;
    let charIndex = 0;
    let currentSpan = null;
    
    function typeNextChar() {
        if (lineIndex >= codeLines.length) {
            // Hide cursor when done
            const cursor = document.querySelector('.code-cursor');
            if (cursor) cursor.style.display = 'none';
            return;
        }
        
        const currentLine = codeLines[lineIndex];
        
        // Create new span for this segment if needed
        if (charIndex === 0) {
            currentSpan = document.createElement('span');
            if (currentLine.type !== 'plain') {
                currentSpan.className = `code-${currentLine.type}`;
            }
            codeElement.appendChild(currentSpan);
        }
        
        // Add next character
        const char = currentLine.text[charIndex];
        currentSpan.textContent += char;
        charIndex++;
        
        // Move to next segment if done with current
        if (charIndex >= currentLine.text.length) {
            lineIndex++;
            charIndex = 0;
        }
        
        // Vary typing speed for natural feel
        const delay = char === '\n' ? 100 : Math.random() * 30 + 25;
        setTimeout(typeNextChar, delay);
    }
    
    // Start typing after a short delay
    setTimeout(typeNextChar, 800);
}

document.addEventListener('DOMContentLoaded', typeCode);

// ===== Console Easter Egg =====
console.log('%c👋 Hey there, fellow developer!', 'font-size: 20px; font-weight: bold; color: #6366f1;');
console.log('%cLooking at the code? Nice! Feel free to reach out if you want to collaborate.', 'font-size: 14px; color: #a1a1aa;');
console.log('%c☕ Coffee → 💻 Code', 'font-size: 16px; color: #ec4899;');
