import formObject from "./formObject";

export default function formControl() {
  const ref = {
    addForm: document.querySelector("#add"),
    updateForm: document.querySelector("#update"),
  };

  ref.addForm.addEventListener("submit", formObject.add.bind(formObject));
  ref.updateForm.addEventListener("submit", formObject.update.bind(formObject));
}
