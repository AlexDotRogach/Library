import createCardBook from "./createCardBook";

function render() {
  const refs = {
    listBook: document.querySelector(".books"),
  };

  fetch("http://localhost:4000/books")
    .then((responce) => {
      if (!responce.ok) {
        throw new Error("");
      }
      return responce.json();
    })
    .then((data) => {
      refs.listBook.innerHTML = "";
      refs.listBook.insertAdjacentHTML(
        "beforeend",
        data.map(createCardBook).join("")
      );
    });
}

export default render;
