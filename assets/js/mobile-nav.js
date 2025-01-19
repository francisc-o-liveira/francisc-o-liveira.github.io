document.addEventListener('DOMContentLoaded', function() {
  const mobileNavToggle = document.querySelector('.mobile-nav-toggle');
  const navMenu = document.querySelector('.nav-menu');
  const toggleIcon = mobileNavToggle.querySelector('i');

  mobileNavToggle.addEventListener('click', function(e) {
    e.stopPropagation();
    navMenu.classList.toggle('mobile-nav-active');
    mobileNavToggle.classList.toggle('mobile-nav-active');
    toggleIcon.classList.toggle('bx-menu');
    toggleIcon.classList.toggle('bx-x');
  });

  // Close menu when clicking outside
  document.addEventListener('click', function(e) {
    if (!navMenu.contains(e.target) && !mobileNavToggle.contains(e.target) && navMenu.classList.contains('mobile-nav-active')) {
      navMenu.classList.remove('mobile-nav-active');
      mobileNavToggle.classList.remove('mobile-nav-active');
      toggleIcon.classList.add('bx-menu');
      toggleIcon.classList.remove('bx-x');
    }
  });

  // Prevent menu from closing when clicking inside
  navMenu.addEventListener('click', function(e) {
    e.stopPropagation();
  });
}); 