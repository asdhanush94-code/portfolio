// ============================================
// PORTFOLIO MAIN JAVASCRIPT
// Dynamic Rendering & Animations
// ============================================

// Wait for DOM to be fully loaded
document.addEventListener('DOMContentLoaded', () => {
    initializeApp();
});

// Initialize all functionality
function initializeApp() {
    // Render all dynamic content
    renderHero();
    renderAbout();
    renderSkills();
    renderProjects();
    renderInternship();
    renderEducation();
    renderAchievements();
    renderCertificates();
    renderCodingProfiles();
    renderResume();
    renderContact();
    renderFooter();
    
    // Initialize animations and interactions
    initPreloader();
    initCustomCursor();
    initThemeToggle();
    initNavigation();
    initScrollAnimations();
    initScrollToTop();
    initSmoothScroll();
    initModal();
    setCurrentYear();
}

// ============================================
// RENDERING FUNCTIONS
// ============================================

// Render Hero Section
function renderHero() {
    const hero = portfolioData.hero;
    
    // Set hero name
    document.getElementById('heroName').textContent = hero.name;
    
    // Set degrees
    document.getElementById('heroDegrees').textContent = hero.degrees;
    
    // Set role with typing effect
    const roleElement = document.getElementById('heroRole');
    typeWriter(roleElement, hero.role, 100);
    
    // Render tech stack badges
    const techStackContainer = document.getElementById('heroTechStack');
    techStackContainer.innerHTML = '';
    hero.techStack.forEach((tech, index) => {
        const badge = document.createElement('div');
        badge.className = 'tech-badge';
        badge.textContent = tech;
        badge.style.animationDelay = `${index * 0.1}s`;
        techStackContainer.appendChild(badge);
    });
    
    // Render hero buttons
    const buttonsContainer = document.getElementById('heroButtons');
    buttonsContainer.innerHTML = `
        <a href="${hero.resume}" class="btn btn-primary" target="_blank" rel="noopener noreferrer">
            Download Resume
        </a>
        <a href="${hero.github}" class="btn btn-secondary" target="_blank" rel="noopener noreferrer">
            GitHub
        </a>
        <a href="${hero.linkedin}" class="btn btn-secondary" target="_blank" rel="noopener noreferrer">
            LinkedIn
        </a>
    `;
    
    // Set nav logo
    document.getElementById('navLogo').textContent = hero.name.split(' ')[0];
}

// Render About Section
function renderAbout() {
    const about = portfolioData.about;
    const aboutContent = document.getElementById('aboutContent');
    
    aboutContent.innerHTML = `
        <div class="about-card fade-in-up">
            <h3>Education</h3>
            <p><strong>College:</strong> ${about.college}</p>
            <p><strong>University:</strong> ${about.university}</p>
            <p><strong>Year:</strong> ${about.year}</p>
        </div>
        <div class="about-card fade-in-up">
            <h3>Interests</h3>
            <p>${about.interest}</p>
        </div>
    `;
}

// Render Skills Section
function renderSkills() {
    const skills = portfolioData.skills;
    const skillsGrid = document.getElementById('skillsGrid');
    
    skillsGrid.innerHTML = '';
    skills.forEach((skill, index) => {
        const skillItem = document.createElement('div');
        skillItem.className = 'skill-item fade-in-up';
        skillItem.style.animationDelay = `${index * 0.1}s`;
        skillItem.innerHTML = `<span>${skill}</span>`;
        skillsGrid.appendChild(skillItem);
    });
}

// Render Projects Section
function renderProjects() {
    const projects = portfolioData.projects;
    const projectsGrid = document.getElementById('projectsGrid');
    
    projectsGrid.innerHTML = '';
    projects.forEach((project, index) => {
        const projectCard = document.createElement('div');
        projectCard.className = 'project-card fade-in-up';
        projectCard.style.animationDelay = `${index * 0.2}s`;
        projectCard.innerHTML = `
            <div class="project-card-content">
                <h3>${project.title}</h3>
                <p>${project.description}</p>
                <a href="${project.source}" class="project-link" target="_blank" rel="noopener noreferrer">
                    View Source <span>→</span>
                </a>
            </div>
        `;
        projectCard.addEventListener('click', () => openProjectModal(project));
        projectsGrid.appendChild(projectCard);
    });
}

