export default function control() {
  const contBtn = document.querySelector(".control-btn");
  const { childNodes } = document.querySelector(".control");
  const [add, update] = childNodes;
  const obj = {
    add() {
      add.classList.toggle("show");
    },
    update() {
      update.classList.toggle("show");
    },
  };

  contBtn.addEventListener("click", (e) => {
    if (e.target.getAttribute("control") === "work") {
      changeState(...e.target.classList);
      return "";
    }

    if (e.target.classList.contains("hide")) childNodes.forEach(hide);
  });

  function changeState(name = "") {
    childNodes.forEach(hide);
    obj[name]();
  }

  function hide(item) {
    item.classList?.remove("show");
  }
}
