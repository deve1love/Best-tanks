document.addEventListener('DOMContentLoaded', () => {
  const selected = document.getElementById("selected");
  const options = document.querySelectorAll(".option");
  const details = document.querySelector(".lang-dropdown details");

  options.forEach(opt => {
    opt.addEventListener("click", (e) => {
      e.preventDefault(); // ❗ չթողնել որ href-ը բացվի
      const flagImg = opt.querySelector('.flag img').outerHTML;
      const label = opt.dataset.label;
      selected.innerHTML = `<span class="flag">${flagImg}</span><span class="lang-label">${label}</span> <div class="chev" aria-hidden="true">▾</div>`;
      details.open = false; // փակում ենք dropdown-ը
    });
  });
});
