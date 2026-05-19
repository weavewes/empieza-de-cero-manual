/**
 * Notion/Outline-inspired Navigation
 * Handles: mobile menu, collapsible sidebar items, scroll to top, smooth scroll
 */

(function() {
  'use strict';

  // ============================================
  // DOM Elements
  // ============================================
  const menuToggle = document.getElementById('menuToggle');
  const sidebarClose = document.getElementById('sidebarClose');
  const sidebar = document.getElementById('sidebar');
  const sidebarOverlay = document.getElementById('sidebarOverlay');
  const scrollTopBtn = document.getElementById('scrollTop');
  const navToggles = document.querySelectorAll('.nav-toggle');

  // ============================================
  // Mobile Menu
  // ============================================
  function openSidebar() {
    sidebar.classList.add('open');
    sidebarOverlay.classList.add('active');
    document.body.style.overflow = 'hidden';
  }

  function closeSidebar() {
    sidebar.classList.remove('open');
    sidebarOverlay.classList.remove('active');
    document.body.style.overflow = '';
  }

  if (menuToggle) {
    menuToggle.addEventListener('click', openSidebar);
  }

  if (sidebarClose) {
    sidebarClose.addEventListener('click', closeSidebar);
  }

  if (sidebarOverlay) {
    sidebarOverlay.addEventListener('click', closeSidebar);
  }

  // Close sidebar on escape key
  document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
      closeSidebar();
    }
  });

  // Close sidebar when clicking on a nav link (mobile)
  const navLinks = document.querySelectorAll('.nav-link, .nav-child-link');
  navLinks.forEach(function(link) {
    link.addEventListener('click', function() {
      if (window.innerWidth <= 768) {
        closeSidebar();
      }
    });
  });

  // ============================================
  // Collapsible Navigation Items
  // ============================================
  navToggles.forEach(function(toggle) {
    toggle.addEventListener('click', function(e) {
      e.preventDefault();
      e.stopPropagation();

      const navItem = this.closest('.nav-item');
      const isExpanded = navItem.classList.contains('expanded');

      // Toggle current item
      navItem.classList.toggle('expanded', !isExpanded);
      this.setAttribute('aria-expanded', String(!isExpanded));

      // Optional: close other expanded items at the same level
      // Uncomment below if you want accordion behavior
      /*
      const siblings = navItem.parentElement.querySelectorAll(':scope > .nav-item.expanded');
      siblings.forEach(function(sibling) {
        if (sibling !== navItem) {
          sibling.classList.remove('expanded');
          const siblingToggle = sibling.querySelector('.nav-toggle');
          if (siblingToggle) {
            siblingToggle.setAttribute('aria-expanded', 'false');
          }
        }
      });
      */
    });
  });

  // Auto-expand parent items when a child is active
  function expandActiveItems() {
    const activeLinks = document.querySelectorAll('.nav-child-link.active');
    activeLinks.forEach(function(link) {
      const parentItem = link.closest('.nav-item');
      if (parentItem) {
        parentItem.classList.add('expanded');
        const toggle = parentItem.querySelector('.nav-toggle');
        if (toggle) {
          toggle.setAttribute('aria-expanded', 'true');
        }
      }
    });
  }

  expandActiveItems();

  // ============================================
  // Scroll to Top Button
  // ============================================
  function updateScrollTopButton() {
    if (!scrollTopBtn) return;

    if (window.scrollY > 400) {
      scrollTopBtn.classList.add('visible');
    } else {
      scrollTopBtn.classList.remove('visible');
    }
  }

  if (scrollTopBtn) {
    scrollTopBtn.addEventListener('click', function() {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    });
  }

  window.addEventListener('scroll', updateScrollTopButton);
  updateScrollTopButton(); // Initial check

  // ============================================
  // Smooth Scroll for Anchor Links
  // ============================================
  document.querySelectorAll('a[href^="#"]').forEach(function(anchor) {
    anchor.addEventListener('click', function(e) {
      const targetId = this.getAttribute('href');
      if (targetId === '#') return;

      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        e.preventDefault();
        targetElement.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    });
  });

  // ============================================
  // Active Navigation Highlighting
  // ============================================
  function highlightCurrentPage() {
    const currentPath = window.location.pathname;
    const currentPage = currentPath.split('/').pop() || 'index.html';

    // Highlight parent nav items based on current section
    const allNavLinks = document.querySelectorAll('.nav-link');
    allNavLinks.forEach(function(link) {
      const href = link.getAttribute('href');
      if (href && currentPath.includes(href) && href !== '/') {
        link.classList.add('active');
      }
    });
  }

  highlightCurrentPage();

  // ============================================
  // Keyboard Navigation Enhancement
  // ============================================
  document.querySelectorAll('.nav-toggle').forEach(function(toggle) {
    toggle.addEventListener('keydown', function(e) {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        this.click();
      }
    });
  });

  // ============================================
  // Table of Contents Auto-generation (optional)
  // ============================================
  function generateTOC() {
    const content = document.querySelector('.content');
    const headings = content.querySelectorAll('h2, h3');
    
    if (headings.length < 3) return; // Only generate TOC if enough headings

    const toc = document.createElement('div');
    toc.className = 'toc';
    toc.innerHTML = '<h4 class="toc-title">En esta página</h4>';

    const tocList = document.createElement('ul');
    tocList.className = 'toc-list';

    headings.forEach(function(heading, index) {
      // Add ID to heading if not present
      if (!heading.id) {
        heading.id = 'heading-' + index;
      }

      const tocItem = document.createElement('li');
      tocItem.className = 'toc-item toc-level-' + heading.tagName.toLowerCase();

      const tocLink = document.createElement('a');
      tocLink.href = '#' + heading.id;
      tocLink.className = 'toc-link';
      tocLink.textContent = heading.textContent;

      tocItem.appendChild(tocLink);
      tocList.appendChild(tocItem);
    });

    toc.appendChild(tocList);

    // Insert TOC after breadcrumb
    const breadcrumb = document.querySelector('.breadcrumb');
    if (breadcrumb) {
      breadcrumb.after(toc);
    }
  }

  // Uncomment to enable auto-generated TOC
  // generateTOC();

  // ============================================
  // External Links: Open in New Tab
  // ============================================
  document.querySelectorAll('.content a[href^="http"]').forEach(function(link) {
    if (!link.hasAttribute('target')) {
      link.setAttribute('target', '_blank');
      link.setAttribute('rel', 'noopener noreferrer');
    }
  });

  // ============================================
  // Console Greeting
  // ============================================
  console.log('%c📘 Manual de Operaciones - Empieza de Cero', 'font-size: 16px; font-weight: bold; color: #2eaadc;');
  console.log('%cDiseñado con 💙 por Weaves', 'font-size: 12px; color: #6b6b6b;');

})();