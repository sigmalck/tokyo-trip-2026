const filterButtons = document.querySelectorAll("[data-day-filter]");
const dayCards = document.querySelectorAll("[data-day]");

filterButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const filter = button.dataset.dayFilter;
    filterButtons.forEach((item) => item.classList.remove("is-active"));
    button.classList.add("is-active");
    dayCards.forEach((card) => {
      const shouldShow = filter === "all" || card.dataset.day === filter;
      card.classList.toggle("is-hidden", !shouldShow);
    });
  });
});

document.querySelector("[data-print]")?.addEventListener("click", () => {
  window.print();
});
