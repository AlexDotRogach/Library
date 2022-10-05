import { Notify } from "notiflix";
const BASE = "http://localhost:4000/books";

const utilitiesObj = {
  setting(type, data) {
    return {
      method: type,
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json; charset=UTF-8",
      },
    };
  },

  async checkIs(fetchData) {
    try {
      const response = await fetch(BASE);
      const books = await response.json();
      for (const book of books) {
        if (book.name === fetchData.name) {
          return { bool: true, id: book.id };
        }
      }

      return { bool: false, id: 0 };
    } catch (error) {
      Notify.failure(error);
    }
  },
};

export default utilitiesObj;
