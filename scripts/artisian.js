(() => {
  const root = document.getElementById("faro-blade-page");
  if (!root) return;

  const button = root.querySelector(".fb-menu-button");
  const panel = root.querySelector("#fb-menu-panel");

  button.addEventListener("click", () => {
    const opening = button.getAttribute("aria-expanded") !== "true";
    button.setAttribute("aria-expanded", String(opening));
    panel.hidden = !opening;
  });

  panel.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      panel.hidden = true;
      button.setAttribute("aria-expanded", "false");
    });
  });

  root.querySelectorAll('a[href="#"]').forEach((link) => {
    link.addEventListener("click", (event) => event.preventDefault());
  });

  const year = root.querySelector("#fb-year");
  if (year) year.textContent = "2035";
})();
