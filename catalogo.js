const filterGroup = document.querySelector(".filters");
const filterButtons = [...filterGroup.querySelectorAll("button")];
const products = [...document.querySelectorAll(".product")];
const result = document.querySelector("#resultado");

filterGroup.hidden = false;

filterButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const filter = button.dataset.filter;

    filterButtons.forEach((option) => {
      option.setAttribute("aria-pressed", String(option === button));
    });

    let count = 0;
    products.forEach((product) => {
      product.hidden = filter !== "todas" && product.dataset.category !== filter;
      if (!product.hidden) count += 1;
    });

    result.textContent = count === 1 ? "1 peça encontrada." : count + " peças encontradas.";
  });
});