// Render Internship Section
function renderInternship() {
    const internship = portfolioData.internship;
    const internshipContent = document.getElementById('internshipContent');
    
    const tasksList = internship.tasks.map(task => `<li>${task}</li>`).join('');
    
    internshipContent.innerHTML = `
        <div class="internship-header fade-in-up">
            <h3>${internship.company}</h3>
            <p><strong>Role:</strong> ${internship.role} | <strong>Duration:</strong> ${internship.duration}</p>
        </div>
        <ul class="internship-tasks fade-in-up">
            ${tasksList}
        </ul>
    `;
}

// Render Education Section
function renderEducation() {
    const education = portfolioData.education;
    const educationTimeline = document.getElementById('educationTimeline');
    
    educationTimeline.innerHTML = '';
    education.forEach((edu, index) => {
        const eduItem = document.createElement('div');
        eduItem.className = 'education-item fade-in-up';
        eduItem.style.animationDelay = `${index * 0.2}s`;
        eduItem.innerHTML = `
            <h3>${edu.level}</h3>
            <p><strong>${edu.school}</strong></p>
            <p>Year: ${edu.year}</p>
            <p>Score: ${edu.score}</p>
        `;
        educationTimeline.appendChild(eduItem);
    });
}

// Render Achievements Section
function renderAchievements() {
    const achievements = portfolioData.achievements;
    const achievementsGrid = document.getElementById('achievementsGrid');
    
    achievementsGrid.innerHTML = '';
    achievements.forEach((achievement, index) => {
        const achievementItem = document.createElement('div');
        achievementItem.className = 'achievement-item fade-in-up';
        achievementItem.style.animationDelay = `${index * 0.2}s`;
        achievementItem.innerHTML = `<h3>${achievement}</h3>`;
        achievementsGrid.appendChild(achievementItem);
    });
}

// Render Certificates Section
function renderCertificates() {
    const certificates = portfolioData.certificates;
    const certificatesGrid = document.getElementById('certificatesGrid');
    
    certificatesGrid.innerHTML = '';
    certificates.forEach((cert, index) => {
        const certItem = document.createElement('div');
        certItem.className = 'certificate-item fade-in-up';
        certItem.style.animationDelay = `${index * 0.1}s`;
        certItem.innerHTML = `<h3>${cert}</h3>`;
        certificatesGrid.appendChild(certItem);
    });
}

// Render Coding Profiles Section
function renderCodingProfiles() {
    const profiles = portfolioData.codingProfiles;
    const codingProfilesContent = document.getElementById('codingProfilesContent');
    
    codingProfilesContent.innerHTML = `
        <a href="${profiles.leetcode}" class="coding-profile-btn fade-in-up" target="_blank" rel="noopener noreferrer">
            LeetCode
        </a>
        <a href="${profiles.codechef}" class="coding-profile-btn fade-in-up" target="_blank" rel="noopener noreferrer">
            CodeChef
        </a>
    `;
}

// Render Resume Section
function renderResume() {
    const resumeLink = portfolioData.hero.resume;
    const resumeButton = document.getElementById('resumeButton');
    resumeButton.href = resumeLink;
}

// Render Contact Section
function renderContact() {
    const contact = portfolioData.contact;
    const contactContent = document.getElementById('contactContent');
    
    contactContent.innerHTML = `
        <div class="contact-item fade-in-up">
            <h3>📧 Email</h3>
            <a href="mailto:${contact.email}">${contact.email}</a>
        </div>
        <div class="contact-item fade-in-up">
            <h3>📱 Phone</h3>
            <a href="tel:${contact.phone}">${contact.phone}</a>
        </div>
        <div class="contact-item fade-in-up">
            <h3>📍 Location</h3>
            <p>${contact.location}</p>
        </div>
    `;
}

