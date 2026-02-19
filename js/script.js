document.addEventListener("DOMContentLoaded", function () {
  const counters = document.querySelectorAll(".number");

  counters.forEach((counter) => {
    const target = +counter.getAttribute("data-target");
    const hasPlus = target !== 0; // add + for all except zero

    const updateCount = () => {
      const current = +counter.innerText.replace("+", "");
      const increment = target / 100;

      if (current < target) {
        counter.innerText =
          Math.ceil(current + increment) + (hasPlus ? "+" : "");
        setTimeout(updateCount, 70);
      } else {
        counter.innerText = target + (hasPlus ? "+" : "");
      }
    };

    counter.innerText = "0";
    updateCount();
  });
});
const buttons = document.querySelectorAll(".filter-btn");
const projects = document.querySelectorAll(".project-card");

buttons.forEach(button => {
  button.addEventListener("click", () => {

    document.querySelector(".filter-btn.active").classList.remove("active");
    button.classList.add("active");

    const filter = button.getAttribute("data-filter");

    projects.forEach(project => {
      if (filter === "all") {
        project.style.display = "block";
      } else {
        project.style.display = project.classList.contains(filter)
          ? "block"
          : "none";
      }
    });

  });
});
