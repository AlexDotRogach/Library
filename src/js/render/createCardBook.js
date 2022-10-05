export default function createCardBook(book) {
  const { id, name, rating, describe } = book;

  return `<div class="books__item">
      <div class="books__name" data-id=${id}><span>name:</span>${name}</div>
      <div class="books__rating"><span>rating:</span>${rating}</div>
      <div class="books__describe">
        ${describe}
      </div>
      <button class="delete">delete</button>
      </div>`;
}
