const vh = window.innerHeight * 0.01;
document.documentElement.style.setProperty('--vh', `${vh}px`);

document.addEventListener("DOMContentLoaded", function () {
  const parent = document.querySelector('.main > .parent');
  const footer = document.querySelector('.footer');

  const parentRect = parent.getBoundingClientRect();
  const parentBottom = parentRect.bottom;
  const footerTop = footer.getBoundingClientRect().top;

  if (footerTop < (parentBottom - 10)) {
    const h = Math.round(footerTop - parentRect.top);
    parent.style.height = (h + 'px');
  }
});
