document.addEventListener("DOMContentLoaded", () => {
  const sidebar = document.getElementById("pst-primary-sidebar");
  const modal = document.getElementById("pst-primary-sidebar-modal");
  const toggles = document.querySelectorAll(".primary-toggle");

  toggles.forEach((btn, idx) => {
    // The first .primary-toggle already has theme listeners attached.
    if (idx === 0) return;

    btn.addEventListener("click", (e) => {
      if (!sidebar) return;
      if (window.matchMedia("(min-width: 992px)").matches) {
        e.preventDefault();
        e.stopImmediatePropagation();
        sidebar.classList.toggle("pst-sidebar-hidden");
      } else if (modal && toggles[0]) {
        e.preventDefault();
        toggles[0].click();
      }
      btn.blur();
    });
  });
});
