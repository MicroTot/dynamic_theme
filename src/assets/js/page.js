var lastScrollTop;
navbar = document.getElementById('mainNav');
window.addEventListener('scroll',function() {
  var scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  if(scrollTop > lastScrollTop) {
    mainNav.classList.add("navbar-shrink");
  } 
  else if(scrollTop == lastScrollTop) {
    mainNav.classList.add("navbar-shrink");
  } 
  else  {
    mainNav.classList.remove("navbar-shrink"); // Collapse now if page is not at top
  }

  lastScrollTop = scrollTop;
});