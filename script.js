// Allow tap-to-toggle on touch devices (and click on desktop)
document.querySelectorAll(".bio-card__overlay").forEach((overlay) => {
  overlay.addEventListener("click", (event) => {
    // Prevent the "hover" behaviour from fighting with our click toggle
    event.stopPropagation();
    const isOpen = overlay.classList.toggle("is-open");
    overlay.setAttribute("aria-expanded", String(isOpen));
  });
});
