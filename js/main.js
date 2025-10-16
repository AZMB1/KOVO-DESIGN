// KOVO DESIGN - Main JavaScript

// ====================================
// Utility Functions
// ====================================

// Debounce function for performance
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

// ====================================
// Header Scroll Effect
// ====================================
function initHeaderScroll() {
    const header = document.querySelector('header');

    const handleScroll = () => {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    };

    window.addEventListener('scroll', debounce(handleScroll, 10));
    handleScroll(); // Initial check
}

// ====================================
// Mobile Menu Toggle
// ====================================
function initMobileMenu() {
    const menuToggle = document.querySelector('.mobile-menu-toggle');
    const navLinks = document.querySelector('.nav-links');

    if (!menuToggle || !navLinks) return;

    menuToggle.addEventListener('click', () => {
        menuToggle.classList.toggle('active');
        navLinks.classList.toggle('active');
    });

    // Close menu when clicking on a link
    const links = navLinks.querySelectorAll('a');
    links.forEach(link => {
        link.addEventListener('click', () => {
            menuToggle.classList.remove('active');
            navLinks.classList.remove('active');
        });
    });

    // Close menu when clicking outside
    document.addEventListener('click', (e) => {
        if (!menuToggle.contains(e.target) && !navLinks.contains(e.target)) {
            menuToggle.classList.remove('active');
            navLinks.classList.remove('active');
        }
    });
}

// ====================================
// Scroll Reveal Animation
// ====================================
function initScrollReveal() {
    const revealElements = document.querySelectorAll('.reveal');

    const revealOnScroll = () => {
        revealElements.forEach(element => {
            const elementTop = element.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;
            const revealPoint = 100;

            if (elementTop < windowHeight - revealPoint) {
                element.classList.add('active');
            }
        });
    };

    window.addEventListener('scroll', debounce(revealOnScroll, 50));
    revealOnScroll(); // Initial check
}

// ====================================
// Services Page - Service Details Accordion
// ====================================
function initServiceDetails() {
    const serviceDetails = document.querySelectorAll('.service-detail');

    serviceDetails.forEach((detail, index) => {
        const header = detail.querySelector('h3');

        // Open first service by default
        if (index === 0) {
            detail.classList.add('active');
        }

        if (header) {
            header.addEventListener('click', () => {
                // Close all other services
                serviceDetails.forEach(d => {
                    if (d !== detail) {
                        d.classList.remove('active');
                    }
                });

                // Toggle current service
                detail.classList.toggle('active');
            });
        }
    });
}

// ====================================
// Services Page - Process Accordion
// ====================================
function initProcessAccordion() {
    const accordionItems = document.querySelectorAll('.accordion-item');

    accordionItems.forEach(item => {
        const header = item.querySelector('.accordion-header');

        if (header) {
            header.addEventListener('click', () => {
                // Toggle current item
                item.classList.toggle('active');
            });
        }
    });
}

// ====================================
// Services Page - FAQ Accordion
// ====================================
function initFAQAccordion() {
    const faqItems = document.querySelectorAll('.faq-item');

    faqItems.forEach(item => {
        const question = item.querySelector('.faq-question');

        if (question) {
            question.addEventListener('click', () => {
                item.classList.toggle('active');
            });
        }
    });
}

// ====================================
// Portfolio Page - Filter Functionality
// ====================================
function initPortfolioFilter() {
    const filterButtons = document.querySelectorAll('.filter-btn');
    const portfolioItems = document.querySelectorAll('.portfolio-item');

    if (filterButtons.length === 0) return;

    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            const filter = button.getAttribute('data-filter');

            // Update active button
            filterButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');

            // Filter portfolio items
            portfolioItems.forEach(item => {
                const category = item.getAttribute('data-category');

                if (filter === 'all' || category === filter) {
                    item.classList.remove('hidden');
                    // Trigger reveal animation
                    setTimeout(() => {
                        item.classList.add('reveal', 'active');
                    }, 10);
                } else {
                    item.classList.add('hidden');
                }
            });
        });
    });
}