// Render Footer
function renderFooter() {
    const social = portfolioData.social;
    const footerContent = document.getElementById('footerContent');
    
    footerContent.innerHTML = `
        <a href="${social.github}" class="social-link" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
            <span>🔗</span>
        </a>
        <a href="${social.linkedin}" class="social-link" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
            <span>💼</span>
        </a>
    `;
}

// ============================================
// ANIMATION FUNCTIONS
// ============================================

// Typing Effect
function typeWriter(element, text, speed = 100) {
    let i = 0;
    element.textContent = '';
    
    function type() {
        if (i < text.length) {
            element.textContent += text.charAt(i);
            i++;
            setTimeout(type, speed);
        }
    }
    
    type();
}

// Initialize Preloader
function initPreloader() {
    const preloader = document.getElementById('preloader');
    const preloaderName = document.getElementById('preloaderName');
    
    // Set name in preloader
    preloaderName.textContent = portfolioData.hero.name;
    
    // Hide preloader after animation
    setTimeout(() => {
        preloader.classList.add('hidden');
        setTimeout(() => {
            preloader.style.display = 'none';
        }, 500);
    }, 2000);
}

// Initialize Custom Cursor
function initCustomCursor() {
    const cursor = document.getElementById('cursor');
    const cursorFollower = document.getElementById('cursorFollower');
    
    let mouseX = 0;
    let mouseY = 0;
    let followerX = 0;
    let followerY = 0;
    
    document.addEventListener('mousemove', (e) => {
        mouseX = e.clientX;
        mouseY = e.clientY;
        
        cursor.style.left = mouseX + 'px';
        cursor.style.top = mouseY + 'px';
    });
    
    // Smooth follower animation
    function animateFollower() {
        followerX += (mouseX - followerX) * 0.1;
        followerY += (mouseY - followerY) * 0.1;
        
        cursorFollower.style.left = followerX + 'px';
        cursorFollower.style.top = followerY + 'px';
        
        requestAnimationFrame(animateFollower);
    }
    animateFollower();
    
    // Cursor hover effects
    const hoverElements = document.querySelectorAll('a, button, .project-card, .skill-item, .certificate-item');
    
    hoverElements.forEach(el => {
        el.addEventListener('mouseenter', () => {
            cursor.classList.add('hover');
        });
        el.addEventListener('mouseleave', () => {
            cursor.classList.remove('hover');
        });
    });
}

// Initialize Theme Toggle
function initThemeToggle() {
    const themeToggle = document.getElementById('themeToggle');
    const themeIcon = themeToggle.querySelector('.theme-icon');
    const currentTheme = localStorage.getItem('theme') || 'dark';
    
    // Set initial theme
    document.documentElement.setAttribute('data-theme', currentTheme);
    updateThemeIcon(themeIcon, currentTheme);
    
    themeToggle.addEventListener('click', () => {
        const currentTheme = document.documentElement.getAttribute('data-theme');
        const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
        
        document.documentElement.setAttribute('data-theme', newTheme);
        localStorage.setItem('theme', newTheme);
        updateThemeIcon(themeIcon, newTheme);
    });
}

function updateThemeIcon(icon, theme) {
    icon.textContent = theme === 'dark' ? '☀️' : '🌙';
}

