import formObject from "./formObject";

function deleteElement() {
  const books = document.querySelector(".books");

  books.addEventListener("click", (e) => {
    if (e.target.classList.contains("delete")) {
      const id = e.target.parentElement.firstElementChild.dataset.id;
      formObject.delete(id);

      e.target.parentElement.remove();
    }
  });
}

export default deleteElement;