// ====================================
// Portfolio Page - Case Study Modals
// ====================================
function initCaseStudyModals() {
    const portfolioItems = document.querySelectorAll('.portfolio-item');
    const modals = document.querySelectorAll('.case-study-modal');
    const closeButtons = document.querySelectorAll('.close-modal');

    // Open modal when clicking portfolio item
    portfolioItems.forEach(item => {
        item.addEventListener('click', () => {
            const projectId = item.getAttribute('data-project');
            const modal = document.getElementById(`modal-${projectId}`);

            if (modal) {
                modal.classList.add('active');
                document.body.style.overflow = 'hidden'; // Prevent background scroll
            }
        });
    });

    // Close modal when clicking close button
    closeButtons.forEach(button => {
        button.addEventListener('click', (e) => {
            e.stopPropagation();
            const modal = button.closest('.case-study-modal');
            if (modal) {
                modal.classList.remove('active');
                document.body.style.overflow = ''; // Restore scroll
            }
        });
    });

    // Close modal when clicking outside content
    modals.forEach(modal => {
        modal.addEventListener('click', (e) => {
            if (e.target === modal) {
                modal.classList.remove('active');
                document.body.style.overflow = ''; // Restore scroll
            }
        });
    });

    // Close modal with Escape key
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            modals.forEach(modal => {
                modal.classList.remove('active');
                document.body.style.overflow = ''; // Restore scroll
            });
        }
    });
}

// ====================================
// Contact Form Validation & Submission
// ====================================
function initContactForm() {
    const form = document.getElementById('contactForm');
    if (!form) return;

    // Real-time validation
    const inputs = form.querySelectorAll('input[required], textarea[required], select[required]');

    inputs.forEach(input => {
        input.addEventListener('blur', () => {
            validateField(input);
        });

        input.addEventListener('input', () => {
            if (input.parentElement.classList.contains('error')) {
                validateField(input);
            }
        });
    });

    // Form submission
    form.addEventListener('submit', (e) => {
        e.preventDefault();

        let isValid = true;

        // Validate all required fields
        inputs.forEach(input => {
            if (!validateField(input)) {
                isValid = false;
            }
        });

        if (isValid) {
            // Show success message
            const successMessage = document.getElementById('successMessage');
            if (successMessage) {
                successMessage.classList.add('show');
                form.reset();

                // Scroll to success message
                successMessage.scrollIntoView({ behavior: 'smooth', block: 'center' });

                // Hide success message after 10 seconds
                setTimeout(() => {
                    successMessage.classList.remove('show');
                }, 10000);
            }

            // Here you would typically send the form data to a server
            console.log('Form submitted successfully');

            // Example of collecting form data
            const formData = new FormData(form);
            const data = Object.fromEntries(formData);
            console.log('Form data:', data);
        } else {
            // Scroll to first error
            const firstError = form.querySelector('.form-group.error');
            if (firstError) {
                firstError.scrollIntoView({ behavior: 'smooth', block: 'center' });
            }
        }
    });
}

// Validate individual field
function validateField(field) {
    const formGroup = field.parentElement;

    // Remove previous error state
    formGroup.classList.remove('error');

    // Check if field is empty (for required fields)
    if (field.hasAttribute('required') && !field.value.trim()) {
        formGroup.classList.add('error');
        return false;
    }

    // Email validation
    if (field.type === 'email' && field.value.trim()) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(field.value.trim())) {
            formGroup.classList.add('error');
            return false;
        }
    }

    // Select validation
    if (field.tagName === 'SELECT' && field.hasAttribute('required')) {
        if (!field.value || field.value === '') {
            formGroup.classList.add('error');
            return false;
        }
    }

    return true;
}

// ====================================
// Smooth Scroll for Anchor Links
// ====================================
function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const href = this.getAttribute('href');

            // Skip if it's just "#"
            if (href === '#') return;

            e.preventDefault();
            const target = document.querySelector(href);

            if (target) {
                const headerOffset = 100;
                const elementPosition = target.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
}

// ====================================
// Initialize All Functions
// ====================================
document.addEventListener('DOMContentLoaded', () => {
    // Initialize global features
    initHeaderScroll();
    initMobileMenu();
    initScrollReveal();
    initSmoothScroll();

    // Initialize page-specific features
    initServiceDetails();
    initProcessAccordion();
    initFAQAccordion();
    initPortfolioFilter();
    initCaseStudyModals();
    initContactForm();

    console.log('KOVO DESIGN website initialized successfully!');
});

// ====================================
// Handle Page Visibility (for animations)
// ====================================
document.addEventListener('visibilitychange', () => {
    if (!document.hidden) {
        // Retrigger scroll reveal when page becomes visible
        initScrollReveal();
    }
});

// ====================================
// Handle Window Resize
// ====================================
window.addEventListener('resize', debounce(() => {
    // Close mobile menu on resize to desktop
    if (window.innerWidth > 768) {
        const menuToggle = document.querySelector('.mobile-menu-toggle');
        const navLinks = document.querySelector('.nav-links');

        if (menuToggle && navLinks) {
            menuToggle.classList.remove('active');
            navLinks.classList.remove('active');
        }
    }
}, 250));