// Initialize Navigation
function initNavigation() {
    const nav = document.getElementById('navbar');
    const navToggle = document.getElementById('navToggle');
    const navMenu = document.getElementById('navMenu');
    const navLinks = document.querySelectorAll('.nav-link');
    
    // Navbar scroll effect
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            nav.classList.add('scrolled');
        } else {
            nav.classList.remove('scrolled');
        }
    });
    
    // Mobile menu toggle
    navToggle.addEventListener('click', () => {
        navToggle.classList.toggle('active');
        navMenu.classList.toggle('active');
    });
    
    // Close mobile menu on link click
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            navToggle.classList.remove('active');
            navMenu.classList.remove('active');
        });
    });
    
    // Active nav link on scroll
    window.addEventListener('scroll', () => {
        let current = '';
        const sections = document.querySelectorAll('section[id]');
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            if (window.scrollY >= sectionTop - 200) {
                current = section.getAttribute('id');
            }
        });
        
        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${current}`) {
                link.classList.add('active');
            }
        });
    });
}

// Initialize Scroll Animations
function initScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);
    
    // Observe all animated elements
    const animatedElements = document.querySelectorAll('.fade-in-up, .slide-in-left, .slide-in-right, .scale-up');
    animatedElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
}

// Initialize Scroll to Top
function initScrollToTop() {
    const scrollTopBtn = document.getElementById('scrollTop');
    
    window.addEventListener('scroll', () => {
        if (window.scrollY > 300) {
            scrollTopBtn.classList.add('visible');
        } else {
            scrollTopBtn.classList.remove('visible');
        }
    });
    
    scrollTopBtn.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
}

// Initialize Smooth Scroll
function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const href = this.getAttribute('href');
            if (href !== '#' && href !== '') {
                e.preventDefault();
                const target = document.querySelector(href);
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            }
        });
    });
}

// Initialize Modal
function initModal() {
    const modal = document.getElementById('projectModal');
    const modalClose = document.getElementById('modalClose');
    
    modalClose.addEventListener('click', () => {
        closeProjectModal();
    });
    
    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            closeProjectModal();
        }
    });
    
    // Close on Escape key
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && modal.classList.contains('active')) {
            closeProjectModal();
        }
    });
}

function openProjectModal(project) {
    const modal = document.getElementById('projectModal');
    const modalTitle = document.getElementById('modalTitle');
    const modalDescription = document.getElementById('modalDescription');
    const modalLink = document.getElementById('modalLink');
    
    modalTitle.textContent = project.title;
    modalDescription.textContent = project.description;
    modalLink.href = project.source;
    
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeProjectModal() {
    const modal = document.getElementById('projectModal');
    modal.classList.remove('active');
    document.body.style.overflow = '';
}

// Set Current Year
function setCurrentYear() {
    const yearElement = document.getElementById('currentYear');
    if (yearElement) {
        yearElement.textContent = new Date().getFullYear();
    }
}

// Parallax Effect for Hero Shapes
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const shapes = document.querySelectorAll('.floating-shape');
    
    shapes.forEach((shape, index) => {
        const speed = 0.5 + (index * 0.1);
        shape.style.transform = `translateY(${scrolled * speed}px)`;
    });
});

// Add magnetic effect to buttons
document.querySelectorAll('.btn, .coding-profile-btn, .social-link').forEach(button => {
    button.addEventListener('mousemove', (e) => {
        const rect = button.getBoundingClientRect();
        const x = e.clientX - rect.left - rect.width / 2;
        const y = e.clientY - rect.top - rect.height / 2;
        
        button.style.transform = `translate(${x * 0.1}px, ${y * 0.1}px)`;
    });
    
    button.addEventListener('mouseleave', () => {
        button.style.transform = '';
    });
});

// Add tilt effect to project cards
document.querySelectorAll('.project-card').forEach(card => {
    card.addEventListener('mousemove', (e) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        
        const rotateX = (y - centerY) / 10;
        const rotateY = (centerX - x) / 10;
        
        card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-15px)`;
    });
    
    card.addEventListener('mouseleave', () => {
        card.style.transform = '';
    });
});

// Performance optimization: Debounce scroll events
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

// Apply debounce to scroll-heavy functions
const debouncedScroll = debounce(() => {
    // Scroll-based animations can be added here
}, 10);

window.addEventListener('scroll', debouncedScroll);
