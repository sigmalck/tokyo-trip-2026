const releaseAt = new Date("2026-06-07T00:00:00+09:00");
const countdown = document.querySelector("[data-countdown]");

function updateCountdown() {
  if (!countdown) return;
  const diff = releaseAt.getTime() - Date.now();
  if (diff <= 0) {
    countdown.textContent = "现在可以抢票";
    return;
  }
  const days = Math.floor(diff / 86400000);
  const hours = Math.floor((diff % 86400000) / 3600000);
  const minutes = Math.floor((diff % 3600000) / 60000);
  countdown.textContent = `${days} 天 ${hours} 小时 ${minutes} 分后开售`;
}

updateCountdown();
setInterval(updateCountdown, 60000);

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
